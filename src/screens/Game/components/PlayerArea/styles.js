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
    display: 'flex',
    flexDirection: 'column',
  },
  cardsArea: {
    flexGrow: 100,
    width: '100%',
    margin: 10,
  },
  actionsArea: {
    height: 'auto',
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
  quitButton: {
    height: 'auto',
    width: responsiveScreenWidth(100) - 40,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  quitButtonLabel: {
    fontSize: responsiveFontSize(2),
  },
});

export default styles;
