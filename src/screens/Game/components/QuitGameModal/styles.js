import { StyleSheet } from 'react-native';
import {
  responsiveScreenWidth,
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  playerActions: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
  },
  actionButton: {
    flexGrow: 100,
    margin: 20,
    borderRadius: 10,
  },
  actionButtonLabel: {
    fontSize: responsiveFontSize(2),
  },
  actionButtonContent: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
  },
  modalText: {
    fontSize: responsiveFontSize(3),
  },
});

export default styles;
