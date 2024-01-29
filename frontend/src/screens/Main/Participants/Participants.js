import {Dimensions, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {FlatList} from 'react-native';
import {
  _Participants,
  _messagePage,
  multiImages,
} from '../../../utils/dummyData';
import NavService from '../../../helpers/NavService';
import CustomList from '../../../components/CustomList';
import styles from './styles';
import CustomText from '../../../components/CustomText';
import CustomIcon from '../../../components/CustomIcon';
import {colors, family, size} from '../../../utils';
const {height, width} = Dimensions?.get('screen');

class Participants extends Component {
  ItemSeparatorComponent = () => {
    return <View style={styles.lineSeparator} />;
  };
  render() {
    return (
      <AppBackground title={'Participants'} back marginHorizontal={false}>
        <View style={{flex: 1, marginTop: 15}}>
          <View style={styles.Customtext}>
            <CustomText text="26 Participants" style={{color: 'black'}} />
            <View style={styles?.imagesContainer}>
              {multiImages?.map(_item => {
                return (
                  <CustomIcon
                    customIconWrapper={styles?.customIconWrapper}
                    customIconStyle={styles?.customIconStyle}
                    src={_item?.img}
                    size={size?.h2}
                    resizeMode="cover"
                  />
                );
              })}
              {/* <CustomText
                text={'09 Users'}
                color={colors?.black}
                font={family?.Poppins_Medium}
                size={size?.xsmall}
              /> */}
            </View>
          </View>
          <FlatList
            bounces={false}
            style={{flex: 1, marginTop: height / 64}}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: width * 0.32,
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={_index => _index.toString()}
            data={_Participants}
            ItemSeparatorComponent={this?.ItemSeparatorComponent}
            renderItem={({item}) => (
              <CustomList
                _item={item}
                // onPress={() => NavService?.navigate('Chat')}
              />
            )}
          />
        </View>
      </AppBackground>
    );
  }
}

export default Participants;
