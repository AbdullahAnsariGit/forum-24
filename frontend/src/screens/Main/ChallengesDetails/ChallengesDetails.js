import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {
  Alert,
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
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
import NavService from '../../../helpers/NavService';
const {width, height} = Dimensions?.get('screen');

export class ChallengesDetails extends Component {
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
            <TouchableOpacity style={{height: 120}}>
              {_singleChallenge.map(item => {
                return (
                  <CustomCardList
                    onPress={() => NavService.goBack()}
                    item={item}
                  />
                );
              })}
            </TouchableOpacity>
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
                paddingBottom:20
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

export default ChallengesDetails;
