import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import { Starting } from "./Screens/Starting";
import { Login } from "./Screens/Login";
import { Signup } from "./Screens/Signup";
import {Home} from "./Screens/Home";


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">

        <Stack.Screen name="Start" component={Starting} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true ,  headerStyle: {backgroundColor: '#F7F7F7'
    }}} />


      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MyStack;