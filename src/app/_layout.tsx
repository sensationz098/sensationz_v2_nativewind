import ReactQuery from "@/context/ReactQuery";
import "@/style/global.css";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import auth, {
  getAuth,
  onAuthStateChanged,
  type FirebaseAuthTypes,
} from "@react-native-firebase/auth";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

GoogleSignin.configure({
  webClientId:
    "250289726308-foocc4om279ec8jbbrcdm1vghq8g57gd.apps.googleusercontent.com",
  iosClientId:
    "250289726308-gd8c647n7fujf4macr1hd1do31tknpm0.apps.googleusercontent.com",
});

const InitialLayout = () => {
  // const [user, setuser] = useState<FirebaseAuthTypes.User | null>(null);

  // const onAuthStateChange = async (user: FirebaseAuthTypes.User | null) => {
  //   setuser(user);

  //   console.log("auth user", user);
  // };

  const [fontsLoaded, error] = useFonts({
    "Quicksand-Bold": require("@/assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("@/assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("@/assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold": require("@/assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Light": require("@/assets/fonts/Quicksand-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();

    // ✅ use modular API
    // const auth = getAuth();
    // const unsubscribe = auth().onAuthStateChanged(onAuthStateChange);

    // return unsubscribe;
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={{
        flex: 1,
      }}
    >
      <Slot />
    </SafeAreaView>
  );
};

export default function RootLayout() {
  return (
    <ReactQuery>
      <ThemeProvider value={DefaultTheme}>
        <InitialLayout />
        <StatusBar style="dark" />
      </ThemeProvider>
    </ReactQuery>
  );
}
