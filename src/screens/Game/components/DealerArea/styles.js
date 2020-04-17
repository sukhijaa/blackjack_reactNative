import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  deckAndTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    flexGrow: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsArea: {
    flexGrow: 100,
    width: '100%',
    margin: 10,
  },
  deckImage: {
    height: 130,
    width: 115,
    resizeMode: 'contain',
  },
});

export default styles;
