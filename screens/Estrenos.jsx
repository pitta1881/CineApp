import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import {StyleSheet} from 'react-native';

import EstrenosList from '../components/EstrenosList';

export default function Estrenos(){
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        setMovieList([...movieList,
            {
            id: '1',
            title: 'Free Guy',
            url: require("../assets/images/free-guy.jpg"),
            dateEstreno: '12 de Agosto de 2021'
        },
        {
            id: '2',
            title: 'Mortal Kombat',
            url: require("../assets/images/mortal-kombat.jpg"),
            dateEstreno: '8 de Abril de 2021'
        }])
    },[])

    return(
        <View style={styles.screen}>
            <EstrenosList
                movieList={movieList}
            />
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