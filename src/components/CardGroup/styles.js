import { StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  cardImage: {
    margin: 20,
    marginTop: 50,
    height: responsiveHeight(10),
  },
});

export default styles;
