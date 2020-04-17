import { StyleSheet } from 'react-native';
import {
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
  },
  playerActions: {
    display: 'flex',
    flexDirection: 'row',
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
  quitButton: {
    width: responsiveScreenWidth(100) - 40,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  quitButtonLabel: {
    fontSize: responsiveFontSize(2),
  },
});

export default styles;
