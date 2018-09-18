import React from "React";
import {createBottomTabNavigator } from "react-navigation";

import Login from './Login';
import Profile from './Profile';

const Tab = createBottomTabNavigator (
    {
        Login: { screen: Login},
        Profile: {screen: Profile}
    },

    {
//           swipeEnabled: true,
             tabBarOptions: {
             activeTintColor:"#f2f2f2",
             activeBackgroundColor: "#2EC4B6",
             inactiveTintColor: "#666",
             animationEnabled:true,
             labelStyle: {
               fontSize: 22,
               padding: 12,
               fontWeight:'bold'
             }
           }
    }
);

export default  Tab;
