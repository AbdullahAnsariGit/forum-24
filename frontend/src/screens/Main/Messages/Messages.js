import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors} from '../../../utils';
import styles from './styles';
import {Dimensions, FlatList, View} from 'react-native';
import {appIcons} from '../../../assets';
import CustomList from '../../../components/CustomList';
import {_dataStats, _messagePage} from '../../../utils/dummyData';
import NavService from '../../../helpers/NavService';
const {height, width} = Dimensions?.get('screen');
export class Messages extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      _messagePage,
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
    console.log(_messagePage[0]?.name, '_messagePage_messagePage');
    return (
      <AppBackground
        menu
        title={'Messages'}
        notification
        marginBottom={height / 32}
        marginHorizontal={false}>
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
          <FlatList
            bounces={false}
            style={{flex: 1, marginTop: height / 64}}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: width * 0.32,
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={_index => _index.toString()}
            data={_messagePage}
            ItemSeparatorComponent={this?.ItemSeparatorComponent}
            renderItem={({item}) => (
              <CustomList
                Status
                _item={item}
                onPress={() =>
                  NavService?.navigate('Chat', {name: _messagePage[0]?.name})
                }
              />
            )}
          />
        </View>
      </AppBackground>
    );
  }
}

export default Messages;
