import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {styles} from './styles';
import {Dimensions, FlatList, View} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors, family, size} from '../../../utils';
import {appIcons} from '../../../assets';
import {_data, _dataStats} from '../../../utils/dummyData';
import ListHeader from '../../../components/ListHeader';
import appStyles from '../../appStyles';
import NavService from '../../../helpers/NavService';
import CustomText from '../../../components/CustomText';
const {width, height} = Dimensions?.get('screen');

export class User extends Component {
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
        back
        title={'Users'}
        // notification
        marginHorizontal={false}
        marginBottom={height / 32}>
        <View style={styles?.container}>
          {/* <CustomTextInput
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
          /> */}
          <View style={styles?.gap} />

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
              <View
                style={{
                  backgroundColor: colors?.lightBlue,
                  padding: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <View
                  style={{
                    backgroundColor: colors?.secondary,
                    height: 30,
                    width: 30,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    borderColor: colors?.secondary,
                  }}>
                  <CustomText
                    size={size?.small}
                    text={item?.name?.charAt()}
                    color={colors?.white}
                    font={family?.Poppins_Medium}
                  />
                </View>
                <View>
                  <CustomText
                    size={size?.small}
                    text={item?.name}
                    color={colors?.secondary}
                    font={family?.Poppins_Medium}
                  />
                  <CustomText
                    size={size?.xxsmall}
                    color={colors?.primary}
                    text={item?.email}
                    font={family?.Poppins_Medium}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </AppBackground>
    );
  }
}

export default User;
