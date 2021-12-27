import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import InputCustom from '../../components/InputCustom';
import auth from '@react-native-firebase/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

const Registration = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [userInfor, setuserInfor] = React.useState({
    userName: '',
    phoneNumber: '+84332570938',
    email: '',
    password: '',
  });

  const onPressGetOtp = React.useCallback(async () => {
    if (!userInfor.phoneNumber) return;

    const confirmation = await auth().signInWithPhoneNumber(
      userInfor.phoneNumber,
    );
    // setConfirm(confirmation);
    navigation.navigate('TwoFactorVerification', {
      confirmation,
    });
  }, [userInfor.phoneNumber]);

  return (
    <View style={styles.appWrap}>
      <View style={styles.appContent}>
        <View style={styles.appInner}>
          <View style={styles.form}>
            <View style={styles.formHeader}>
              <Text style={styles.textTitle}>Зарегистрироваться</Text>
              <Text style={[styles.text, styles.textDesc]}>
                Создать аккаунт здесь
              </Text>
            </View>
            <View style={styles.formContent}>
              <InputCustom
                icon={require('../../assets/icon/user.png')}
                placeholder={'Имя пользователя'}
                keyboardType={'default'}></InputCustom>
              <InputCustom
                icon={require('../../assets/icon/phone.png')}
                placeholder={'Номер мобильного телефона'}
                keyboardType={'phone-pad'}
                value={userInfor.phoneNumber}
                onChangeText={phoneNumber => {
                  setuserInfor({
                    ...userInfor,
                    phoneNumber,
                  });
                }}></InputCustom>
              <InputCustom
                icon={require('../../assets/icon/email.png')}
                placeholder={'Адрес электронной почты'}
                keyboardType={'email-address'}></InputCustom>
              <InputCustom
                icon={require('../../assets/icon/lock.png')}
                placeholder={'Пароль'}
                keyboardType={'visible-password'}></InputCustom>
            </View>
            <Text style={[styles.text, styles.textActive, styles.textForm]}>
              Регистрируясь, вы соглашаетесь с нашими условиями использования
            </Text>
          </View>
          <View style={styles.appBtn}>
            <TouchableOpacity style={styles.btnNext} onPress={onPressGetOtp}>
              <Image
                source={require('../../assets/icon/arrow-right.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.appFooter}>
          <Text style={[styles.text, styles.textDisable]}>
            Уже зарегистрировались?{' '}
            <Text style={[styles.text, styles.textActive]}>Войти.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Registration;

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
