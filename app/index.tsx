import { images } from "@/constants/images";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-8 bg-white px-8">
      <View className="items-center gap-3">
        <Image
          source={images.mascotLogo}
          className="h-24 w-24"
          contentFit="contain"
        />
        <Text className="font-poppins-bold text-[32px] leading-[38.4px] text-lingua-text-primary">
          DrFox
        </Text>
      </View>

      <Link href="/onboarding" asChild>
        <Pressable className="min-h-14 w-full items-center justify-center rounded-lingua-button bg-lingua-purple px-5 py-4 shadow-[0_6px_0_#5B3BF6]">
          <Text className="font-poppins-bold text-base leading-[22.4px] text-lingua-background">
            Open onboarding
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
