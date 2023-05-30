import React, {useEffect, useRef} from 'react';
import {Animated, View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const LoginAnimation = () => {
  const animRefs = useRef<any>([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);

  useEffect(() => {
    animRefs.current.forEach((anim: any, index: number) => {
      startAnimation(anim, index * 1000);
    });
  }, []);

  const startAnimation = (animation: Animated.Value, delay: number) => {
    Animated.timing(animation, {
      toValue: 1,
      delay,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View>
        <Animated.Text
          style={[
            styles.text,
            {
              opacity: animRefs.current[0],
              transform: [
                {
                  translateY: animRefs.current[0].interpolate({
                    inputRange: [0, 1],
                    outputRange: [-50, 0],
                  }),
                },
              ],
            },
          ]}>
          Welcome!
        </Animated.Text>
        <Animated.View
          style={[
            styles.inputContainer,
            {
              opacity: animRefs.current[1],
              transform: [
                {
                  translateY: animRefs.current[1].interpolate({
                    inputRange: [0, 1],
                    outputRange: [-150, 0],
                  }),
                },
              ],
            },
          ]}>
          <TextInput placeholder="Username" style={styles.input} />
        </Animated.View>
        <Animated.View
          style={[
            styles.inputContainer,
            {
              opacity: animRefs.current[2],
              transform: [
                {
                  translateY: animRefs.current[2].interpolate({
                    inputRange: [0, 1],
                    outputRange: [-250, 0],
                  }),
                },
              ],
            },
          ]}>
          <TextInput placeholder="Password" style={styles.input} />
        </Animated.View>
        <Animated.View
          style={[
            styles.buttonContainer,
            {
              opacity: animRefs.current[3],
              transform: [
                {
                  translateY: animRefs.current[3].interpolate({
                    inputRange: [0, 1],
                    outputRange: [400, 0],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default LoginAnimation;
