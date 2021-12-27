import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const OptionSwitch = ({enableTime, setOrder}) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={enableTime ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={newEnableTime => {
          setOrder(prevValue => {
            let newValue = {
              ...prevValue,
              enableTime: newEnableTime,
            };
            return newValue;
          });
        }}
        value={enableTime}
      />
    </View>
  );
};

export default OptionSwitch;

const styles = StyleSheet.create({});
