import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home, Portfolio, Market, Profile } from "../screens"
import { COLORS, constants, icons } from "../constants"
import { TabIcon } from '../components';

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({children, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 64,
                    backgroundColor: COLORS.gray,
                    borderTopColor: "transparent",
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={icons.home}
                                label="Home"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={icons.briefcase}
                                label="Portfolio"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={icons.trade}
                                label="Trade"
                                isTrade={true}
                            />
                        )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            onPress={() => console.log("pressed trade button")}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={icons.market}
                                label="Market"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={icons.profile}
                                label="Profile"
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;