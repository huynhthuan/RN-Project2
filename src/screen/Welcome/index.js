import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

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

const PageItem = ({title, desc}) => {
  return (
    <View style={styles.page}>
      <View style={styles.pageImageWrap}>
        <Image
          style={styles.pageImage}
          source={require('../../assets/img/logo.png')}></Image>
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
      <TouchableOpacity style={styles.btnNext}>
        <Image source={require('../../assets/icon/arrow-right.png')}></Image>
      </TouchableOpacity>
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
  pageImage: {},
  pageMeta: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 96,
  },
  textImage: {
    fontSize: 28,
    textAlign: 'center',
  },
  desImage: {
    fontSize: 18,
    color: '#AAAAAA',
    textAlign: 'center',
  },
  btnNext: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#324A59',
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
