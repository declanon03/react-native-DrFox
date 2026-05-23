import { images } from "@/constants/images";
import { colors } from "@/theme";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { type RefObject, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AuthMode = "sign-up" | "sign-in";

type AuthScreenProps = {
  mode: AuthMode;
};

const socialProviders = [
  { name: "Google", icon: "google" },
  { name: "Facebook", icon: "facebook" },
  { name: "Apple", icon: "apple" },
] as const;

export function AuthScreen({ mode }: AuthScreenProps) {
  const isSignUp = mode === "sign-up";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const codeInputRef = useRef<TextInput>(null);

  const title = isSignUp ? "Create your account" : "Welcome back";
  const subtitle = isSignUp
    ? "Start your language journey today ✨"
    : "Continue your language journey today ✨";
  const actionLabel = isSignUp ? "Sign Up" : "Sign In";
  const footerCopy = isSignUp
    ? "Already have an account?"
    : "Don't have an account?";
  const footerLinkCopy = isSignUp ? "Log in" : "Sign up";
  const footerHref = isSignUp ? "/sign-in" : "/sign-up";

  const openVerification = () => {
    setVerificationCode("");
    setIsVerificationOpen(true);
    requestAnimationFrame(() => {
      codeInputRef.current?.focus();
    });
  };

  const handleCodeChange = (value: string) => {
    const nextCode = value.replace(/\D/g, "").slice(0, 6);

    setVerificationCode(nextCode);

    if (nextCode.length === 6) {
      Keyboard.dismiss();
      setIsVerificationOpen(false);
      router.replace("/");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 28,
          paddingHorizontal: 32,
          paddingTop: 22,
        }}
      >
        <View className="min-h-full justify-between">
          <View>
            <Pressable
              accessibilityLabel="Go back"
              className="h-9 w-9 justify-center"
              onPress={() => router.back()}
            >
              <Feather name="chevron-left" size={28} color="#09122D" />
            </Pressable>

            <View className="pt-[22px]">
              <Text className="font-poppins-bold text-[28px] leading-[36px] text-lingua-text-primary">
                {title}
              </Text>
              <Text className="pt-3 font-poppins-regular text-[15px] leading-[23px] text-[#6F748E]">
                {subtitle}
              </Text>
            </View>

            <View className="relative h-[150px] items-center">
              <Text className="absolute left-[92px] top-[50px] z-10 text-[20px] leading-[24px] text-[#FF8A00]">
                ✦
              </Text>
              <Text className="absolute right-[78px] top-[54px] z-10 text-[21px] leading-[25px] text-[#67A8FF]">
                ✦
              </Text>
              <Text className="absolute right-[46px] top-[96px] z-10 text-[21px] leading-[25px] text-[#FFD047]">
                ✦
              </Text>
              <Image
                source={images.mascotAuth}
                className="absolute top-2 h-[176px] w-[176px]"
                contentFit="contain"
              />
            </View>

            <View className="gap-3">
              <View className="h-[82px] justify-center rounded-[18px] border border-[#E9EBF3] bg-white px-5">
                <Text className="font-poppins-medium text-[14px] leading-5 text-[#747994]">
                  Email
                </Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  className="mt-1.5 p-0 font-poppins-medium text-[17px] leading-6 text-lingua-text-primary"
                  keyboardType="email-address"
                  onChangeText={setEmail}
                  placeholder="alex@gmail.com"
                  placeholderTextColor="#0D132B"
                  textContentType="emailAddress"
                  value={email}
                />
              </View>

              {isSignUp ? (
                <View className="h-[82px] flex-row items-center rounded-[18px] border border-[#E9EBF3] bg-white px-5">
                  <View className="flex-1">
                    <Text className="font-poppins-medium text-[14px] leading-5 text-[#747994]">
                      Password
                    </Text>
                    <TextInput
                      className="mt-1.5 p-0 font-poppins-medium text-[17px] leading-6 text-lingua-text-primary"
                      onChangeText={setPassword}
                      placeholder="•••••••••"
                      placeholderTextColor="#0D132B"
                      secureTextEntry={!showPassword}
                      textContentType="newPassword"
                      value={password}
                    />
                  </View>
                  <Pressable
                    accessibilityLabel={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="h-10 w-10 items-end justify-center"
                    onPress={() => setShowPassword((current) => !current)}
                  >
                    <Feather
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color="#747994"
                    />
                  </Pressable>
                </View>
              ) : null}

              <Pressable
                className="mt-1 min-h-[62px] items-center justify-center rounded-[16px] bg-lingua-purple px-5 shadow-[0_4px_0_#4D31E8]"
                onPress={openVerification}
              >
                <Text className="font-poppins-bold text-[20px] leading-7 text-white">
                  {actionLabel}
                </Text>
              </Pressable>
            </View>

            <View className="my-6 flex-row items-center gap-4">
              <View className="h-px flex-1 bg-[#E7E9F1]" />
              <Text className="font-poppins-regular text-[14px] leading-[22px] text-[#73788F]">
                or continue with
              </Text>
              <View className="h-px flex-1 bg-[#E7E9F1]" />
            </View>

            <View className="gap-3">
              {socialProviders.map((provider) => (
                <Pressable
                  key={provider.name}
                  className="min-h-[56px] flex-row items-center rounded-[16px] border border-[#EDF0F6] bg-white px-6"
                  onPress={() => {}}
                >
                  <View className="w-10 items-center">
                    <SocialIcon name={provider.icon} />
                  </View>
                  <Text className="flex-1 text-center font-poppins-medium text-[16px] leading-[24px] text-lingua-text-primary">
                    Continue with {provider.name}
                  </Text>
                  <View className="w-10" />
                </Pressable>
              ))}
            </View>
          </View>

          <View className="items-center pt-10">
            <Text className="font-poppins-regular text-[15px] leading-[23px] text-[#73788F]">
              {footerCopy}{" "}
              <Link href={footerHref} asChild>
                <Text className="font-poppins-semibold text-lingua-deep-purple">
                  {footerLinkCopy}
                </Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>

      <VerificationModal
        code={verificationCode}
        inputRef={codeInputRef}
        isVisible={isVerificationOpen}
        onChangeCode={handleCodeChange}
        onClose={() => setIsVerificationOpen(false)}
      />
    </SafeAreaView>
  );
}

function SocialIcon({ name }: { name: (typeof socialProviders)[number]["icon"] }) {
  if (name === "google") {
    return (
      <Text className="font-poppins-bold text-[26px] leading-[30px] text-[#4285F4]">
        G
      </Text>
    );
  }

  if (name === "facebook") {
    return <FontAwesome name="facebook" size={28} color="#1877F2" />;
  }

  return <Ionicons name="logo-apple" size={30} color="#06102A" />;
}

type VerificationModalProps = {
  code: string;
  inputRef: RefObject<TextInput | null>;
  isVisible: boolean;
  onChangeCode: (value: string) => void;
  onClose: () => void;
};

function VerificationModal({
  code,
  inputRef,
  isVisible,
  onChangeCode,
  onClose,
}: VerificationModalProps) {
  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={isVisible}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-end bg-black/40 px-5 pb-5"
      >
        <Pressable className="absolute inset-0" onPress={onClose} />
        <View className="rounded-[24px] bg-white px-5 pb-6 pt-5">
          <Text className="font-poppins-bold text-[22px] leading-[30px] text-lingua-text-primary">
            Check your email
          </Text>
          <Text className="pt-2 font-poppins-regular text-[14px] leading-[22px] text-[#73788F]">
            You received an email. Enter the 6-digit verification code to
            continue.
          </Text>

          <Pressable
            className="relative mt-6 flex-row justify-between"
            onPress={() => inputRef.current?.focus()}
          >
            <TextInput
              ref={inputRef}
              autoComplete="one-time-code"
              autoFocus
              caretHidden
              className="absolute h-full w-full opacity-0"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={onChangeCode}
              textContentType="oneTimeCode"
              value={code}
            />
            {Array.from({ length: 6 }).map((_, index) => {
              const digit = code[index];
              const isActive = index === code.length;

              return (
                <View
                  key={index}
                  className={`h-12 w-10 items-center justify-center rounded-[12px] border ${
                    isActive ? "border-lingua-deep-purple" : "border-[#E3E6F0]"
                  } bg-white`}
                >
                  <Text className="font-poppins-semibold text-[20px] leading-7 text-lingua-text-primary">
                    {digit ?? ""}
                  </Text>
                </View>
              );
            })}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
