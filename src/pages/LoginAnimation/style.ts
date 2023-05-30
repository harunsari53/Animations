import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.lemon,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  inputContainer: {
    width: 300,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.lightgrey,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: .4
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 18,
  },
});
export default styles;
