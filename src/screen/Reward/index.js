import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const PointItem = ({point}) => {
  return (
    <View style={styles.pointItem}>
      <View style={styles.pointMeta}>
        <Text style={styles.pointLabel}>Американо</Text>
        <Text style={styles.pointSubLabel}>24 июня | 12:30</Text>
      </View>
      <Text style={styles.pointReward}>+ 12 баллов</Text>
    </View>
  );
};

const Reward = () => {
  const renderCup = () => {
    let view = [];
    for (let i = 0; i < 8; i++) {
      if (i < 4) {
        view.push(
          <Image
            style={styles.coffeeItem}
            source={require('../../assets/icon/coffee-cup-1.png')}
            key={i}></Image>,
        );
      } else {
        view.push(
          <Image
            style={styles.coffeeItem}
            source={require('../../assets/icon/coffee-cup-2.png')}
            key={i}></Image>,
        );
      }
    }
    return <View style={styles.coffeeListContent}>{view}</View>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.rewardBox}>
        <View style={styles.rewardHeader}>
          <Text style={styles.rewardLabel}>Карта лояльности</Text>
          <Text style={styles.rewardLabel}>4 / 8</Text>
        </View>
        <View style={styles.rewardContent}>
          <View style={styles.coffeeList}>{renderCup()}</View>
        </View>
      </View>
      <View style={[styles.rewardBox, styles.rewardBoxPoint]}>
        <View style={styles.rewardHeader}>
          <Text style={styles.rewardLabel}>Мои баллы:</Text>
        </View>
        <View style={[styles.rewardContent, styles.rewardContentPoint]}>
          <Text style={styles.rewardPointLabel}>2750</Text>
          <TouchableOpacity style={styles.btnReward}>
            <Text style={styles.btnRewardText}>Оплатить баллами</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/icon/rewardBoxBg.png')}
          style={styles.rewardBoxBg}></Image>
      </View>
      <View style={styles.rewardWrap}>
        <Text style={styles.rewardHeading}>История начисления баллов</Text>
        <View style={styles.listReward}>
          <PointItem></PointItem>
        </View>
      </View>
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: '#fff',
  },
  rewardBox: {
    backgroundColor: '#324A59',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 23,
    marginVertical: 7,
    marginVertical: 7,
    overflow: 'hidden',
  },
  rewardBoxPoint: {
    paddingVertical: 25,
  },
  rewardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  rewardLabel: {
    color: '#fff',
  },
  coffeeList: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  coffeeListContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rewardPointLabel: {
    color: '#D8D8D8',
    fontSize: 24,
  },
  rewardContentPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnReward: {
    backgroundColor: 'rgba(162,205,233,.19)',
    height: 28,
    width: 111,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRewardText: {
    fontSize: 10,
    color: '#D8D8D8',
  },
  rewardBoxBg: {
    position: 'absolute',
    bottom: -20,
    right: -20,
  },
  rewardHeading: {
    color: '#324A59',
    fontWeight: '600',
    marginBottom: 24,
  },
  pointItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#F4F5F7',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  pointLabel: {
    color: '#324A59',
    fontSize: 12,
    marginBottom: 5,
    fontWeight: '600',
  },
  pointSubLabel: {
    color: 'rgba(50,74,89,.22)',
    fontSize: 10,
  },
  pointReward: {
    color: '#324A59',
    fontSize: 16,
    fontWeight: '600',
  },
});
