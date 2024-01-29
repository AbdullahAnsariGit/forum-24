import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';
import {colors} from '../utils';
import {appIcons} from '../assets';

const {width} = Dimensions.get('screen');

const Card = ({onPress = () => {}, item}) => {
  const [like, setLike] = useState(false);
  return (
    <View style={styles.card}>
      <View style={[styles.header]}>
        <TouchableOpacity
          onPress={() => NavService.navigate('OtherProfile', {user: item})}
          style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={item?.image} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item?.name}</Text>
              <Text style={styles.time}>{item?.time}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Image source={appIcons.dots} style={styles.dot} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginTop: 10}}>
        <Text style={styles.post}>{item?.description}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setLike(!like)} activeOpacity={0.8}>
          <Image
            source={appIcons.heart}
            resizeMode={'contain'}
            style={{
              width: 25,
              height: 25,
              tintColor: !like ? 'grey' : 'red',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.likes} onPress={() => NavService.navigate('Likes')}>
          {!like ? item?.likeCount : item?.likeCount + 1} Likes
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{flexDirection: 'row'}}
          onPress={() => NavService.navigate('Comments')}>
          <Image
            source={appIcons.comment}
            resizeMode={'contain'}
            style={{
              width: 25,
              height: 25,
              marginLeft: 20,
            }}
          />
          <Text style={[styles.likes, {marginTop: 4}]}>
            {item?.commentCount} Comments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    ...Shadows.shadow0,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginTop: 20,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray,
    marginTop: 2,
  },
  name: {fontSize: 15, fontWeight: '600'},
  dot: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tint: colors.black,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    borderTopWidth: 0.4,
    borderColor: 'lightgrey',
    paddingTop: 10,
  },
  videoStyle: {
    width: '100%',
    height: 200,
    backgroundColor: colors.gray,
  },
  likes: {
    marginLeft: 10,
    fontSize: 13,
    color: colors.gray,
  },
  post: {
    flex: 1,
    fontSize: 14,
    fontWeight: '300',
    color: colors.black,
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: colors.gray,
    width: width * 0.25,
    padding: 5,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    position: 'absolute',
    right: 11,
    top: 15,
    alignItems: 'center',
    zIndex: 1000,
  },
  menuText: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '300',
    lineHeight: 20,
  },
});
