import { StyleSheet } from 'react-native';
import {
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  cardsArea: {
    flexGrow: 100,
    width: responsiveScreenWidth(100),
    display: 'flex',
    flexDirection: 'column',
  },
  divider: {
    backgroundColor: 'white',
  },
  dealerArea: {
    flexGrow: 100,
    width: '100%',
  },
  userArea: {
    flexGrow: 100,
    width: '100%',
  },
});

export default styles;
