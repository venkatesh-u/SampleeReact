import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

//import Contact from '../screens/Contact/index';
import DrawerScreen from '../screens/Common/DrawerScreen';

const Tabs = createMaterialTopTabNavigator(
    {
        Screen1: Screen1,
        Screen2: Screen2,
//        Contact: Contact
    },

    {
        tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const DrawerNavigator = createDrawerNavigator(
    {
        Screen1:{
            screen: Tabs
        }
    },

    {
        initialRouteName: 'Home',
        contentComponent: DrawerScreen,
        drawerWidth: 300,
        activeTintColor:'red',
        inactiveTintColor:'green',
    }
);

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('../images/menu-button.png')}/>
    }else{
        return <Image source={require('../images/left-arrow.png')}/>
    }
}

const StackNavigator = createStackNavigator(
    {
        //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
        DrawerNavigator:{
            screen: DrawerNavigator
        }
    },

    {
        navigationOptions: ({ navigation }) => ({
            title: 'ReactNavigation',  // Title to appear in status bar
            headerLeft:
            <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
                <MenuImage style="styles.bar" navigation={navigation}/>
            </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#333',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

        })
    }
);

export default StackNavigator;
