import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 40,
    marginTop: 10,
    marginBottom: 20,
  },
  logoImage: {
    margin: 20,
    marginTop: 50,
  },
  startGameButton: {
    height: 'auto',
    width: responsiveScreenWidth(100) - 40,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  startGameButtonLabel: {
    fontSize: responsiveFontSize(2),
  },
  textInput: {
    margin: 20,
    width: '60%',
  },
});

export default styles;
