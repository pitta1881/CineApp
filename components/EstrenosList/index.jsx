import React from 'react';
import {
  FlatList,
} from 'react-native';
import ListEstrenos from './ListEstrenos';

const List = ({movieList, onSelected}) => {
  return (
    <FlatList
      data={movieList}
      renderItem={(data) => <ListEstrenos data={data} onSelected={onSelected} />}
      keyExtractor={item => item.id}
    />
  );
}

export default List;