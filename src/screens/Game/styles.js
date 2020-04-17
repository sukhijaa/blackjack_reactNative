import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  dealerArea: {
    height: '50%',
    width: '100%',
  },
  userArea: {
    height: '50%',
    maxHeight: '65%',
    width: '100%',
    borderTopColor: 'white',
    borderTopWidth: 2,
    margin: 10,
  },
});

export default styles;
