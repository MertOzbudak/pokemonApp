import React, { useState, useEffect } from 'react';
import {View, Text,Dimensions,TouchableOpacity, Image, ImageBackground, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PokemonCard({ item }) {
      const [imageId, setImageId] = useState("");
      const [imageloading, setImageLoading] = useState(true);
      const navigation = useNavigation();

      useEffect(() => {
        const findImageUrl = async () => {
            //boş kısım için yapmasın
            if(item.key == null){
                let myArr = item.url.split("https://pokeapi.co/api/v2/pokemon/");
                myArr = myArr[1].split("/");
                await setImageId(myArr[0])
            }
        };

        findImageUrl();
      },[]);

     //boş part
      if(item.key != null){
        return (<View></View>)
      }

      return (
        <View style={{
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            borderWidth:0.5,
            borderColor:'black',
            borderRadius:20,
            margin:10,
            height: Dimensions.get('window').width / 3
        }}>
           <TouchableOpacity onPress={()=> navigation.navigate("DetailScreen", {id: imageId})}>
            <ImageBackground
              source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ imageId +'.png'}} 
              style={{width: 70, height: 70,}}
              imageStyle={{width: 70, height: 70,}}
              onLoadEnd={() =>  setImageLoading(false)}
            >
              {imageloading && <ActivityIndicator size="small" color={"orange"} style={{width: 50,height: 50}}/>}
            </ImageBackground>
            
            <Text style={{textAlign: 'center', fontSize: 10, color: '#232a37',}}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      );
}

