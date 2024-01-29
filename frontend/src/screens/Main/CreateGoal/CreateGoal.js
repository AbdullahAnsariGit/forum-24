import {Keyboard, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import {colors} from '../../../utils';
import {appIcons} from '../../../assets';
import Img from '../../../components/Img';
import CustomButton from '../../../components/CustomButton';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import NavService from '../../../helpers/NavService';
class CreateGoal extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      Description: '',
      date: '',
      selectFormat: 0,
      isDatePickerVisible: false,
      formattedValue: '',
      selectedDate: '',
      target: '',
    };
  }
  componentDidMount() {
    Keyboard.dismiss();
  }
  onSubmit = () => {
    const {title, Description, date, target} = this.state;
    Keyboard.dismiss();

    // console.log(phoneNumbers, 'phoneNumbersphoneNumbers');
    if (title == '') {
      Toast.show({
        text1: 'Title field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (Description == '') {
      Toast.show({
        text1: 'Description field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (target == '') {
      Toast.show({
        text1: 'target field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (date == '') {
      Toast.show({
        text1: 'date field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Keyboard.dismiss();

      // NavService.navigate('BottomTabs', {screen: 'MyGoals'});
      NavService.goBack();
      Toast.show({
        text1: 'Goal Created Successfully',
        type: 'success',
        visibilityTime: 3000,
      });

      // this.props.loginUser(payload);
    }
  };
  handleConfirm = date => {
    if (this.state.selectFormat === 0) {
      const currentDate = moment();
      const selectedDate = moment(date);
      if (selectedDate.isAfter(currentDate)) {
        // Selected date is in the future
        Toast.show({
          text1: 'Please select a valid date',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        const formattedDate = selectedDate.format('YYYY-MM-DD');
        this.setState({isDatePickerVisible: false, date: formattedDate});
      }
    } else {
      const time = moment(date).format('LT');
      this.setState({isDatePickerVisible: false, time: time});
    }
  };
  render() {
    const {
      title,
      Description,
      date,
      isDatePickerVisible,
      selectedDate,
      target,
    } = this.state;
    return (
      <AppBackground back title={'Create Goal'}>
        <ScrollView contentContainerStyle={{paddingBottom:20}}>
          <View style={{flex: 1, marginTop: 20, gap: 15}}>
            <CustomTextInput
              color={colors.black}
              maxLength={35}
              // label
              // labeltext={'Email'}
              // leftIcon={appIcons.email}
              // Lineicon={appIcons.line}
              // Lineiconcolor={colors.gray}
              // Iconcolor={colors.secondary}
              placeholder={'Goal Title'}
              placeholderColor={colors.lightGray}
              value={title}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({title: value})}
              containerStyle={styles.emailinput}
            />
            <CustomTextInput
              textAlignVertical="top"
              maxLength={350}
              multiline
              color={colors.black}
              placeholder={'Description...'}
              value={Description}
              placeholderColor={colors.lightGray}
              borderRadius={30}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({Description: value})}
              TextInputStyling={{padding: 15,  height: 300}}
              containerStyle={{borderRadius: 30, height: 200,alignItems:'flex-start', paddingTop:10}}
            />
            <CustomTextInput
              rightImage={appIcons.dollar}
              color={colors.black}
              maxLength={7}
              keyboardType={'phone-pad'}
              // label
              // labeltext={'Email'}
              // leftIcon={appIcons.email}
              // Lineicon={appIcons.line}
              // Lineiconcolor={colors.gray}
              // Iconcolor={colors.secondary}
              placeholderColor={colors.lightGray}
              placeholder={'Set Target'}
              value={target}
              onChangeText={value => this.setState({target: value})}
              containerStyle={styles.emailinput}
            />

            <TouchableOpacity
              onPress={() => {
                this.setState({selectFormat: 0});
                this.setState({isDatePickerVisible: true});
              }}
              style={[styles.dateBtn, {backgroundColor: 'white'}]}>
              <Text
                style={[
                  styles.placeHolderText,
                  date === selectedDate && {color: colors.lightGray},
                ]}>
                {date ? date : 'Set Date'}
              </Text>
              <Img
                tintColor={colors.primary}
                local
                style={styles.calenderIcon}
                src={appIcons.calendar}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>
          <CustomButton
            title="Create"
            onPress={this.onSubmit}
            buttonStyle={styles.btn}
            textStyle={styles.btntext}
          />
        </View>
        <DateTimePickerModal
          //   maximumDate={new Date()}
          themeVariant="light"
          isDarkModeEnabled={false}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={date => {
            const confirmDate = moment(date).format('YYYY-MM-DD');
            this.setState({
              isDatePickerVisible: false,
              date: confirmDate,
            });
          }}
          onCancel={() => this.setState({isDatePickerVisible: false})}
        />
      </AppBackground>
    );
  }
}

export default CreateGoal;
