import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Header from '../../components/Header';
import InputCustom from '../../components/InputCustom';

const Authorization = () => {
  return (
    <View style={styles.appWrap}>
      <Header contentRight={<></>}></Header>
      <View style={styles.appContent}>
        <View style={styles.appInner}>
          <View style={styles.form}>
            <View style={styles.formHeader}>
              <Text style={styles.textTitle}>Войти</Text>
              <Text style={[styles.text, styles.textDesc]}>
                Добро пожаловать
              </Text>
            </View>
            <View style={styles.formContent}>
              <InputCustom
                icon={require('../../assets/icon/email.png')}
                placeholder={'Адрес электронной почты'}
                keyboardType={'email-address'}></InputCustom>
              <InputCustom
                icon={require('../../assets/icon/lock.png')}
                placeholder={'Пароль'}
                keyboardType={'visible-password'}></InputCustom>
            </View>
            <Text
              style={[
                styles.text,
                styles.textActive,
                styles.textCenter,
                styles.textForm,
              ]}>
              Забыли пароль?
            </Text>
          </View>
          <View style={styles.appBtn}>
            <TouchableOpacity style={styles.btnNext}>
              <Image
                source={require('../../assets/icon/arrow-right.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.appFooter}>
          <Text style={[styles.text, styles.textDisable]}>
            Впервые?{' '}
            <Text style={[styles.text, styles.textActive]}>
              Зарегистрироваться.
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Authorization;

const styles = StyleSheet.create({
  appWrap: {
    flex: 1,
  },
  appContent: {
    paddingHorizontal: 40,
    paddingBottom: 71,
    justifyContent: 'space-between',
    flex: 1,
  },
  appInner: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  textCenter: {
    textAlign: 'center',
  },
  textActive: {
    color: '#324A59',
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#181D2D',
    marginBottom: 24,
  },
  textDesc: {
    marginBottom: 46,
  },
  appBtn: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  btnNext: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#324A59',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
