import {Dimensions, FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {_Home, _Promotion, completedData} from '../../../utils/dummyData';
import Promotions from '../../../components/Promotion';
import NavService from '../../../helpers/NavService';
const {height, width} = Dimensions.get('screen');

class PromotionDetails extends Component {
  render() {
    return (
      <AppBackground
        back
        title={'Challenges and Promotions'}
        marginHorizontal={false}>
        <FlatList
          bounces={false}
          style={{flex: 1, marginTop: height / 64}}
          contentContainerStyle={{
            flexGrow: 1,
            gap: 10,
            // paddingHorizontal:10,
            paddingBottom: width * 0.32,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={_index => _index.toString()}
          data={_Promotion}
          ItemSeparatorComponent={this?.ItemSeparatorComponent}
          renderItem={({item}) => (
            <Promotions
              _item={item}
              onPress={() => NavService?.navigate('ChallengesParticipate')}
            />
          )}
        />
      </AppBackground>
    );
  }
}

export default PromotionDetails;
