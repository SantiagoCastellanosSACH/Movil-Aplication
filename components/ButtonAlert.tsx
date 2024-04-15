import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

interface ButtonAlert {
    titulo:string;
    contenido: string;
}

const ButtonAlert: React.FC<ButtonAlert> = ({contenido, titulo}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{contenido}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Ocultar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{titulo}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    //flex: 1,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  modalView: {
    width: '75%',
    height: 'auto',
    margin: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#8F8F8F",
  },
  buttonClose: {
    backgroundColor: "#22D583",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 13,
    color: 'white',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ButtonAlert;
