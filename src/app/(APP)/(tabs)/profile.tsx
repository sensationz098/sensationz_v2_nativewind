import GoogleAuthButon from "@/components/GoogleAuthButton";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <GoogleAuthButon />
    </SafeAreaView>
  );
};

export default ProfileScreen;
