 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View,
            Image, TextInput,TouchableHighlight, ProgressBarAndroid, AsyncStorage,
 } from 'react-native';

import axios from 'axios';
import I18n from 'react-native-i18n';
import { strings, getLanguage } from './i18n';


//var initialState = {};
//var reducer = (state = initialState, action) =>{
//    const newState = {...state};
//
////    if(action.type == 'INCREMENT'){
////        newState.count += action.value;
////    }
////
////    if(action.type == 'DECREMENT'){
////        newState.count -= action.value;
////    }
//    return newState;
//}
//let store = createStore(reducer);


 export default class Login extends Component {

    constructor(props){
         super(props)
         this.state = {
               email   : 'balu.chebolu@mailinator.com',
               password: '12345678',
               error: null,
               emailErrorMsg: '',
               passwordErrorMsg: '',
               progressbarStatus: false
             }
    }

    componentDidMount(){
//        alert(I18n);
    }


    //Validate email and password
      isValid() {

          const { email, password } = this.state;
          let valid = false;

          if (email.length > 0 && password.length > 0) {
            valid = true;
          }

          if (email.length === 0) {
            this.setState({ error:strings('user_profile.title') });
          } else if (password.length === 0) {
            this.setState({ error: strings('login.must_enter_pwd_msg') });
          }
          return valid;
      }

        //Validate email with regex patterns
        validateEmail(email) {
             var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             if(re.test(String(email).toLowerCase())){
                    return true;
             }else{
                this.setState({error:'invalid email'})
             }

             return false
        }

        //Validate password length
        validatePassword(password){
            if(password.length != 8){
                this.setState({error:"Password length must be 8 chars"})
                return false;
            }
           return true;
        }

        onClickListener = (viewId) => {
                    switch(viewId){

                        case 'login':
                            const { email, password, error } = this.state;
                            if (this.isValid()) {

                                if(this.validateEmail(email) && this.validatePassword(password)){
                                    this.loadProgressbar();

                                    this.setState({error:''});

                                          axios.post('https://qa-api.eteki.com/users/sign_in', {email:email, password:password, device_id:'device_id', device_type:'ANDROID'})
                                          .then(
                                                (res)=>{
                                                    this.loadProgressbar();
                                                    alert(JSON.stringify(res.data) );
                                                    if(res.data.success){
                                                        var json = res.data;
                                                        this.props.navigation.navigate('DashBoard', {object:  json } ) ;
                                                        AsyncStorage.setItem("login_obj", JSON.stringify(json));
                                                    }
                                                    else{
                                                        alert( res.data.message[0] );
                                                    }

                                                }
                                          )
                                          .catch(
                                                (error)=>{
                                                     this.loadProgressbar();
                                                    alert(error);
                                                }
                                          );

                                }
                            }
                        break;
        //                case 'restore_password':
        //                          Alert.alert("Alert", "restore_password Button pressed "+viewId);
        //                break;
        //
        //                case 'register':
        //                          Alert.alert("Alert", "register Button pressed "+viewId);
        //                break;

                    }

            }



//          clearError = (viewId, values) =>{
//                 switch(viewId){
//
//                 case 'email_error':
//                     if(values.length > 0){
//                                 this.setState({error:''})
//                         }else{
//                             this.setState({ error: strings('login.must_enter_email_adrs_msg') });
//                     }
//                 break;
//
//                 case 'pwd_error':
//                     if(values.length > 0){
//                                 this.setState({error:''})
//                             }else{
//                                 this.setState({ error: strings('login.must_enter_pwd_msg') });
//                     }
//                 break;
//                 }
//             }


     //update progressbar status
         loadProgressbar(){
              if(this.state.progressbarStatus)
                 this.setState({progressbarStatus: false})
               else
                 this.setState({progressbarStatus: true})
         }


       render() {

         const logo = {uri: 'https://s22.postimg.cc/cjucquu4h/ambica.jpg'};

         return (
           <View style={styles.container}>

                <View style={[styles.logo_container, {flex:1} ]}>
                     <Image source = {logo} style={styles.image_styles} />
                     <Text style={styles.inner_container}>OASYS</Text>
                     <Text style={styles.normal_text}>{strings('login.order_assistance_system')}</Text>
                </View>

                 <View style={[styles.logo_container, {flex:2} ]}>


                    <Text style={styles.error_text}>{this.state.error}</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                             style={styles.inputs}
                             placeholder="Enter Login ID"
                             keyboardType="email-address"
                             underlineColorAndroid='transparent'
                             onChangeText={ (email) => {
                                     this.setState({email});
                                     /*this.clearError('email_error', email)*/
                                 }
                             }/></View>


                     <View style={styles.inputContainer}>
                             <TextInput
                                  style={styles.inputs}
                                  placeholder="Enter Password"
                                  secureTextEntry={true}
                                  underlineColorAndroid='transparent'
                                  onChangeText={ (password) => {
                                          this.setState({password});
                                          /*this.clearError('email_error', email)*/
                                      }
                                  }/></View>


                     <TouchableHighlight
                            style={[styles.inputContainer, styles.loginButton]}
                            onPress={() => this.onClickListener('login')}>
                            <Text style={styles.loginText}>{strings('login.login_button')}</Text>
                     </TouchableHighlight>

                </View>

                <View style={[styles.logo_container, {flex:1} ]}>
                    <View style={styles.container_bottom}>
                        {
                               this.state.progressbarStatus? <ProgressBarAndroid  color='#2196F3'
                               style= {styles.progress_style} /> : null
                             }
                    </View>
                </View>
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
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    inputs:{
          borderBottomColor: '#FFFFFF',
          flex:1,
          alignSelf:'stretch',
          fontWeight: 'bold',
          alignItems:'center'
      },
      inputContainer: {
              backgroundColor: '#FFFFFF',
              width:350,
              height:50,
              marginBottom:5,
              alignItems:'center',
              marginTop: 20,
              borderColor: 'grey',
              borderWidth: 2,
              borderRadius: 10
          },
    normal_text:{
        flex: 1,
        fontSize: 15,
    },

    logo_container:{

         flexDirection: 'column',
         alignItems:'center',
         textAlign: 'center',
         textAlignVertical: 'center',
    },
    logo_style:{
         flex:1,
         alignSelf:'center',
         alignItems: 'center',
    },
    image_styles: {
        width: 100,
        height: 100
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

    buttonContainer: {
         height:45,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         marginBottom:20,
         borderRadius:30,
         alignSelf:'stretch',

    },

     loginButton: {
       backgroundColor: "black",
       justifyContent: 'center',
     },

     loginText: {
       color: 'white',
       fontSize: 20,
     },

     progress_style:{
       width: 450,
     },

     container_bottom: {
         justifyContent: 'center',
         marginTop: 50,
         padding: 20,
         backgroundColor: '#ffffff',
       },

       error_text:{
               color:'red',
               textAlign:'justify',
               marginBottom:20,
           },

 });
