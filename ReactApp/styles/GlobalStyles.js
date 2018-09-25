import {StyleSheet} from 'react-native';

export default StyleSheet.create({

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

   customFont: {
     fontFamily: 'Cedarville-Cursive',
     // or fontFamily: 'Tittilium WebBold Italic'
    },

 });
