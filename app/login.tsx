/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppButton } from "@/components/AppButton";
import { CheckmarkIcon } from "@/components/icons";
import { Colors } from "@/constants/theme";
import { useProfile } from "@/context/ProfileContext";
import { useTheme } from "@/context/ThemeContext";
import { LoginFormData, useLoginForm } from "@/hooks/useLoginForm";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();

  const { control, handleSubmit, errors } = useLoginForm();
  const { updateProfile } = useProfile();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log("Login Data:", data);

    // Update profile with dynamic data based on login ID
    updateProfile({
      name: data.id,
      email: `${data.id.toLowerCase().replace(/\s+/g, "")}@example.com`,
      phone: "0123-456-789", // Default phone for now
      address: "123, Solarum Street, Energy City, Earth", // Default address
    });

    router.replace("/(tabs)");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Top Background Section */}
          <View style={styles.topSection}>
            <LinearGradient
              colors={[theme.lightblue, theme.blue, theme.midnight]}
              style={StyleSheet.absoluteFill}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
            <Image
              source={require("@/assets/images/login/login-background.png")}
              style={styles.bgImage}
              contentFit="cover"
              contentPosition="center"
            />
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.logoContainer}>
                {/* Assuming login-image is the S logo or main logo */}
                <Image
                  source={
                    isDark
                      ? require("@/assets/images/login/login-image-dark.png")
                      : require("@/assets/images/login/login-image.png")
                  }
                  style={styles.logo}
                  contentFit="contain"
                />
              </View>
            </SafeAreaView>
          </View>

          {/* Login Card Section */}
          <View
            style={[
              styles.loginCard,
              { backgroundColor: isDark ? theme.black : theme.white },
            ]}
          >
            <Text
              style={[
                styles.title,
                { color: isDark ? theme.lightblue : theme.blue },
              ]}
            >
              Log In
            </Text>

            <View style={styles.inputGroup}>
              <Controller
                control={control}
                name="id"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[
                      styles.input,
                      {
                        backgroundColor: isDark ? theme.carddark : theme.white,
                        borderColor: theme.systemgray,
                        color: isDark ? theme.white : theme.black,
                      },
                    ]}
                    placeholder="Enter Your ID"
                    placeholderTextColor={theme.systemgray}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.id && (
                <Text style={[styles.errorText, { color: theme.brightred }]}>
                  {errors.id.message}
                </Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[
                      styles.input,
                      {
                        backgroundColor: isDark ? theme.carddark : theme.white,
                        borderColor: theme.systemgray,
                        color: isDark ? theme.white : theme.black,
                      },
                    ]}
                    placeholder="Enter Your Password"
                    placeholderTextColor={theme.systemgray}
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.password && (
                <Text style={[styles.errorText, { color: theme.brightred }]}>
                  {errors.password.message}
                </Text>
              )}
            </View>

            <View style={styles.optionsRow}>
              <Controller
                control={control}
                name="rememberMe"
                render={({ field: { onChange, value } }) => (
                  <TouchableOpacity
                    style={styles.rememberMe}
                    onPress={() => onChange(!value)}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        {
                          borderColor: theme.systemgray,
                        },
                        value && {
                          backgroundColor: theme.tint,
                          borderColor: theme.tint,
                        },
                      ]}
                    >
                      {value && <CheckmarkIcon color={theme.white} size={14} />}
                    </View>
                    <Text
                      style={[styles.rememberMeText, { color: theme.text }]}
                    >
                      Remember Me
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity>
                <Text style={[styles.forgotText, { color: theme.text }]}>
                  Forgot?
                </Text>
              </TouchableOpacity>
            </View>

            <AppButton
              title="Log In"
              onPress={handleSubmit(onSubmit)}
              style={styles.loginButton}
              textStyle={[styles.loginButtonText, { color: theme.white }]}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  keyboardView: {
    flex: 1,
  },
  topSection: {
    height: height * 0.45,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    zIndex: 10,
  },
  logoContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
  },
  loginCard: {
    flex: 1,
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 40,
    // Add shadow/elevation for light mode
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberMeText: {
    fontSize: 14,
  },
  forgotText: {
    fontSize: 14,
  },
  loginButton: {
    height: 55,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 12,
    marginTop: 6,
  },
});
