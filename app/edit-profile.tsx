import { Colors } from "@/constants/theme";
import { useProfile } from "@/context/ProfileContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const insets = useSafeAreaInsets();
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
    router.back();
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
      <View style={styles.rowWrapper}>
        {/* TEXT (LABEL + VALUE) */}
        <View style={styles.textWrapper}>
          <Text style={[styles.label, { color: theme.systemgray }]}>
            {label}
          </Text>

          <TextInput
            value={value}
            onChangeText={onChange}
            style={[
              styles.input,
              props?.multiline && styles.multilineInput,
              { color: theme.text },
            ]}
            {...props}
          />
        </View>

        {/* ICON */}
        <View style={styles.iconWrapper}>
          <Ionicons name={icon} size={20} color={theme.systemgray} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
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
            <TouchableOpacity
              style={[
                styles.addIcon,
                { borderColor: isDark ? theme.white : theme.black },
              ]}
            >
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
        </ScrollView>
      </KeyboardAvoidingView>
      {/* FIXED BOTTOM BUTTONS */}
      <View
        style={[
          styles.actions,
          {
            backgroundColor: theme.background,
            borderTopColor: isDark ? theme.borderdark : theme.borderlight,
            paddingBottom: insets.bottom || 16,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
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
    borderWidth: 0.5,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  input: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },

  textColumn: {
    flex: 1, // ✅ FIXED available width for TextInput
    paddingRight: 12, // space before icon
  },

  rightIcon: {
    width: 24, // ✅ icon never affects text width
    marginTop: 16, // aligns with value text
  },
  multilineInput: {
    minHeight: 60,
    textAlignVertical: "top",
  },
  rowWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textWrapper: {
    flex: 1, // ✅ fixed usable width
    paddingRight: 12, // spacing before icon
  },

  iconWrapper: {
    // width: 24, // ✅ fixed icon space
    // alignItems: "center",
    // marginTop: 16, // aligns icon with value text
  },

  actions: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
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
