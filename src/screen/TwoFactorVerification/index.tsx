import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Dimensions,
} from 'react-native';
import InputCustom from '../../components/InputCustom';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

const {width, height} = Dimensions.get('window');

const TwoFactorVerification = () => {
  const authRef = React.useRef(false);
  const route =
    useRoute<RouteProp<RootStackParamList, 'TwoFactorVerification'>>();
  
  console.log(route.params);
  
  const [otp, setotp] = useState(['', '', '', '', '', '']);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async user => {
      if (!!user && !authRef.current) {
        authRef.current = true;
        const tokenFirebase = await user?.getIdToken();
        console.log('token', tokenFirebase);

        //call api push token firebase to server
      }
    });
    return subscriber;
  }, []);

  const confirmOtp = React.useCallback(async () => {
    try {
      const res = await route.params.confirmation.confirm(otp.join());
      if (!authRef.current) {
        authRef.current = true;
        const tokenFirebase = await res?.user.getIdToken();
        console.log('tokenFirebase', tokenFirebase);
        //call api push token firebase to server
      }
    } catch (error) {
      console.log('err', error);
    }
  }, [otp]);

  return (
    <View style={styles.appWrap}>
      <View style={styles.appContent}>
        <View style={styles.appInner}>
          <View style={styles.form}>
            <View style={styles.formHeader}>
              <Text style={styles.textTitle}>Проверка</Text>
              <Text style={[styles.text, styles.textDesc]}>
                Введите код, который мы вам отправили
              </Text>
            </View>
            <View style={styles.formContent}>
              <View style={styles.otpForm}>
                {otp.map((item, index) => {
                  return (
                    <TextInput
                      key={index}
                      value={item}
                      maxLength={1}
                      keyboardType="numeric"
                      onChangeText={value => {
                        setotp(prevValue => {
                          prevValue[index] = value;
                          return [...prevValue];
                        });
                      }}
                      style={styles.otpInput}></TextInput>
                  );
                })}
              </View>
            </View>
            <Text style={[styles.textCenter]}>Выслать заново через 00:30</Text>
          </View>
          <View style={styles.appBtn}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => {
                confirmOtp();
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

export default TwoFactorVerification;

const styles = StyleSheet.create({
  appWrap: {
    flex: 1,
    paddingTop: 46,
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
  otpForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: width - 40,
    backgroundColor: 'red',
  },
  otpInput: {
    width: 46,
    height: 61,
    borderRadius: 10,
    backgroundColor: '#F7F8FB',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
  },
});
