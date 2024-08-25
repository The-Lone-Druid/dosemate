import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, H2, View } from "tamagui";

type Props = {};

const SigninScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View padding={"$4"}>
        <Card>
          <Card.Header>
            <H2>DoseMate</H2>
          </Card.Header>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;
