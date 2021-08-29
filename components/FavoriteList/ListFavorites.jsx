import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const ListMovies = ({ data, handleModal }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.movieName}>{data.item.name}</Text>
      {
        !data.item.finish ?
        <View>
          <Button
            title="Borrar"
            color="red"
            onPress={() => handleModal(data.item.id, false)}
          />
          <Button
            title="Check"
            color="green"
            onPress={() => handleModal(data.item.id, true)}
          />
        </View>
        : <Text>Finalizado</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  movieName:{
    fontSize:20
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
  }
});

export default ListMovies;