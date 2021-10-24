/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Item = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images4.alphacoders.com/715/thumb-1920-715075.png',
        }}
        style={{
          width: 100,
          height: 150,
          marginRight: 14,
        }}></Image>
      <Text style={{textAlign: 'center'}}>Thuan</Text>
    </View>
  );
};

const ButtonPostStatus = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 16,
      }}>
      <Image
        source={{
          uri: 'https://images4.alphacoders.com/715/thumb-1920-715075.png',
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          marginRight: 14,
        }}></Image>

      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          padding: 4,
          justifyContent: 'center',
          borderRadius: 4,
        }}>
        <Text>Ban dang nghi gi ?</Text>
      </View>
    </View>
  );
};
const Post = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', padding: 16}}>
        <View>
          <Image
            source={{
              uri: 'https://images4.alphacoders.com/715/thumb-1920-715075.png',
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 14,
            }}></Image>
        </View>

        <View
          style={{
            backgroundColor: 'green',
            borderRadius: 4,
            flex: 1,
            padding: 4,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '900',
            }}>
            Huynh Thuan
          </Text>
          <Text style={{fontSize: 14}}>14 mins ago</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://images4.alphacoders.com/715/thumb-1920-715075.png',
          }}
          style={{width: '50%', height: 200}}></Image>
        <Image
          source={{
            uri: 'https://images4.alphacoders.com/715/thumb-1920-715075.png',
          }}
          style={{width: '50%', height: 200}}></Image>
      </View>

      <View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Image
            source={{
              uri: 'https://images4.alphacoders.com/715/thumb-1920-715075.png',
            }}
            style={{width: 20, height: 20, marginRight: 4}}></Image>
          <Text>10</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          backgroundColor: '#eaeaea',
        }}>
        <Text style={{flex: 1, textAlign: 'center'}}>Like</Text>
        <Text style={{flex: 1, textAlign: 'center'}}>Comment</Text>
        <Text style={{flex: 1, textAlign: 'center'}}>Share</Text>
      </View>

      <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image
            source={{
              uri: 'https://images4.alphacoders.com/715/thumb-1920-715075.png',
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 14,
            }}></Image>
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 20,
            backgroundColor: 'pink',
            borderColor: 'black',
            padding: 14,
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <Text>Viet binh luan...</Text>
        </View>
      </View>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ScrollView>
      </View>

      <ButtonPostStatus />

      <Post></Post>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;