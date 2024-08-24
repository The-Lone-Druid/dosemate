import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  "auth/signin": undefined;
  "auth/signup": undefined;
  tabs: undefined;
  explore: undefined;
  index: undefined;
  // Add other routes here
};

export type RootStackNavigationProp = NavigatorScreenParams<RootStackParamList>;
