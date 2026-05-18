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
  const horizontalPadding = 40;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 36,
          paddingHorizontal: 40,
          paddingTop: 22,
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
                className="mr-4 h-[58px] w-[58px]"
                contentFit="contain"
              />
              <Text className="font-poppins-bold text-[34px] leading-[42px] text-lingua-text-primary">
                DrFox
              </Text>
              <View className="w-[74px]" />
            </View>

            <View className="pt-[78px]">
              <Text className="font-poppins-bold text-[45px] leading-[58px] text-lingua-text-primary">
                Your AI language{"\n"}
                <Text className="text-lingua-deep-purple">teacher.</Text>
              </Text>
              <Text className="pt-5 font-poppins-regular text-[22px] leading-[34px] text-[#73768D]">
                Real conversations, personalized{"\n"}
                lessons, anytime, anywhere.
              </Text>
            </View>

            <View className="relative mt-8 h-[532px]">
              <View className="absolute left-0 top-[38px] rounded-[18px] bg-[#EEF8FF] px-7 py-4">
                <Text className="font-poppins-medium text-[26px] leading-[32px] text-lingua-text-primary">
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

              <View className="absolute right-0 top-0 rounded-[18px] bg-[#F6F5FF] px-7 py-4">
                <Text className="font-poppins-medium text-[26px] italic leading-[32px] text-lingua-deep-purple">
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

              <View className="absolute right-[-4px] top-[130px] rounded-[18px] bg-[#FFF4EF] px-7 py-4">
                <Text className="font-poppins-medium text-[26px] leading-[32px] text-[#FF4D3D]">
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
                  className="h-[430px] w-[430px]"
                  contentFit="contain"
                />
              </View>
            </View>
          </View>

          <Link href="/" asChild>
            <Pressable className="mt-10 min-h-[80px] flex-row items-center justify-center gap-16 rounded-[24px] bg-lingua-deep-purple px-6">
              <Text className="font-poppins-bold text-[24px] leading-[32px] text-white">
                Get Started
              </Text>
              <Text className="font-poppins-regular text-[48px] leading-[56px] text-white">
                ›
              </Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
