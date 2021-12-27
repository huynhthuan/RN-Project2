import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Animated
} from 'react-native';

import { Text, Colors } from 'react-native-ui-lib';

import ButtonNext from './ButtonNext';

interface PropsPage {
  title: string,
  desc: string,
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PageData = [
  {
    title: `Почувствуй себя${'\n'}бариста!1`,
    desc: 'Волшебный кофе под заказ.',
  },
  {
    title: `Почувствуй себя${'\n'}бариста!2`,
    desc: 'Волшебный кофе под заказ.',
  },
  {
    title: `Почувствуй себя${'\n'}бариста!3`,
    desc: 'Волшебный кофе под заказ.',
  },
];

const PageItem = ({ title, desc }: PropsPage) => {
  // const opacityValue = React.useRef(new Animated.Value(0)).current;

  // React.useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(opacityValue, {
  //       toValue: 1,
  //       duration: 5000,
  //       useNativeDriver: true
  //     }),
  //     {
  //       iterations: 1
  //     }
  //   ).start();
  // }, []);

  const startAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const animStart = Animated.timing(startAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    })

    animStart.start();
  }, [])

  return (
    <View style={styles.page}>
      <View style={styles.pageImageWrap}>
        <Animated.Image
          style={{
            opacity: startAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1]
            }),
            transform: [
              {
                scale: startAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1]
                })
              }
            ]
          }}
          source={require('../../assets/img/logo.png')} />
      </View>
      <View style={styles.pageMeta}>
        <Text style={styles.textImage}>{title}</Text>
        <Text style={styles.desImage}>{desc}</Text>
      </View>
    </View>
  );
};


const Welcome = () => {

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled={true}
        style={styles.pageSlide}>
        {PageData.map(page => {
          return (
            <PageItem
              title={page.title}
              desc={page.desc}
              key={page.title}></PageItem>
          );
        })}
      </ScrollView>
      <ButtonNext />
      <View style={styles.dotsWrap}>
        <View style={[styles.dot, styles.active]}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    alignItems: 'center',
  },
  pageSlide: {
    flex: 1,
  },
  pageImageWrap: {
    width: width,
    height: width,
    backgroundColor: '#324A59',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  pageImage: {

  },
  pageMeta: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 96,
  },
  textImage: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  },
  desImage: {
    fontSize: 18,
    color: '#AAAAAA',
    textAlign: 'center',
  },
  dotsWrap: {
    width: 100,
    height: 10,
    position: 'absolute',
    top: width + 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#324A59',
    opacity: 0.2,
    marginHorizontal: 4,
  },
  active: {
    opacity: 1,
  },
});
