import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import {Button, Text, TextField} from 'react-native-ui-lib';
import {useAppDispatch, useAppSelector} from '../../controller/store';
import {updateName} from '../../controller/userSlice';

const {width, height} = Dimensions.get('window');

const ProfileItem = ({
  icon,
  subtile,
  value,
}: {
  icon: ImageSourcePropType;
  subtile: string;
  value: number | string;
}) => {
  return (
    <View style={styles.profileItem}>
      <View style={styles.profileIcon}>
        <Image source={icon}></Image>
      </View>
      <View style={styles.profileContent}>
        <Text style={styles.subtitle}>{subtile}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <TouchableOpacity style={styles.btnEdit}>
        <Image source={require('../../assets/icon/edit.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

const Profile = () => {
  const userInfo = useAppSelector(state => state.userSlice.userInfo);
  const dispatch = useAppDispatch();
  const [name, setname] = useState<string>('');
  return (
    <View style={styles.container}>
      <View style={styles.profileForm}>
        <ProfileItem
          icon={require('../../assets/icon/user.png')}
          subtile={'Имя'}
          value={userInfo.name}
        />
        <ProfileItem
          icon={require('../../assets/icon/phone.png')}
          subtile={'Phone number'}
          value={'+375 33 664-57-36'}
        />
        <ProfileItem
          icon={require('../../assets/icon/email.png')}
          subtile={'Email'}
          value={'adosmenesk@pm.me '}
        />
        <ProfileItem
          icon={require('../../assets/icon/pin.png')}
          subtile={'Адрес кофейни Magic Coffee'}
          value={'г. Минск, ул. Тимирязева, 67'}
        />
      </View>
      <TextField value={name} onChangeText={setname}></TextField>
      <Button
        onPress={() => {
          dispatch(updateName(name));
        }}>
        <Text white>Update name</Text>
      </Button>
      <View style={styles.profileQr}>
        <Image source={require('../../assets/icon/qr.png')}></Image>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 33,
  },
  profileForm: {
    marginTop: 29,
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },
  profileIcon: {
    width: 42,
    height: 42,
    borderRadius: 80,
    backgroundColor: '#F7F8FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContent: {
    width: width - 66 - 42 - 24 - 32,
  },
  subtitle: {
    color: 'rgba(0,24,51,22)',
    fontSize: 10,
  },
  valueText: {
    fontSize: 14,
    color: '#324A59',
    fontWeight: '900',
  },
  profileQr: {
    alignItems: 'center',
    marginTop: 103 - 26,
  },
});
