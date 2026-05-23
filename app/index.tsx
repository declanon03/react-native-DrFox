import { images } from "@/constants/images";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-white px-8">
      <View className="items-center gap-2">
        <Image
          source={images.mascotLogo}
          className="h-20 w-20"
          contentFit="contain"
        />
        <Text className="font-poppins-bold text-[28px] leading-[34px] text-lingua-text-primary">
          DrFox
        </Text>
      </View>

      <Link href="/onboarding" asChild>
        <Pressable className="min-h-12 w-full items-center justify-center rounded-lingua-button bg-lingua-purple px-5 py-3 shadow-[0_4px_0_#5B3BF6]">
          <Text className="font-poppins-bold text-[15px] leading-[22px] text-lingua-background">
            Open onboarding
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
