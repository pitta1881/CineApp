import React from 'react';
import {
  FlatList,
} from 'react-native';
import ListFavorites from './ListFavorites';

const List = ({ favoriteList, handleModal }) => {
  return (
    <FlatList
      data={favoriteList}
      renderItem={(data) => <ListFavorites handleModal={handleModal} data={data} />}
      keyExtractor={item => item.id}
    />
  );
}

export default List;