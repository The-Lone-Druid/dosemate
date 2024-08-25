import StyledButton from "@/components/StyledButton";
import StyledInput from "@/components/StyledInput";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, H2, H3, Paragraph, View } from "tamagui";

type Props = {};

const SigninScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View padding={"$4"}>
        <H2 textAlign="center" mb={"$4"}>
          DoseMate
        </H2>
        <Card>
          <Card.Header>
            <H3>Sign In</H3>
          </Card.Header>
          <View paddingHorizontal={"$4"} gap={"$2"}>
            <View gap={"$2"}>
              <Paragraph theme={"alt2"}>Email</Paragraph>
              <StyledInput
                inputMode="email"
                placeholder="Ex: john.doe@gmail.com"
              />
            </View>
            <View gap={"$2"}>
              <Paragraph theme={"alt2"}>Password</Paragraph>
              <StyledInput
                inputMode="text"
                secureTextEntry
                placeholder="Your password"
              />
            </View>
          </View>
          <Card.Footer
            padding={"$4"}
            flexDirection="column"
            gap={"$2"}
            marginTop={"$2"}
          >
            <StyledButton>Sign In</StyledButton>
            <Paragraph textAlign="center" paddingTop={"$2"}>
              Don't have an account?{" "}
              <Link style={{ color: "skyblue" }} href={"/auth/signup"}>
                Create one.
              </Link>
            </Paragraph>
            <View flexDirection="row" alignItems="center" gap={"$2"}>
              <View borderTopWidth={0.5} flex={1} borderColor={"$color"} />
              <Paragraph fontWeight={"bold"}>OR</Paragraph>
              <View borderTopWidth={0.5} flex={1} borderColor={"$color"} />
            </View>
            <StyledButton
              backgroundColor={"$red10"}
              icon={<AntDesign name="google" size={24} color={"white"} />}
            >
              Sign in with Google
            </StyledButton>
          </Card.Footer>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;
