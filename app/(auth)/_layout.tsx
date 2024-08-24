import { Stack } from "expo-router";

export function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="signin"
        options={{
          title: "Sign In",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "Sign Up",
        }}
      />
    </Stack>
  );
}
