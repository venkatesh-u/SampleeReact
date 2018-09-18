 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, TouchableOpacity,
        TouchableHighlight, Image, DrawerActions, Modal
 } from 'react-native';

// import I18n from 'react-native-i18n';
//import Navigator from './DrawerNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


 export default class Screen2 extends Component {


//    constructor(props){
//        super(props)
//        this._onPressButton = this._onPressButton.bind(this);
//    }
//
//
//    _onPressButton(lang){
//         setLanguage(lang);
//         this.props.navigation.navigate('Login', null);
//    }
//
    state = {
        modalVisible: false,
      };

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    static navitionOptions = {

            tabBarLabel: 'Screen2',
            drawerIcon: ({tintColor}) => {
                return(
                    <MaterialIcons
                        name='aircraft-landing'
                        size={24}
                        style={{color:tintColor}}>
                    </MaterialIcons>
                );
            }
        }




   render() {
       return (
         <View style={{marginTop: 22}}>
           <Modal
             animationType="slide"
             transparent={false}
             visible={this.state.modalVisible}
             onRequestClose={() => {
               alert('Modal has been closed.');
             }}>
             <View style={{marginTop: 22}}>
               <View>
                 <Text>Hello World!</Text>

                 <TouchableHighlight
                   onPress={() => {
                     this.setModalVisible(!this.state.modalVisible);
                   }}>
                   <Text>Hide Modal</Text>
                 </TouchableHighlight>
               </View>
             </View>
           </Modal>

           <TouchableHighlight
             onPress={() => {
               this.setModalVisible(true);
             }}>
             <Text>Show Modal</Text>
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
