import { StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    resizeMode: 'stretch',
    height: 130,
    width: 100,
  },
  imageGroup: {
    flexGrow: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  imageWrapper: {
    height: 130,
    width: 110,
    marginLeft: 20,
  },
});

export default styles;
