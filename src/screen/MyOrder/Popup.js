import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from 'react-native';
import ItemPayment from './ItemPayment';
const Popup = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const dataPayment = React.useMemo(() => {
    return [
      {
        id: '0',
        name: 'Оплата онлайн',
        des: 'Assist Belarus',
        uri: require('../../assets/img/assistlogo1.png'),
      },
      {
        id: '1',
        name: 'Банковская карта',
        des: '2540 xxxx xxxx 2648',
        uri: require('../../assets/img/assistlogo2.png'),
      },
    ];
  }, []);

  const {width, height} = Dimensions.get('window');
  const transY = React.useRef(new Animated.Value(height)).current;

  const open = React.useCallback(() => {
    setVisible(true);
    let aniTransY = Animated.timing(transY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    });
    aniTransY.start();
  }, []);

  const close = React.useCallback(() => {
    setVisible(false);
    let aniTransY = Animated.timing(transY, {
      toValue: height,
      duration: 250,
      useNativeDriver: true,
    });
    aniTransY.start(({finished}) => {
      if (finished) {
        setVisible(false);
      }
    });
  }, []);

  React.useImperativeHandle(ref, () => {
    return {
      setVisible,
      open,
      close,
    };
  });

  return (
    <Modal
      visible={visible}
      onRequestClose={() => {
        close();
      }}
      animationType={'slide'}
      transparent={true}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{height: '20%'}}
          onPress={() => {
            close();
          }}
        />
        <Animated.View
          style={[
            styles.contentContainer,
            {
              transform: [
                {
                  translateX: transY,
                },
              ],
            },
          ]}>
          <Text style={styles.txtTitle}>Оплата заказа</Text>
          <View style={styles.flex1}>
            <View style={styles.row}>
              <View style={styles.containerIconBuy}>
                <Image source={require('../../assets/icon/cart.png')} />
              </View>
              <View style={styles.infoPayment}>
                <Text style={styles.txtInfo}>Алексей</Text>
                <Text style={styles.txtDesInfo}>
                  кофейня Magic Coffee г.{'\n'}Минск, ул. Тимирязева, 67{' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.flex2}>
            {dataPayment.map(item => {
              return (
                <ItemPayment
                  key={item.id}
                  name={item.name}
                  uri={item.uri}
                  des={item.des}
                />
              );
            })}
          </View>
          <View style={styles.rowFooter}>
            <Text style={styles.txtCymma}>Сумма</Text>
            <Text style={styles.txtBYN}>BYN 9.00</Text>
          </View>

          <View
            style={[
              styles.footer,
              {paddingHorizontal: 0, justifyContent: 'space-between'},
            ]}>
            <View>
              <Text style={styles.txtFooter}>Итоговая стоимость</Text>
              <Text style={styles.txtPriceFooter}>BYN 9.00</Text>
            </View>
            <TouchableOpacity
              style={[styles.btnContinuFe, {width: '50%'}]}
              onPress={() => {}}>
              <Image
                source={require('../../assets/icon/wallet.png')}
                style={styles.iconBuy}
              />
              <Text style={[styles.txtBtnContinue, {textAlign: 'center'}]}>
                Оплатить{'\n'}сейчас
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
});

export default Popup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(29, 35, 53, 0.51)',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-around',
    paddingTop: 12,
  },
  txtFooter: {
    fontSize: 12,
    color: 'rgba(0, 24, 51, 0.22)',
    marginBottom: 2,
  },
  txtPriceFooter: {
    fontSize: 22,
    fontWeight: '600',
    color: '#001833',
  },
  btnContinue: {
    backgroundColor: '#324A59',
    borderRadius: 30,
    width: '40%',
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBuy: {
    tintColor: '#FFF',
  },
  txtBtnContinue: {
    color: '#FFF',
    marginLeft: 24,
    fontSize: 14,
  },
  contentContainer: {
    backgroundColor: '#FFF',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    height: '80%',
    width: '100%',
    padding: 32,
  },
  txtTitle: {
    fontSize: 20,
    color: '#001833',
  },
  flex1: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  containerIconBuy: {
    width: 47,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FB',
    borderRadius: 12,
  },
  infoPayment: {
    marginLeft: 24,
  },
  txtInfo: {
    fontSize: 12,
    color: '#001833',
  },
  txtDesInfo: {
    fontSize: 10,
    color: '#001833',
  },
  flex2: {
    flex: 2,
  },
  rowFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.5,
  },
  txtCymma: {
    fontSize: 12,
    color: '#001833',
  },
  txtBYN: {
    fontSize: 12,
    color: '#001833',
    fontWeight: '600',
  },
});
