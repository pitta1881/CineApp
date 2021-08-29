import React from 'react';
import {
  FlatList,
} from 'react-native';
import ListMovies from './ListMovies';

const List = ({ movieList, handleModal }) => {
  return (
    <FlatList
      data={movieList}
      renderItem={(data) => <ListMovies handleModal={handleModal} data={data} />}
      keyExtractor={item => item.id}
    />
  );
}

export default List;