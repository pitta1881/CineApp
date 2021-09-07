import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import {StyleSheet} from 'react-native';

import EstrenosList from '../components/EstrenosList';
import FooterActions from '../components/Footer/FooterActions';

export default function Estrenos({ navigation }){
    const [movieList, setMovieList] = useState([]);

    const handleSelectedMovie = (item) => {
        console.log(item)
        navigation.navigate('MovieDetails', {
          data: item,
        });
      }

    useEffect(() => {
        setMovieList([...movieList,
            {
            id: '1',
            title: 'Free Guy',
            url: require("../assets/images/free-guy.jpg"),
            dateEstreno: '12 de Agosto de 2021',
            director: 'Shawn Levy',
            actores: ['RYAN REYNOLDS', 'JODIE COMER', 'LIL REL HOWERY', 'LIL REL HOWERY']
        },
        {
            id: '2',
            title: 'Mortal Kombat',
            url: require("../assets/images/mortal-kombat.jpg"),
            dateEstreno: '8 de Abril de 2021',
            director: 'Simon McQuoid',
            actores: ['LEWIS TAN', 'JESSICA MCNAMEE', 'JOSH LAWSON']
        }])
    },[])

    return(
        <View style={styles.screen}>
            <EstrenosList
                movieList={movieList}
                onSelected={handleSelectedMovie}
            />
            <FooterActions activeScreen='Estrenos' navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        backgroundColor: '#F0F0F0',
        flex: 1,
      },
  });