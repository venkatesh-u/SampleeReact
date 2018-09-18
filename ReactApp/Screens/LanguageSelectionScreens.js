 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, TouchableOpacity,
        TouchableHighlight, Image, DrawerActions,
 } from 'react-native';
 import { strings, setLanguage } from './i18n';
// import I18n from 'react-native-i18n';
//import {DrawerExample} from './Screens/DrawerNavigator';


 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
     'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });


const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('../images/menu-button.png')}/>
    }else{
        return <Image source={require('../images/left-arrow.png')}/>
    }
}


 export default class LanguageSelectionScreens extends Component {


    constructor(props){
        super(props)
        this._onPressButton = this._onPressButton.bind(this);
    }


    _onPressButton(lang){
         setLanguage(lang);
         this.props.navigation.navigate('Login', null);
    }

//    static navigationOptions = {
//       tabBarIcon:  <Image source={{uri: 'asset:/car.jpg'}} style={{width:40, height: 40}}/>
//    }

//   static navigationOptions = ({ navigation }) => {
//
//        title: 'ReactNavigation',  // Title to appear in status bar
//        headerLeft:
//            <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
//                <MenuImage style="styles.bar" navigation={navigation}/>
//            </TouchableOpacity>,
//        headerStyle: {
//            backgroundColor: '#333',
//        },
//        headerTintColor: '#fff',
//        headerTitleStyle: {
//          fontWeight: 'bold',
//        },
//
//   }

   render() {
     return (
       <View style={styles.container}>
 <TouchableHighlight style={styles.inner_flex} onPress={() => this._onPressButton("en")} underlayColor="white">
                    <Text style={[styles.inner_container, {backgroundColor: 'rgb(0, 160, 255)'}]} >{strings('languages.english')}</Text>
           </TouchableHighlight>

            <TouchableHighlight style={styles.inner_flex} onPress={() => this._onPressButton("ch")} underlayColor="white">
                               <Text style={[styles.inner_container, {backgroundColor: 'orange'}]}>{strings('languages.chinese')}</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.inner_flex} onPress={() => this._onPressButton("hi")} underlayColor="white">
                    <Text style={[styles.inner_container, {backgroundColor: '#99FF99'}]}>{strings('languages.hindi')}</Text>
           </TouchableHighlight>

            <TouchableHighlight style={styles.inner_flex} onPress={() => this._onPressButton("ne")} underlayColor="white">
                    <Text style={[styles.inner_container, {backgroundColor: '#FFD5B8'}]}>{strings('languages.nepali')}</Text>
           </TouchableHighlight>
       </View>
     );
   }
 }

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
