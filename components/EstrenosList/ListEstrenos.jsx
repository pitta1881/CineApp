import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const ListEstrenos = ({data, onSelected}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => onSelected(data.item)}
      >
      <View style={styles.card}>
          <View style={styles.imageContainer}>
              <Image style={styles.imagen} source={data.item.url}/>
          </View>
          <View style={styles.movieData}>
              <Text>{data.item.title}</Text>
              <Text>{data.item.dateEstreno}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 5,
  },
  card:{
    flexDirection:'column'
  },
  imageContainer:{
  },
  imagen:{
    width:'100%',
    height:150,
    //resizeMode: 'contain',
  },
  movieData:{
    marginTop:10,
    alignItems:'center'
  }
});

export default ListEstrenos;