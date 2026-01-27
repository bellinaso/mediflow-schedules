import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Easing, Image, Text } from "react-native";
import icon from "../../constants/icons"
import Home from "../home/home";
import Calendar from "../calendar/calendar";
import Profile from "../profile/profile";


const Tab = createBottomTabNavigator();

function Main() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image
                            source={icon.logo}
                            style={{
                                width: 125,
                                height: 29,
                        }}/>
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return <Image
                            source={icon.home}
                            style={{
                                width: focused ? 32 : 25,
                                height: focused ? 32 : 25,
                                opacity: focused ? 1 : 0.5,
                        }}/>
                    },
                    animation: "shift",
                    config: {
                        duration: 400,
                        Easing: Easing.in
                    },
                }}/>

                <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image
                            source={icon.logo}
                            style={{
                                width: 125,
                                height: 29,
                        }}/>
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return <Image
                            source={icon.calendar}
                            style={{
                                width: focused ? 32 : 25,
                                height: focused ? 32 : 25,
                                opacity: focused ? 1 : 0.5,
                        }}/>
                    },
                    animation: "shift",
                    config: {
                        duration: 400,
                        Easing: Easing.in
                    },
                }}/>
                
                <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image
                            source={icon.logo}
                            style={{
                                width: 125,
                                height: 29,
                        }}/>
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return <Image
                            source={icon.profile}
                            style={{
                                width: focused ? 32 : 25,
                                height: focused ? 32 : 25,
                                opacity: focused ? 1 : 0.5,
                        }}/>
                    },
                    animation: "shift",
                    config: {
                        duration: 400,
                        Easing: Easing.in
                    },
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Main;

// 01:57