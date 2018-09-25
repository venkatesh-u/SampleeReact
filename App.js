/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import LanguageSelectionScreens from './ReactApp/Screens/LanguageSelectionScreens';
import Login from './ReactApp/Screens/Login';
import DashBoard from './ReactApp/Screens/DashBoard';
import TabsHome from './ReactApp/Screens/TabsHome';

import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';

import Screen1 from './ReactApp/Screens/Screen1';
import Screen2 from './ReactApp/Screens/Screen2';
import DrawerScreen from './ReactApp/Screens/DrawerScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerNavigator = createDrawerNavigator(
    {
        LanguageSelectionScreens:{
            screen: LanguageSelectionScreens,
        },

        Screen2 : {
            screen: Screen2,
        },
    },

    {
        initialRouteName: 'LanguageSelectionScreens',
        contentComponent: DrawerScreen,
        drawerWidth: 300,
        activeTintColor:'red',
    }
);

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('./ReactApp/images/menu-button.png')} style={styles.img_style}  />
    }else{
        return <Image source={require('./ReactApp/images/cancel.png')}  style={styles.img_style} />
    }
}


const StackNavigator = createStackNavigator(

    {
        DrawerNavigator : {
            screen: DrawerNavigator,

        },

        LanguageSelectionScreens : {
            screen : LanguageSelectionScreens,
    //        navigationOptions: {
    //                        header: null,
    //                      }
        },

        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }

        },

        DashBoard:{
            screen: DashBoard,
        },

        TabsHome:{
            screen: TabsHome,
        },

    },

    {

        navigationOptions: ({ navigation }) => ({
            title: 'Ambica',  // Title to appear in status bar
            headerRight:
                <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
                    <MenuImage style="styles.bar" navigation={navigation}/>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#ffffff',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

        })

    }
);



export default StackNavigator;


const styles = StyleSheet.create({

    container: {
     flex: 1,
     backgroundColor: '#F5FCFF',
     justifyContent: 'center'
    },

    inner_container: {
        flex: 1,
        fontSize: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
      },

      inner_flex: {
        flex: 1,
      },

      img_style:{
        margin: 10,
        tintColor:'black',
      }

});