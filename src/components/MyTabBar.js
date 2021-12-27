import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.barBox}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const icon = options.tabBarIcon;
        const isFocused = state.index === index;
        const color = isFocused
          ? options.tabBarActiveTintColor
          : options.tabBarInactiveTintColor;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}>
            {icon({focused: isFocused, color})}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  barBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 64,
    width: width - 52,
    borderRadius: 20,
    position: 'absolute',
    left: width / 2,
    bottom: 22,
    transform: [{translateX: -(width - 52) / 2}],
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
