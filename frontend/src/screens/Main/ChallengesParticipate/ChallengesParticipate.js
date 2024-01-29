import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {Dimensions, FlatList, ScrollView, View} from 'react-native';
import styles from './styles';
import {colors, family, size} from '../../../utils';
import {
  GoalDetails,
  _Challenges,
  _completedData,
  _data,
  _progressBar,
  _singleChallenge,
  challengesparticipate,
  multiImages,
} from '../../../utils/dummyData';
import ListComponent from '../../../components/ListComponent';
import ListProgressBar from '../../../components/ListProgressBar';
import CustomText from '../../../components/CustomText';
import CustomIcon from '../../../components/CustomIcon';
import {appIcons, appImages} from '../../../assets';
import Img from '../../../components/Img';
import CustomSingleList from '../../../components/CustomSingleList';
import CustomSingleList2 from '../../../components/CustomSingleList2';
import CustomButton from '../../../components/CustomButton';
import NavService from '../../../helpers/NavService';
const {width, height} = Dimensions?.get('screen');

export class ChallengesParticipate extends Component {
  render() {
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    return (
      <AppBackground
        back
        title={'Challenges & Promotions'}
        marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <View style={styles?.gap} />

            <View style={styles?.bannerWrapper}>
              <Img
                src={appImages?.sales}
                style={styles?.banner}
                local
                resizeMode={'cover'}
              />
            </View>
            <View style={styles?.gap2} />

            <CustomText
              text={'Posted July 05, 2023'}
              color={colors?.primary}
              font={family?.Poppins_Medium}
              size={size?.xxsmall}
            />
            <CustomText
              text={
                'Lorem ipsum dolor sit amet, consectetur adipisc elit sed do'
              }
              color={colors?.secondary}
              font={family?.Poppins_Medium}
              size={size?.xsmall}
            />
            <CustomText
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
              }
              color={colors?.black}
              font={family?.Poppins_Light}
              size={size?.tiny}
            />
            <View style={styles?.lineSeparator} />
            <FlatList
              contentContainerStyle={styles.containerstyle}
              ItemSeparatorComponent={ItemSeparatorComponent}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
              data={challengesparticipate}
              renderItem={({item}) => <CustomSingleList2 item={item} />}
            />
            <CustomButton
              onPress={() => NavService.navigate('ChallengesDetails')}
              title="Participate"
              buttonStyle={{
                alignItems: 'center',
                gap: 5,
                width: '100%',
                alignSelf: 'center',
                marginTop: 40,
                marginBottom: 30,
              }}
              textStyle={{
                fontSize: size?.xsmall,
              }}
            />
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default ChallengesParticipate;
