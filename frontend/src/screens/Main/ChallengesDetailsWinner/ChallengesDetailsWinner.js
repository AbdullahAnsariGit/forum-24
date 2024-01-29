import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {Dimensions, FlatList, View} from 'react-native';
import styles from './styles';
import {colors, family, size} from '../../../utils';
import {
  _Challenges,
  _completedData,
  _data,
  _progressBar,
  _singleChallenge,
  multiImages,
} from '../../../utils/dummyData';
import ListComponent from '../../../components/ListComponent';
import ListProgressBar from '../../../components/ListProgressBar';
import CustomText from '../../../components/CustomText';
import CustomIcon from '../../../components/CustomIcon';
import {appIcons, appImages} from '../../../assets';
import CustomCardList from '../../../components/CustomCardList';
const {width, height} = Dimensions?.get('screen');

export class ChallengesDetailsWinner extends Component {
  ItemSeparatorComponent = () => {
    return <View style={styles.lineSeparator} />;
  };
  render() {
    return (
      <AppBackground
        back
        title={'Challenges & Promotions'}
        marginHorizontal={false}
        children={
          <View style={{flex: 1}}>
            <View style={styles?.gap} />
            <View>
              <View style={{height: 120}}>
                {_singleChallenge.map(item => {
                  return <CustomCardList item={item} />;
                })}
              </View>

              <View style={styles?.gap} />

              <View style={[styles?.headingBig]}>
                <View>
                  <CustomIcon
                    size={height / 14}
                    src={appImages?.profile}
                    resizeMode="cover"
                    customIconStyle={styles?.customIcon}
                    customIconWrapper={styles?.customIcon}
                  />
                </View>
                <View>
                  <CustomText
                    text={'John Smith'}
                    color={colors?.secondary}
                    font={family?.Poppins_Medium}
                    size={size?.xsmall}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <CustomIcon
                      size={size?.xxsmall}
                      src={appIcons?.trophy}
                      resizeMode="cover"
                    />
                    <CustomText
                      text={'Winner'}
                      color={colors?.primary}
                      font={family?.Poppins_Medium}
                      size={size?.xsmall}
                    />
                  </View>

                  <CustomText
                    text={'Completed Challenge - July 07.2023'}
                    color={colors?.black}
                    font={family?.Poppins_Light}
                    size={size?.xtiny}
                  />
                </View>
                <View style={{flex: 1, alignSelf: 'flex-start'}}>
                  <CustomIcon
                    size={height / 12}
                    src={appIcons?.rank}
                    resizeMode="cover"
                    customIconStyle={styles?.customRankIcon}
                    customIconWrapper={styles?.customRankIconWrap}
                  />
                </View>
              </View>
            </View>
            <View style={styles?.gap} />
            <View style={styles?.participantContainer}>
              <CustomText
                text={'Participated Users'}
                color={colors?.black}
                font={family?.Poppins_Medium}
                size={size?.small}
              />
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
                <CustomText
                  text={'09 Users'}
                  color={colors?.black}
                  font={family?.Poppins_Medium}
                  size={size?.xsmall}
                />
              </View>
            </View>
            <FlatList
              style={{flex: 1}}
              contentContainerStyle={{
                flexGrow: 1,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={_index => _index.toString()}
              data={_progressBar}
              ItemSeparatorComponent={this?.ItemSeparatorComponent}
              renderItem={({item}) => (
                <ListProgressBar
                  _item={item}
                  customContainerStyles={styles?.customContainerStyles}
                  color={colors?.secondary}
                  customLine={{borderColor: colors?.primary}}
                  color4={colors?.secondary}
                  color3={colors?.secondary}
                />
              )}
            />
          </View>
        }></AppBackground>
    );
  }
}

export default ChallengesDetailsWinner;
