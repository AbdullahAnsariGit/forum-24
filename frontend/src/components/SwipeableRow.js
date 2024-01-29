import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import Shadows from '../helpers/Shadows';
import {appIcons} from '../assets/index';
import {colors} from '../utils';

const {width, height} = Dimensions.get('screen');

function SwipeableRow({
  item,
  renderVisibleComponent = () => {},
  height,
  onDelete = () => {},
}) {
  const [visible, setVisible] = useState(false);
  return (
    <SwipeRow
      // stopLeftSwipe
      disableRightSwipe
      rightOpenValue={-80}
      onSwipeValueChange={e => {
        if (e.value < -70) {
          setVisible(true);
        } else if (e.value > -10) setVisible(false);
      }}>
      {renderHiddenComponent({item, visible, height, onDelete})}
      {renderVisibleComponent(item)}
    </SwipeRow>
  );
}
export default SwipeableRow;
function DeleteButton({onDelete}) {
  return (
    <View
      style={{
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: height * 0.09,
      }}>
      <TouchableOpacity onPress={onDelete} activeOpacity={0.8}>
        <Image
          source={appIcons.trash}
          style={{
            width: width * 0.1,
            height: height * 0.1,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
function renderHiddenComponent({item, visible, height = 150, onDelete}) {
  if (!visible) return <View></View>;
  return (
    <View
      style={{
        height,
        justifyContent: 'center',
        marginRight: 14,
      }}>
      <DeleteButton item={item} onDelete={onDelete} />
    </View>
  );
}
