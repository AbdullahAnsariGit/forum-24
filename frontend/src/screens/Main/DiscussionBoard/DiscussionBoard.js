import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {Alert, Dimensions, FlatList, View} from 'react-native';
import CustomList from '../../../components/CustomList';
import {
  _Challenges,
  _DiscussionBoard,
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
const {height, width} = Dimensions?.get('screen');
export class DiscussionBoard extends Component {
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
      <AppBackground back title={'Discussion Board'} marginHorizontal={false}>
        <View style={styles?.container}>
          <View style={{flex: 1, marginTop: 10}}>
            {/* <FlatList
              bounces={false}
              style={{flex: 1, marginTop: height / 64}}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: width * 0.32,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={_index => _index.toString()}
              data={_DiscussionBoard}
              ItemSeparatorComponent={this?.ItemSeparatorComponent}
              renderItem={({item}) => (
                <ListComponent
                  _item={item}
                  Board
                  onPress={() => NavService?.navigate('Chat')}
                />
              )}
            /> */}
            <FlatList
              bounces={false}
              style={{flex: 1, marginTop: height / 64}}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: width * 0.32,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={_index => _index.toString()}
              data={_DiscussionBoard}
              ItemSeparatorComponent={this?.ItemSeparatorComponent}
              renderItem={({item}) => (
                <CustomList
                  Board
                  _item={item}
                  statusColor={colors?.primary}
                  customContainer={{
                    borderRadius: 15,
                    backgroundColor: colors?.lightBlue,
                  }}
                  onPress={() => NavService?.navigate('GroupChat')}
                />
              )}
            />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default DiscussionBoard;
