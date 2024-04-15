import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";

export default function PlaceWritte () {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <TextInput placeholder="Ingresar un texto" style={styles.textInput} />
        <TextInput placeholder="Ingresar un texto #2" style={styles.textInput} />
        <View style={styles.button}>
          <Button title="Guardar" onPress={() => null} color={'#8F8F8F'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  inner: {
    padding: 10,
    justifyContent: 'center',
  },
  
  textInput: {
    backgroundColor: 'white',
    height: 35,
    borderColor: '#000000',
    borderRadius:15,
    paddingStart:10,
    marginBottom:10,
  },
  button: {
    width: '40%',
    padding: 10,
    color: '#02F9F9',
    borderRadius: 15,
  },
});