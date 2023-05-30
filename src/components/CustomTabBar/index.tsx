import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import globalStyle from '../../constants/style';
import styles from './style';
import {midRouteName} from '../../constants/variables';
import Icon from '../Icon';
import {colors} from '../../constants/colors';

export default function CustomTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={[globalStyle.midShadow, styles.container]} key={state.index}>
      {state?.routes?.map((route: any, index: number) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index == index;
        const {iconName}: {iconName: any} = route.params;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(
              {name: route.name, merge: true},
              {params: route.params},
            );
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={
              route.name == midRouteName
                ? [styles.midTabStyle, globalStyle.darkShadow]
                : styles.tabStyle
            }
            key={index}>
            <Icon
              name={iconName}
              size={35}
              color={
                route.name == midRouteName
                  ? colors.white
                  : isFocused
                  ? colors.black
                  : colors.lightgrey
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}