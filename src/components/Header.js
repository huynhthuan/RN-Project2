import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = ({contentLeft, contentTitle, contentRight}) => {
  return (
    <View style={styles.headerContainer}>
      {contentLeft ? (
        contentLeft
      ) : (
        <TouchableOpacity style={styles.contentLeft}>
          <Image source={require('../assets/icon/arrow-left.png')}></Image>
        </TouchableOpacity>
      )}

      <View style={styles.headerTitle}>
        {contentTitle ? contentTitle : <Text>{contentTitle}</Text>}
      </View>

      {contentRight ? (
        contentRight
      ) : (
        <TouchableOpacity style={styles.contentRight}>
          <Image source={require('../assets/icon/cart.png')}></Image>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 26,
  },
});
