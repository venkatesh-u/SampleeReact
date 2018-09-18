 import React, {Component} from 'react';
 import Grid from 'react-native-grid-component';

 import {Platform, StyleSheet, Text, View, TouchableOpacity,
   TouchableHighlight,
 } from 'react-native';

 import { strings, getLanguage, I18n } from './i18n';

 export default class DashBoard extends Component {

    constructor(props){
        super(props);
        const{state} = props.navigation;
        this.props.navigation.setParams({navbar_title: strings('user_profile.dashboard')});

        this.state = {
                    email : state.params.object.user.email,
                    img_url : state.params.object.user.avatar.profile_thumb_url,
                    auth_token : state.params.object.authentication_token,
                    isLoading : true
               }


    }


    static navigationOptions = ( {navigation}  ) => {
//            const {state} = navigation;
            if(navigation.state.params.navbar_title != undefined){
                return {
                    title: navigation.state.params.navbar_title,
                }
            }


//             drawerLabel: 'Home',
//                drawerIcon: ({ tintColor }) => (
//                  <Image
//                    source={require('./chats-icon.png')}
//                    style={[styles.icon, {tintColor: tintColor}]}
//                  />
//                ),

    };

    _renderItem = (data, i) => (

        <TouchableOpacity  style={[{ backgroundColor: data }, styles.item]} key={i}
        onPress={()=> this.props.navigation.navigate('TabsHome', null )}>
            <Text style={[{ textAlign:'center', textAlignVertical:'center', fontSize:20 }, styles.item]} key={i} > {data} </Text>
        </TouchableOpacity>

     );

//     _renderPlaceholder = i => <View style={styles.item} key={i} />;

     render() {

       return (
         <Grid
           style={styles.list}
           renderItem={this._renderItem}
           renderPlaceholder={this._renderPlaceholder}
           data={['blue', 'orange', 'red', 'green', 'blue', 'yellow', 'skyblue', 'grey']}
           data1={['blue1', 'orange1', 'red1', 'green1', 'blue1', 'yellow1', 'skyblue1', 'grey1']}
           itemsPerRow={2}
         />
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

    item: {
        flex: 1,
        height: 160,
        margin: 10,
        borderRadius: 5,
    },

    list: {
       flex: 1,
    }

 } )



