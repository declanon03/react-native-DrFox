import { images } from "@/constants/images";
import { Image } from "expo-image";
import { Link } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const horizontalPadding = 28;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 28,
          paddingHorizontal: horizontalPadding,
          paddingTop: 16,
        }}
      >
        <View className="min-h-full w-full justify-between">
          <View>
            <View
              className="flex-row items-center justify-center"
              style={{
                marginLeft: -horizontalPadding,
                width,
              }}
            >
              <Image
                source={images.mascotLogo}
                className="mr-3 h-11 w-11"
                contentFit="contain"
              />
              <Text className="font-poppins-bold text-[26px] leading-[34px] text-lingua-text-primary">
                DrFox
              </Text>
              <View className="w-[56px]" />
            </View>

            <View className="pt-12">
              <Text className="font-poppins-bold text-[34px] leading-[44px] text-lingua-text-primary">
                Your AI language{"\n"}
                <Text className="text-lingua-deep-purple">teacher.</Text>
              </Text>
              <Text className="pt-4 font-poppins-regular text-[17px] leading-[26px] text-[#73768D]">
                Real conversations, personalized{"\n"}
                lessons, anytime, anywhere.
              </Text>
            </View>

            <View className="relative mt-7 h-[398px]">
              <View className="absolute left-0 top-7 rounded-[16px] bg-[#EEF8FF] px-5 py-3">
                <Text className="font-poppins-medium text-[20px] leading-[26px] text-lingua-text-primary">
                  Hello!
                </Text>
                <View
                  style={{
                    position: "absolute",
                    bottom: -16,
                    right: 18,
                    width: 0,
                    height: 0,
                    borderLeftWidth: 14,
                    borderRightWidth: 5,
                    borderTopWidth: 18,
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    borderTopColor: "#EEF8FF",
                  }}
                />
              </View>

              <View className="absolute right-0 top-0 rounded-[16px] bg-[#F6F5FF] px-5 py-3">
                <Text className="font-poppins-medium text-[20px] italic leading-[26px] text-lingua-deep-purple">
                  ¡Hola!
                </Text>
                <View
                  style={{
                    position: "absolute",
                    bottom: -15,
                    left: 22,
                    width: 0,
                    height: 0,
                    borderLeftWidth: 5,
                    borderRightWidth: 14,
                    borderTopWidth: 17,
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    borderTopColor: "#F6F5FF",
                  }}
                />
              </View>

              <View className="absolute right-[-4px] top-[98px] rounded-[16px] bg-[#FFF4EF] px-5 py-3">
                <Text className="font-poppins-medium text-[20px] leading-[26px] text-[#FF4D3D]">
                  你好!
                </Text>
                <View
                  style={{
                    position: "absolute",
                    bottom: -15,
                    left: 20,
                    width: 0,
                    height: 0,
                    borderLeftWidth: 5,
                    borderRightWidth: 14,
                    borderTopWidth: 17,
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    borderTopColor: "#FFF4EF",
                  }}
                />
              </View>

              <View className="absolute bottom-0 left-0 right-0 items-center">
                <Image
                  source={images.mascotWelcome}
                  className="h-[326px] w-[326px]"
                  contentFit="contain"
                />
              </View>
            </View>
          </View>

          <Link href="/sign-up" asChild>
            <Pressable className="mt-8 min-h-[64px] flex-row items-center justify-center gap-10 rounded-[20px] bg-lingua-deep-purple px-6">
              <Text className="font-poppins-bold text-[19px] leading-[27px] text-white">
                Get Started
              </Text>
              <Text className="font-poppins-regular text-[36px] leading-[44px] text-white">
                ›
              </Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
