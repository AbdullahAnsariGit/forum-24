import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Img from './Img';
import {colors} from '../utils';
import GroupImages from './GroupImages';
import appStyles from '../screens/appStyles';

const {width} = Dimensions.get('window');

const GroupList = props => {
  const item = props.item;
  const {onPress, onPressMembers} = props;
  return (
    <View style={styles.mainCont}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}></TouchableOpacity>
      <View style={styles.flexRow}>
        <GroupImages
          style={{marginTop: 3}}
          groupNo={item.groupNo}
          onPress={onPressMembers}
        />
      </View>
    </View>
  );
};

export default GroupList;

const styles = StyleSheet.create({
  mainCont: {
    marginBottom: 10,
  },

  groupImg: {
    width: width * 0.43,
    height: 115,
  },

  groupName: {
    ...appStyles.font16,
    ...appStyles.family_Jost_SemiBold,
    color: colors.black,
    width: '85%',
  },

  flexRow: {
    ...appStyles.directionRow,
    ...appStyles.alignCenter,
  },

  groupType: {
    ...appStyles.font15,
    ...appStyles.family_Jost_SemiBold,
    color: colors.gray,
  },
});
