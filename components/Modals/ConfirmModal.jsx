import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Modal,
} from 'react-native';

function ConfirmModal({
  modalVisible,
  movieSelected,
  handleCloseModal,
  handleConfirmDelete,
  handleConfirmFinish,
  whichModal
}) {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
        {
              whichModal 
              ? <Text style={styles.modalMessage}>¿Ya vió la película?</Text>
              : <Text style={styles.modalMessage}>¿Está seguro que desea borrar la película?</Text>
        }
          <Text style={styles.modalMovieName}>{movieSelected.name}</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonInContainer}>
              <Button
                  onPress={handleCloseModal}
                  title="SALIR"
                />
            </View>
            {
              whichModal 
              ? 
              <View style={styles.buttonInContainer}>
                <Button
                  onPress={handleConfirmFinish}
                  title="CONFIRMAR"
                /> 
            </View>
              :
              <View style={styles.buttonInContainer}>
                <Button
                  onPress={handleConfirmDelete}
                  title="CONFIRMAR"
                />
            </View>
            }
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10,
    paddingHorizontal:10
  },
  modalContent: {
    padding: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMessage: {
    fontSize: 18,
    textAlign:'center'
  },
  modalMovieName: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    fontWeight:'bold'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonsContainer:{
    flexDirection:'row',
    width:300,
    justifyContent:'space-between',
  },
  buttonInContainer:{
    width:100,
    marginHorizontal:10
  }
})

export default ConfirmModal;