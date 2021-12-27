import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import InputCustom from '../../components/InputCustom';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.appWrap}>
      <View style={styles.appContent}>
        <View style={styles.appInner}>
          <View style={styles.form}>
            <View style={styles.formHeader}>
              <Text style={styles.textTitle}>Забыли пароль?</Text>
              <Text style={[styles.text, styles.textDesc]}>
                Введите адрес электронной почты
              </Text>
            </View>
            <View style={styles.formContent}>
              <InputCustom
                icon={require('../../assets/icon/email.png')}
                placeholder={'Адрес электронной почты'}
                keyboardType={'email-address'}></InputCustom>
            </View>
          </View>
          <View style={styles.appBtn}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => {
                navigation.navigate('TwoFactorVerification');
              }}>
              <Image
                source={require('../../assets/icon/arrow-right.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  appWrap: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginBottom: 24,
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
