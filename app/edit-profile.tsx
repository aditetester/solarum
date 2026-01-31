import { Colors } from "@/constants/theme";
import { useProfile } from "@/context/ProfileContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";

export default function EditProfileScreen() {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];
  const isDark = scheme === "dark";
  const router = useRouter();

  const { profile: savedProfile, updateProfile } = useProfile();
  const [profile, setProfile] = useState(savedProfile);

  const onSave = () => {
    updateProfile(profile);
    Alert.alert("Success", "Profile updated successfully");
    router.back();
  };

  const onDiscard = () => {
    setProfile(savedProfile);
    Alert.alert("Discarded", "Changes have been discarded");
  };

  const renderInput = (
    label: string,
    value: string,
    icon: React.ComponentProps<typeof Ionicons>["name"],
    onChange: (v: string) => void,
    props?: any,
  ) => (
    <View
      style={[
        styles.inputBox,
        {
          backgroundColor: isDark ? theme.carddark : theme.cardlight,
          borderColor: isDark ? theme.borderdark : theme.borderlight,
        },
      ]}
    >
      <Text style={[styles.label, { color: theme.systemgray }]}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          value={value}
          onChangeText={onChange}
          style={[styles.input, { color: theme.text }]}
          {...props}
        />
        <Ionicons name={icon} size={18} color={theme.systemgray} />
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={22}
            color={theme.text}
            onPress={() => router.back()}
          />
          <Text style={[styles.headerTitle, { color: theme.text }]}>
            Edit Profile
          </Text>
          <View style={{ width: 22 }} />
        </View>

        {/* AVATAR */}
        <View style={styles.avatarWrapper}>
          <Image
            source={require("@/assets/images/profile/avatar.png")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.addIcon}>
            <Ionicons name="add" size={16} color={theme.white} />
          </TouchableOpacity>
        </View>

        {/* INPUTS */}
        {renderInput("Full Name", profile.name, "create-outline", (v) =>
          setProfile({ ...profile, name: v }),
        )}

        {renderInput(
          "E-mail",
          profile.email,
          "mail-outline",
          (v) => setProfile({ ...profile, email: v }),
          { keyboardType: "email-address" },
        )}

        {renderInput(
          "Phone",
          profile.phone,
          "call-outline",
          (v) => setProfile({ ...profile, phone: v }),
          { keyboardType: "phone-pad" },
        )}

        {renderInput(
          "Address",
          profile.address,
          "location-outline",
          (v) => setProfile({ ...profile, address: v }),
          { multiline: true },
        )}

        {/* Spacer so buttons never overlap */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* FIXED BOTTOM BUTTONS */}
      <View
        style={[
          styles.actions,
          {
            backgroundColor: theme.background,
            borderTopColor: isDark ? theme.borderdark : theme.borderlight,
          },
        ]}
      >
        <TouchableOpacity
          style={[styles.discard, { borderColor: theme.lightblue }]}
          onPress={onDiscard}
        >
          <Text style={{ color: theme.lightblue, fontWeight: "600" }}>
            Discard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.save, { backgroundColor: theme.systemblue }]}
          onPress={onSave}
        >
          <Text style={{ color: theme.white, fontWeight: "700" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 16 },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  avatarWrapper: {
    alignSelf: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  addIcon: {
    position: "absolute",
    bottom: 4,
    right: 4,
    backgroundColor: "#000",
    borderRadius: 14,
    padding: 5,
  },

  inputBox: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    paddingRight: 10,
  },

  actions: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
    borderTopWidth: 1,
    paddingBottom: 45,
  },
  discard: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },
  save: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
