import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const InputCustom = ({
  icon,
  placeholder,
  keyboardType,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.formGroup}>
      <View style={styles.formIcon}>
        <Image source={icon}></Image>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}></TextInput>
      {keyboardType === 'visible-password' ? (
        <TouchableOpacity style={styles.viewPassWord}>
          <Image source={require('../assets/icon/eye.png')}></Image>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default InputCustom;

const styles = StyleSheet.create({
  formGroup: {
    paddingBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#C1C7D0',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginBottom: 36,
  },
  formIcon: {
    width: 36,
    height: 30,
    borderRightWidth: 1,
    borderRightColor: '#C1C7D0',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 20,
    color: '#C1C7D0',
    fontSize: 12,
    flex: 1,
    lineHeight: 30,
    paddingVertical: 0,
  },
});
