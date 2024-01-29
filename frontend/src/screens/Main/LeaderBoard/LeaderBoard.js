import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {Dimensions, FlatList, View} from 'react-native';
import styles from './styles';
import {colors} from '../../../utils';
import ListHeader from '../../../components/ListHeader';
import {_data} from '../../../utils/dummyData';
const {width, height} = Dimensions?.get('screen');

export class LeaderBoard extends Component {
  ItemSeparatorComponent = () => {
    return <View style={styles.lineSeparator} />;
  };
  render() {
    return (
      <AppBackground
        menu
        title={'Leader Board'}
        notification
        marginHorizontal={false}
        children={
          <View style={{flex: 1}}>
            <View style={styles?.gap} />
            <ListHeader
              _title1="Rank"
              _title2="Employee"
              _title3="Team"
              _title4="Revenue"
            />
            <FlatList
              style={{flex: 1, marginTop: height / 64}}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: width * 0.32,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={_index => _index.toString()}
              data={_data}
              ItemSeparatorComponent={this?.ItemSeparatorComponent}
              renderItem={({item}) => (
                <ListHeader
                  leaderBoardData={true}
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

export default LeaderBoard;
