import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonAlert from './components/ButtonAlert';
import PlaceWritte from './components/PlaceWritte';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>

      <View style={styles.nameApp}>
       <Image
        style={styles.logo}
        source={require('../Movil_Aplication2/images/diente.png')}
      />
      <Text style={styles.title}>Movil Aplication</Text>
      </View>

      <View style={styles.header}>
          <View style={styles.buttonH}>
          <Image
            style={styles.icons}
            source={require('../Movil_Aplication2/images/agenda.png')}
          />
          </View>
          <View style={styles.buttonH}>
          <Image
            style={styles.icons}
            source={require('../Movil_Aplication2/images/registros-medicos.png')}
          />
          </View>
          <View style={styles.buttonH}>
          <Image
            style={styles.icons}
            source={require('../Movil_Aplication2/images/calendario.png')}
          />
          </View>
          <View style={styles.buttonH}>
          <Image
            style={styles.icons}
            source={require('../Movil_Aplication2/images/paciente.png')}
          />
          </View>
          <View style={styles.buttonH}>
          <Image
            style={styles.icons}
            source={require('../Movil_Aplication2/images/precio.png')}
          />
          </View>
      </View>

      <View style={styles.body}>
        <PlaceWritte/>
      </View>
      <View style={styles.body}>
      <ButtonAlert titulo={'Aprendiz'} contenido={'Santiago Andrés Castellanos Hinestroza'}/>
        <ButtonAlert titulo={'Instructor'} contenido={'Carlos Andrés Mora Agudelo'}/>
        <ButtonAlert titulo={'Institucion Educativa'} contenido={'SENA'}/>
        <ButtonAlert titulo={'Ficha'} contenido={'2627090'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 5,
    paddingTop: 25,

  },
  nameApp:{
    backgroundColor: '#8F8F8F',
    padding: 10,
    paddingTop:15,
    paddingBottom:15,
    borderRadius: 10,
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 7,
  },
  header: {
    //backgroundColor: '#75d3ff',
    height: 'auto',
    width:'100%',
    maxWidth: 'auto',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap:5,
  },
  buttonH: {
    backgroundColor: '#EFEDED',
    height: 50,
    maxHeight: 50,
    width: 60,
    maxWidth:60,
    padding:5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  body: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#EFEDED',
    height: 'auto',
    width: '100%',
    borderRadius: 10,
  }, 
  logo: {
    width: 50,
    height: 50,
  },
  icons: {
    width: 30,
    height: 30,
  },
  title: {
    paddingLeft: 15,
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#02F9F9',
  }
});
