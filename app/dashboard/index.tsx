import ScreenWrapper from "@/components/ScreenWrapper";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  H4,
  H5,
  ListItem,
  Paragraph,
  View,
  XStack,
  YGroup,
  YStack,
} from "tamagui";

type Props = {};

const DashboardScreen = (props: Props) => {
  return (
    <ScreenWrapper
      header={
        <>
          <View flexDirection="row" gap={"$2"}>
            <H4>
              <AntDesign name="home" size={24} />
            </H4>
            <H4>Home</H4>
          </View>
        </>
      }
    >
      <View p={"$4"}>
        {/* Upcoming List */}
        <YStack gap={"$2"}>
          <H5>Upcoming Medicines</H5>
          <YGroup>
            <YGroup.Item>
              <ListItem
                hoverTheme
                pressTheme
                title={
                  <XStack alignItems="center" gap={"$2"}>
                    <H4>Paracetamol</H4>
                    <Paragraph>10:00 AM</Paragraph>
                  </XStack>
                }
                subTitle={"Take 1 tablet after meal"}
              />
            </YGroup.Item>
          </YGroup>
        </YStack>
      </View>
    </ScreenWrapper>
  );
};

export default DashboardScreen;
