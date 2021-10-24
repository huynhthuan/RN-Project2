import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgScreen}
        source={require('../../assets/img/bgSplashScreen.png')}>
        <View style={styles.overlay}></View>
        <Image
          source={require('../../assets/img/logo.png')}
          style={styles.logo}></Image>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgScreen: {
    width: width,
    height: height,
  },
  overlay: {
    width: width,
    height: height,
    backgroundColor: 'rgba(29,35,53,.37)',
    position: 'absolute',
  },
  logo: {
    alignSelf: 'center',
  },
});
