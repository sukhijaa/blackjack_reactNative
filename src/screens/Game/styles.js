import { StyleSheet } from 'react-native';
import {
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  divider: {
    backgroundColor: 'white',
  },
  dealerArea: {
    flexGrow: 100,
    width: '100%',
  },
  userArea: {
    height: '65%',
    width: '100%',
  },
});

export default styles;
