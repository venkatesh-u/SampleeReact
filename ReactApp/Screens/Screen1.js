 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, TouchableOpacity,
        TouchableHighlight, Image, DrawerActions,
 } from 'react-native';

// import I18n from 'react-native-i18n';
//import Navigator from './DrawerNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


 export default class Screen1 extends Component {


    constructor(props){
        super(props)
        this._onPressButton = this._onPressButton.bind(this);
    }


    _onPressButton(lang){
         setLanguage(lang);
         this.props.navigation.navigate('Login', null);
    }

    static navitionOptions = {

        tabBarLabel: 'Screen1',
        drawerIcon: ({tintColor}) => {

            return(
                <MaterialIcons
                    name='card-membership'
                    size={24}
                    style={{color:'black'}}>
                </MaterialIcons>

            );
        }
    }



   render() {
     return (
       <View style={styles.container}>
           <TouchableHighlight style={styles.inner_flex} onPress={() => this._onPressButton("en")} underlayColor="white">
                    <Text style={[styles.inner_container, {backgroundColor: 'rgb(0, 160, 255)'}]} >Screen1</Text>
           </TouchableHighlight>
       </View>
     );
   }
 }
//
//


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



   welcome: {
     flex : 1,
     fontSize: 20,
     textAlign: 'center',
     justifyContent: 'center',
     backgroundColor: 'skyblue',
     alignItems: 'center',
   },

    top: {
        flex : 1,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',

      },

   instructions: {
     textAlign: 'center',
      fontSize: 20,
     color : 'red',
        backgroundColor: 'red',

   },
 });
