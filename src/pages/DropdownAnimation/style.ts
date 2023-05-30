import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon,
    alignItems: 'center',
  },
  text:{
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 7,
    borderRadius: 10,
    backgroundColor: colors.lightgrey,
    shadowOpacity: .4,
    shadowColor: colors.black,
    position: 'absolute',
      bottom: 22,
  },
  box: {
    width: 60,
    height: 60,
    borderRadius: 25,
    backgroundColor: colors.lightgrey,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowColor: colors.black,
  },
});

export default styles;