import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {Alert, Dimensions, FlatList, View} from 'react-native';
import CustomList from '../../../components/CustomList';
import {
  _Challenges,
  _dataStats,
  _messagePage,
  _ongoingGoals,
  completedData,
} from '../../../utils/dummyData';
import NavService from '../../../helpers/NavService';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors, family, size} from '../../../utils';
import {appIcons} from '../../../assets';
import CustomIcon from '../../../components/CustomIcon';
import CustomButton from '../../../components/CustomButton';
import CustomTabView from '../../../components/CustomTabView';
import CustomText from '../../../components/CustomText';
import ListComponent from '../../../components/ListComponent';
import CustomCardList from '../../../components/CustomCardList';
const {height, width} = Dimensions?.get('screen');
export class Challenges extends Component {
  constructor() {
    super();
    this.state = {
      isActive: 0,
    };
  }
  ItemSeparatorComponent = () => {
    return <View style={styles.lineSeparator} />;
  };
  render() {
    const {isActive} = this?.state;
    const buttonTabs = [
      {
        id: 0,
        btn: 'Ongoing',
      },
      {
        id: 1,
        btn: 'Completed',
      },
    ];

    const handleTabs = id => {
      this?.setState({isActive: id});
    };
    return (
      <AppBackground
        back
        title={'Challenges & Promotions '}
        marginHorizontal={false}>
        <View style={styles?.container}>
          <View style={{flex: 1, marginTop: 10}}>
            <CustomTabView
              item={buttonTabs}
              width={width - 150}
              btnWidth={(width - 50) / 3}
              isActive={isActive}
              onPress={handleTabs}
            />
            <FlatList
              bounces={false}
              style={{flex: 1, marginTop: height / 64}}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: width * 0.32,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={_index => _index.toString()}
              data={isActive === 0 ? _Challenges : completedData}
              ItemSeparatorComponent={this?.ItemSeparatorComponent}
              renderItem={({item}) => (
                <CustomCardList
                  item={item}
                  onPress={() =>
                    isActive === 0
                      ? NavService?.navigate('ChallengesDetails')
                      : NavService?.navigate('ChallengesDetailsWinner')
                  }
                />
              )}
            />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default Challenges;
