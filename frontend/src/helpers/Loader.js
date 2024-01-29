import React, {useEffect} from 'react';
import {Animated, View, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../utils';

const {width, height} = Dimensions.get('screen');

const tab = [
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
];

const Loader = ({color}) => {
  useEffect(() => {
    function animatedHeight() {
      const anim = [];
      for (let i = 0; i < 5; i++) {
        const height = tab[i];
        anim.push(
          Animated.sequence([
            Animated.timing(height, {
              toValue: 1,
              duration: 400,
              delay: i * 120,
              useNativeDriver: false,
            }),
            Animated.timing(height, {
              toValue: 0,
              duration: 400,
              useNativeDriver: false,
            }),
          ]),
        );
      }
      Animated.parallel(anim).start(() => {
        animatedHeight();
      });
    }
    animatedHeight();
  }, []);

  const renderItem = () => {
    const listItem = [];
    for (let i = 0; i < 5; i++) {
      const height1 = tab[i].interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [20, 24, 36],
      });
      const height2 = tab[i].interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [36, 24, 20],
      });
      listItem.push(
        <Animated.View
          key={i}
          style={{
            backgroundColor: color?.length ? color : colors.primary,
            width: 6,
            marginLeft: 5,
            borderRadius: 50,
            height: i % 2 == 0 ? height1 : height2,
          }}
        />,
      );
    }
    return listItem;
  };
  const loader = useSelector(({appReducer}) => appReducer?.loader || false);
  if (!loader) return null;
  return (
    <View
      style={{
        zIndex: 99,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        height,
        width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {renderItem()}
      </View>
    </View>
  );
};

export default Loader;
