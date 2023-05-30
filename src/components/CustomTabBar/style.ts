import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.1,
    backgroundColor: colors.white,
    shadowOpacity: .7,
    shadowColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  midTabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    top: (height * -0.004) / 2.5,
    backgroundColor: colors.myGreen,
    borderRadius: (width * width) / 2,
    width: width * 0.18,
    height: width * 0.18,
    marginBottom: height * 0.1,
  },
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.005,
    marginHorizontal:25,
  },
});

export default styles;