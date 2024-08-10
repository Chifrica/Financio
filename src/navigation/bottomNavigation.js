
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../frontend/home/index";
import Investment from "../frontend/investment/index";
import Savings from "../frontend/savings/index";
import Profile from "../frontend/profile/index";
import Finance from "../frontend/finance/index";

import homeActive from "../../assets/bottom icons/home-icon.png";
import homeInActive from "../../assets/bottom icons/home_blur.png";
import financeActive from "../../assets/bottom icons/finance_full.png";
import financeInActive from "../../assets/bottom icons/finance-blur.png";
import investmentActive from "../../assets/bottom icons/investment-full.png";
import investmentInActive from "../../assets/bottom icons/investment-blur.png";
import savingsActive from "../../assets/bottom icons/saving_home.png";
import savingsInActive from "../../assets/bottom icons/saving-blur.png";
import profileActive from "../../assets/bottom icons/profile_full.png";
import profileInActive from "../../assets/bottom icons/profile-blur.png";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let imageSource;
                    if (route.name == 'Home') {
                        imageSource = focused 
                            ? homeActive
                            : homeInActive
                    } else if (route.name == 'Investment') {
                        imageSource = focused 
                            ? investmentActive
                            : investmentInActive
                    } else if (route.name == 'Finance') {
                        imageSource = focused 
                            ? financeActive
                            : financeInActive
                    } else if (route.name == 'Savings') {
                        imageSource = focused 
                            ? savingsActive
                            : savingsInActive
                    } else if (route.name == 'Profile') {
                        imageSource = focused 
                            ? profileActive
                            : profileInActive
                    }
                    return <Image source={imageSource} style={{ width: 30, height: 30, opacity: focused ? 5 : 0.5 }} />;
                },
                tabBarActiveTintColor: '#7C04B4',
                tabBarInactiveTintColor: '#D9D9D9', 
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Investment" 
                component={Investment} 
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Finance" 
                component={Finance} 
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Savings" 
                component={Savings} 
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    headerShown: false
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomNavigation;