import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Modal from './components/Modals/ConfirmModal';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

export default function App() {
  const [inputName, setInputName] = useState('');
  const [inputError, setInputError] = useState('');
  const [movieList, setMovieList] = useState([]);

  const [movieSelected, setMovieSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [whichModal, setWhichModal] = useState();

  const handleChangeName = (text) => {
    setInputName(text);
    setInputError('');
  };

  const handleAddMovie = () => {
    if (inputName) {
      setMovieList([
        ...movieList,
        {
          id: Math.random().toString(),
          name: inputName,
          finish: false
        },
      ]);
      setInputName('');
      setInputError('');
    } else {
      setInputError('Required');
    }
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  const handleConfirmDelete = () => {
    const id = movieSelected.id;
    setMovieList(movieList.filter(movie => movie.id !== id));
    setModalVisible(false);
    setMovieSelected({});
  }

  const handleConfirmFinish = () => {
    const id = movieSelected.id;
    setMovieList(movieList.map(movie => {
      if (movie.id === id){
        movie.finish = true
      }
      return movie; 
    }));
    setModalVisible(false);
    setMovieSelected({});
  }

  const handleModal = (id,deleteOrFinish) => {
    setMovieSelected(movieList.find(movie => movie.id === id));
    setWhichModal(deleteOrFinish);
    setModalVisible(true);
  }

  return (
    <View style={[styles.screen, modalVisible ? styles.modalOpen : '']}>
      <AddMovie
        handleChangeName={handleChangeName}
        handleAddMovie={handleAddMovie}
        inputError={inputError}
        inputText={inputName}
      />
      <MovieList
        movieList={movieList}
        handleModal={handleModal}
      />
      <Modal
        modalVisible={modalVisible}
        handleCloseModal = {handleCloseModal}
        handleConfirmDelete={handleConfirmDelete}
        handleConfirmFinish={handleConfirmFinish}
        movieSelected={movieSelected}
        whichModal={whichModal}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
  modalOpen:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    opacity:0.4
  }
});