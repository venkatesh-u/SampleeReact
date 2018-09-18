import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, AsyncStorage, ScrollView} from 'react-native';

export default class Profile extends Component{


    constructor(){
        super();

        this.state={
            img:'http://www.pngonly.com/wp-content/uploads/2017/06/Nature-PNG-Clipart-Image-02.png',
            email:'HI@gmail.com',
            obj:null,
        }

    }

    componentDidMount(){
        AsyncStorage.getItem("login_obj").then((value) => {
        var ob = JSON.parse(value);
            this.setState({obj: ob.user});
//            console.log(this.state.obj.email);
//            alert(JSON.stringify(this.state.obj.avatar.profile_thumb_url));
        }).done();
    }

    render(){
            var img_uri = {uri: this.state.img};
            var thumb_url = null;
            if(this.state.obj !== null){
               thumb_url = {uri: this.state.obj.avatar.profile_thumb_url};
            }

        return(
            <ScrollView>
                <View style={styles.container}>
                     <Image source ={ require('../images/ambica.jpeg')} style={styles.image_container} />
                     <Image source={{uri: 'asset:/car.jpg'}} style={styles.image_background} />
                     <Image source={img_uri} style={styles.image_background}/>
                     <Image source={thumb_url} style={styles.image_background}/>
                     <Text style={styles.text_color}>{this.state.email}</Text>
                     <Image source={img_uri} style={styles.image_background}/>
                      <Image source={thumb_url} style={styles.image_background}/>
                      <Text style={styles.text_color}>{this.state.email}</Text>
                </View>
            </ScrollView>
        );


    }


}




const styles = StyleSheet.create({

   container: {
     flex: 1,
     backgroundColor: '#F5FCFF',
     alignItems:'center',
     padding:20,
   },

   image_container:{
        width: 100,
        height: 100,
   },

   image_background:{
           width: 100,
           height: 100,
           borderRadius: 100/2,
           backgroundColor: 'black',
           marginTop:10,
   },


    container_bottom: {
         padding: 20,
       },

       text_color:{
            color:'black',
            fontWeight:'bold',
       },
});
