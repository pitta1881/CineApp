import React, { useState } from 'react';
import { View } from "react-native";
import {StyleSheet} from 'react-native';
import Modal from '../components/Modals/ConfirmModal';
import FavoriteList from '../components/FavoriteList';
import AddMovie from '../components/AddMovie';
import FooterActions from '../components/Footer/FooterActions';

export default function Favorites({ navigation }){
    const [inputName, setInputName] = useState('');
    const [inputError, setInputError] = useState('');
    const [favoriteList, setFavoriteList] = useState([]);

    const [movieSelected, setMovieSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [whichModal, setWhichModal] = useState();

    const handleChangeName = (text) => {
        setInputName(text);
        setInputError('');
    };

    const handleAddMovie = () => {
        if (inputName) {
        setFavoriteList([
            ...favoriteList,
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
        setFavoriteList(favoriteList.filter(movie => movie.id !== id));
        setModalVisible(false);
        setMovieSelected({});
    }

    const handleConfirmFinish = () => {
        const id = movieSelected.id;
        setFavoriteList(favoriteList.map(movie => {
        if (movie.id === id){
            movie.finish = true
        }
        return movie; 
        }));
        setModalVisible(false);
        setMovieSelected({});
    }

    const handleModal = (id,deleteOrFinish) => {
        setMovieSelected(favoriteList.find(movie => movie.id === id));
        setWhichModal(deleteOrFinish);
        setModalVisible(true);
    }

    return(
        <View style={[styles.screen, modalVisible ? styles.modalOpen : '']}>
            <AddMovie
            handleChangeName={handleChangeName}
            handleAddMovie={handleAddMovie}
            inputError={inputError}
            inputText={inputName}
            />
            <FavoriteList
            favoriteList={favoriteList}
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
            <FooterActions activeScreen='Favoritos' navigation={navigation}/>
        </View>
    )
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