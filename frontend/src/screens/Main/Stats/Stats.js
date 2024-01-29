import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {styles} from './styles';
import {Dimensions, FlatList, View} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors} from '../../../utils';
import {appIcons} from '../../../assets';
import {_data, _dataStats} from '../../../utils/dummyData';
import ListHeader from '../../../components/ListHeader';
import appStyles from '../../appStyles';
import NavService from '../../../helpers/NavService';
const {width, height} = Dimensions?.get('screen');

export class Stats extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  ItemSeparatorComponent = () => {
    return <View style={styles.lineSeparator} />;
  };
  componentDidMount() {
    this?.props?.navigation?.addListener('focus', () => {
      this.setState({search: ''});
    });
  }

  render() {
    return (
      <AppBackground
        menu
        title={'Stats'}
        notification
        marginHorizontal={false}
        marginBottom={height / 32}>
        <View style={styles?.container}>
          <CustomTextInput
            placeholder="Search here..."
            placeholderColor={colors?.gray}
            textInputStyles={styles?.textInputStyles}
            containerStyle={styles?.containerStyle}
            search={appIcons?.search}
            value={this?.state?.search}
            borderStyles={styles?.borderStyles}
            onChangeText={text => {
              this.setState({search: text});
            }}
            // onSubmitEditing={() => {
            //   this.setState({search: ''});
            // }}
          />
          <View style={styles?.gap} />
          <ListHeader
            stats={false}
            _title2="Employee"
            _title3="Team"
            _title4="Revenue"
            customStylesRow2={styles?.customStylesRow2}
            customStylesRow3={styles?.customStylesRow3}
            customStylesRow4={styles?.customStylesRow3}
            disabled={true}
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
            data={_dataStats}
            ItemSeparatorComponent={this?.ItemSeparatorComponent}
            renderItem={({item}) => (
              <ListHeader
                stats={false}
                leaderBoardData={false}
                _item={item}
                customContainerStyles={styles?.customContainerStyles}
                color={colors?.secondary}
                customLine={{borderColor: colors?.primary}}
                customStylesRow2={styles?.customStylesRow2}
                customStylesRow3={styles?.customStylesRow3}
                customStylesRow4={styles?.customStylesRow3}
                color4={colors?.primary}
                color3={colors?.black}
                onPress={() => NavService?.navigate('StatsDetails')}
              />
            )}
          />
        </View>
      </AppBackground>
    );
  }
}

export default Stats;
