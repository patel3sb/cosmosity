import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Untitled from "./src/screens/Untitled";
import Untitled1 from "./src/screens/Untitled1";
import Untitled2 from "./src/screens/Untitled2";
import Untitled3 from "./src/screens/Untitled3";
import Untitled4 from "./src/screens/Untitled4";
import Untitled5 from "./src/screens/Untitled5";
import Untitled6 from "./src/screens/Untitled6";
import Untitled7 from "./src/screens/Untitled7";
import Untitled8 from "./src/screens/Untitled8";
import Untitled9 from "./src/screens/Untitled9";
import Untitled10 from "./src/screens/Untitled10";
import Untitled11 from "./src/screens/Untitled11";
import Untitled12 from "./src/screens/Untitled12";

const DrawerNavigation = createDrawerNavigator({
  Untitled: Untitled,
  Untitled1: Untitled1,
  Untitled2: Untitled2,
  Untitled3: Untitled3,
  Untitled4: Untitled4,
  Untitled5: Untitled5,
  Untitled6: Untitled6,
  Untitled7: Untitled7,
  Untitled8: Untitled8,
  Untitled9: Untitled9,
  Untitled10: Untitled10,
  Untitled11: Untitled11,
  Untitled12: Untitled12
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Untitled: Untitled,
    Untitled1: Untitled1,
    Untitled2: Untitled2,
    Untitled3: Untitled3,
    Untitled4: Untitled4,
    Untitled5: Untitled5,
    Untitled6: Untitled6,
    Untitled7: Untitled7,
    Untitled8: Untitled8,
    Untitled9: Untitled9,
    Untitled10: Untitled10,
    Untitled11: Untitled11,
    Untitled12: Untitled12
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf"),
      "roboto-300": require("./src/assets/fonts/roboto-300.ttf"),
      "roboto-900": require("./src/assets/fonts/roboto-900.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
