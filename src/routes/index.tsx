import 'react-native-gesture-handler';

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from '../Components/DrawerContent';
import BookDetails from '../screens/BookDetails';

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home : string,
            BookDetails : {
                bookId : string
            }
        }
    }
}
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function StackRoutes(){
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeDrawer" screenOptions={{headerShown : false}} drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="HomeDrawer" component={StackRoutes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
