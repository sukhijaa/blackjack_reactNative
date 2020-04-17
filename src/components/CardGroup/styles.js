import { StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  cardImage: {
    marginLeft: 20,
    width: 125,
    height: 150,
  },
});

export default styles;
