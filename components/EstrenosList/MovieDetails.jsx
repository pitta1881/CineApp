import React from 'react';
import { Image, Text, View } from "react-native";
import {StyleSheet} from 'react-native';

const MovieDetails = ({route}) => {
  const movie = route.params.data;
    return (
        <View style={styles.item}>
            <View>
                <Image style={styles.imagen} source={movie.url}/>
            </View>
            <View style={styles.movieData}>
                <Text style={[styles.textBold, styles.textTitle]}>{movie.title}</Text>
                <Text><Text style={styles.textBold}>Fecha de Estreno:</Text> {movie.dateEstreno}</Text>
                <Text><Text style={styles.textBold}>Director:</Text> {movie.director}</Text>
                <Text><Text style={styles.textBold}>Actores:</Text> {movie.actores.map((item)=>item.toLowerCase()).join(', ')}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'column',
    },
    imagen:{
      width:'100%',
      height:150,
      //resizeMode: 'contain',
    },
    movieData:{
      marginTop:10,
      alignItems:'flex-start'
    },
    textTitle:{
      fontSize:25
    },
    textBold:{
      fontWeight:'bold'
    }
  });

export default MovieDetails;