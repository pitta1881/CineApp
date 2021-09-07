import React from 'react';
import { Button, Text, View } from "react-native";
import FooterActions from '../components/Footer/FooterActions';

export default function Home({ navigation }){

    return (
        <View>
            <Text>Vista Home</Text>
            <FooterActions activeScreen='Home' navigation={navigation}/>
        </View>
    )
}