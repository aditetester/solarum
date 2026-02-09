import {
  AttachIcon,
  CameraIcon,
  CloseIcon,
  EllipsisVerticalIcon,
  SendMsgIcon,
} from "@/components/icons";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState } from "react";
import {
  ActionSheetIOS,
  Alert,
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

type Message = {
  id: string;
  text?: string;
  sender: "user" | "agent";
  timestamp: Date;
  images?: string[];
};

export default function FeedbackScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const insets = useSafeAreaInsets();

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi ! How Was Our Solar Service?",
      sender: "agent",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "Could you share photos of the solar service we completed ?",
      sender: "agent",
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "Yes, Sure....",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "4",
      sender: "user",
      timestamp: new Date(),
      images: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1632&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1632&auto=format&fit=crop",
      ],
    },
    {
      id: "5",
      text: "Happy with the overall solar service.",
      sender: "user",
      timestamp: new Date(),
    },
  ]);

  const [galleryVisible, setGalleryVisible] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
  };

  const pickImage = async (useCamera: boolean) => {
    const permissionResult = useCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission required",
        "Permission to access " +
          (useCamera ? "camera" : "gallery") +
          " is required!",
      );
      return;
    }

    const result = useCamera
      ? await ImagePicker.launchCameraAsync({ quality: 0.5 })
      : await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"],
          allowsMultipleSelection: true,
          quality: 0.5,
        });

    if (!result.canceled) {
      const selectedUris = result.assets.map((asset) => asset.uri);
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "user",
        timestamp: new Date(),
        images: selectedUris,
      };
      setMessages((prev) => [...prev, newMessage]);
    }
  };

  const showImageOptions = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", "Take Photo", "Choose from Gallery"],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) pickImage(true);
          else if (buttonIndex === 2) pickImage(false);
        },
      );
    } else {
      Alert.alert("Select Option", "Choose image source", [
        { text: "Cancel", style: "cancel" },
        { text: "Take Photo", onPress: () => pickImage(true) },
        { text: "Choose from Gallery", onPress: () => pickImage(false) },
      ]);
    }
  };

  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images);
    setInitialGalleryIndex(index);
    setGalleryVisible(true);
  };

  const renderImageContent = (images: string[]) => {
    const count = images.length;
    if (count === 1) {
      return (
        <TouchableOpacity
          style={styles.singleImageContainer}
          onPress={() => openGallery(images, 0)}
        >
          <Image source={{ uri: images[0] }} style={styles.fullImageDisplay} />
        </TouchableOpacity>
      );
    } else if (count === 2) {
      return (
        <View style={styles.doubleImageContainer}>
          <TouchableOpacity
            style={styles.stackedImage}
            onPress={() => openGallery(images, 0)}
          >
            <Image
              source={{ uri: images[0] }}
              style={styles.fullImageDisplay}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stackedImage}
            onPress={() => openGallery(images, 1)}
          >
            <Image
              source={{ uri: images[1] }}
              style={styles.fullImageDisplay}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={[
            styles.gridContainer,
            { borderColor: theme.lightblue, backgroundColor: theme.lightblue },
          ]}
        >
          <TouchableOpacity
            style={styles.gridLarge}
            onPress={() => openGallery(images, 0)}
          >
            <Image
              source={{ uri: images[0] }}
              style={styles.fullImageDisplay}
            />
          </TouchableOpacity>
          <View style={styles.gridSmallColumn}>
            <TouchableOpacity
              style={styles.gridSmall}
              onPress={() => openGallery(images, 1)}
            >
              <Image
                source={{ uri: images[1] }}
                style={styles.fullImageDisplay}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridSmall}
              onPress={() => openGallery(images, 2)}
            >
              <Image
                source={{ uri: images[2] }}
                style={styles.fullImageDisplay}
              />
              {count > 3 && (
                <View style={styles.plusOverlay}>
                  <Text style={styles.plusText}>+ {count - 2}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";
    return (
      <View
        style={[styles.messageRow, isUser ? styles.userRow : styles.agentRow]}
      >
        {!isUser && (
          <Image
            source={require("@/assets/images/feedback/feedback.png")}
            style={[
              styles.smallAvatar,
              {
                backgroundColor: theme.systemgray,
                borderWidth: 1,
                borderColor: theme.systemgray,
              },
            ]}
          />
        )}
        <View style={styles.messageContent}>
          {item.text && (
            <View
              style={[
                styles.bubble,
                isUser
                  ? styles.userBubble
                  : [
                      styles.agentBubble,
                      { backgroundColor: isDark ? "#262626" : "#E8E8E8" },
                    ],
              ]}
            >
              <Text
                style={[
                  styles.bubbleText,
                  { color: isUser ? "#FFF" : isDark ? "#FFF" : "#333" },
                ]}
              >
                {item.text}
              </Text>
            </View>
          )}
          {item.images && renderImageContent(item.images)}
        </View>
        {isUser && (
          <Image
            source={require("@/assets/images/profile/avatar.png")}
            style={styles.smallAvatar}
          />
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* HEADER */}
      <ScreenHeader
        title="Feedback"
        showBackButton
        rightComponent={
          <TouchableOpacity style={styles.headerBtn}>
            <EllipsisVerticalIcon size={24} color={theme.text} />
          </TouchableOpacity>
        }
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContent}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
        />

        {/* INPUT BAR */}
        <View
          style={[
            styles.inputBar,
            {
              backgroundColor: theme.background,
              paddingBottom:
                Platform.OS === "ios" ? Math.max(insets.bottom, 15) : 35,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.inputBtn,
              {
                backgroundColor: isDark ? "#1C1C1E" : "#F2F2F7",
                borderColor: isDark ? "#38383A" : "#BBB",
              },
            ]}
            onPress={showImageOptions}
          >
            <CameraIcon size={22} color={theme.text} />
          </TouchableOpacity>

          <View
            style={[
              styles.inputField,
              {
                backgroundColor: isDark ? "#1C1C1E" : "#F2F2F7",
                borderColor: isDark ? "#38383A" : "#BBB",
              },
            ]}
          >
            <TextInput
              style={[styles.textInput, { color: theme.text }]}
              placeholder="Write message...."
              placeholderTextColor="#8E8E93"
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity onPress={sendMessage}>
              <SendMsgIcon
                size={20}
                color={theme.text}
                style={{ transform: [{ rotate: "180deg" }] }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.inputBtn,
              {
                backgroundColor: isDark ? "#1C1C1E" : "#F2F2F7",
                borderColor: isDark ? "#38383A" : "#BBB",
              },
            ]}
          >
            <AttachIcon size={18} color={theme.text} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* GALLERY MODAL */}
      <Modal visible={galleryVisible} transparent={true} animationType="fade">
        <View
          style={[
            styles.galleryShell,
            {
              backgroundColor: isDark
                ? "rgba(0,0,0,0.95)"
                : "rgba(255,255,255,0.95)",
            },
          ]}
        >
          <TouchableOpacity
            style={styles.galleryClose}
            onPress={() => setGalleryVisible(false)}
          >
            <CloseIcon size={30} color={theme.text} />
          </TouchableOpacity>

          <FlatList
            data={galleryImages}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={initialGalleryIndex}
            getItemLayout={(data, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.galleryImageSlide}>
                <Image
                  source={{ uri: item }}
                  style={styles.galleryFullImg}
                  resizeMode="contain"
                />
              </View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 15,
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    padding: 16,
  },
  messageRow: {
    flexDirection: "row",
    marginBottom: 10,
    maxWidth: "85%",
  },
  agentRow: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  userRow: {
    alignSelf: "flex-end",
    alignItems: "flex-end", // User avatar aligned to bottom
  },
  smallAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  messageContent: {
    flex: 1,
  },
  bubble: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 4,
  },
  agentBubble: {
    borderTopLeftRadius: 0,
  },
  userBubble: {
    backgroundColor: "#4BB2E1",
    borderTopRightRadius: 0,
  },
  bubbleText: {
    fontSize: 15,
    lineHeight: 22,
  },
  singleImageContainer: {
    width: 250,
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 4,
  },
  doubleImageContainer: {
    width: 250,
    marginTop: 4,
  },
  stackedImage: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 8,
  },
  gridContainer: {
    width: 250,
    height: 200,
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 2,
    overflow: "hidden",
    marginTop: 8,
  },
  gridLarge: {
    flex: 2,
    marginRight: 2,
  },
  gridSmallColumn: {
    flex: 1,
  },
  gridSmall: {
    flex: 1,
    marginBottom: 2,
  },
  fullImageDisplay: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  plusOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  plusText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 8,
  },
  inputBtn: {
    width: 48,
    height: 48,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  inputField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    maxHeight: 120,
  },
  sendIcon: {
    marginLeft: 10,
  },
  galleryShell: {
    flex: 1,
  },
  galleryClose: {
    position: "absolute",
    top: 10,
    right: 25,
    zIndex: 100,
  },
  galleryImageSlide: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  galleryFullImg: {
    width: width,
    height: height * 0.8,
  },
});
