import React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';

const AddMovie = ({
  handleChangeName,
  handleAddMovie,
  inputName,
  inputError,
}) => {
  return (
    <React.Fragment>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar Película"
          style={styles.input}
          onChangeText={handleChangeName}
          value={inputName}
        />
        <Button
          title="ADD"
          color="#3D9970"
          onPress={handleAddMovie}
        />
      </View>
      <Text style={styles.inputError}>{inputError}</Text>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  inputError: {
    color: 'red',
  },
});

export default AddMovie;