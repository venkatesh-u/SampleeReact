import React, {Component} from 'react';
import Tab from './TabsNavigator';
import {StyleSheet, View} from 'react-native';
import { strings, I18n } from './i18n';

export default class TabsHome extends Component{

    constructor(props){
         super(props);
         this.props.navigation.setParams({ title: strings('user_profile.title') } );
//                 alert(this.props.navigation.state.params.navbar_title);
    }


    static navigationOptions = ( {navigation} ) => {
         if(navigation.state.params?.title != undefined){
                return {
                    title: navigation.state.params.title,
                }
         }
    }

    render(){
        return(
                <Tab />
         );
    }

}


//
//const styles = StyleSheet.create({
//
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//     justifyContent: 'center'
//   },
//});
