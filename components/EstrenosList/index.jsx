import React from 'react';
import {
  FlatList,
} from 'react-native';
import ListEstrenos from './ListEstrenos';

const List = ({movieList}) => {
  return (
    <FlatList
      data={movieList}
      renderItem={(data) => <ListEstrenos data={data} />}
      keyExtractor={item => item.id}
    />
  );
}

export default List;