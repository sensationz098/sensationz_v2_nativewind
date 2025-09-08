import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  isSuccessResponse,
} from "@react-native-google-signin/google-signin";
import { Alert, Button } from "react-native";

const GoogleAuthButon = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        console.log("google response", response);
        // const token = response.data?.idToken;

        // if (!token) throw new Error("token not found");

        // const googleCredential = auth.GoogleAuthProvider.credential(token);

        // return auth().signInWithCredential(googleCredential);
      }
    } catch (err: Error | unknown) {
      console.error("google sign in error", err);
      if (err instanceof Error) {
        Alert.alert("something went wrong", err.message);
      }
    }
  };

  return <Button onPress={signIn} title="continue with Google" />;
};

export default GoogleAuthButon;
