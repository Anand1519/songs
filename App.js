import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Songs from "./src/screens/songs";
import SongDetails from "./src/screens/songs-details";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Songs" component={Songs} />
        <Stack.Screen
          name="SongDetail"
          options={{
            title: "Song Details",
          }}
          component={SongDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
