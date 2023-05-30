import {Text, Animated, SafeAreaView, Pressable, LogBox} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import styles from './style';
import Icon from '../../components/Icon';
import {colors} from '../../constants/colors';

LogBox.ignoreLogs(['Each child in a list should'])

export default function DropdownAnimation() {
  const duration = 1000;
  const delay = 200;

  const [start, setStart] = useState(false);
  const animations = useRef(
    [...Array(6)].map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {}, []);

  const startAnimation = () => {
    animations.map((x, index) => {
      return Animated.timing(x, {
        toValue: 1,
        duration: duration + index * delay,
        useNativeDriver: true,
      }).start();
    });
    setStart(true);
  };

  const stopAnimation = () => {
    animations.map((x, index) => {
      return Animated.timing(x, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }).reset();
    });
    animations.map((x, index) => {
      return Animated.timing(x, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }).stop();
    });

    setStart(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {animations.map((x, index) => {
        return (
          <Animated.View
            style={[
              styles.box,
              {
                transform: [
                  {
                    translateY: x?.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        (animations.length - 1) * -53.5,
                        index * 53,
                      ],
                    }),
                  },
                ],
              },
            ]}>
            <Icon
              name={'angle-dobule-down : Fontisto'}
              size={20}
              color={colors.white}
            />
          </Animated.View>
        );
      })}
      <Text
        onPress={!start ? startAnimation : stopAnimation}
        style={styles.text}>
        Execute Animation
      </Text>
    </SafeAreaView>
  );
}
