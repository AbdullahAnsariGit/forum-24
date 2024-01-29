import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {
  Alert,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

import CustomList from '../../../components/CustomList';
import {
  _dataStats,
  _messagePage,
  _ongoingGoals,
} from '../../../utils/dummyData';
import NavService from '../../../helpers/NavService';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors, family, size} from '../../../utils';
import {appIcons} from '../../../assets';
import CustomIcon from '../../../components/CustomIcon';
import CustomButton from '../../../components/CustomButton';
import CustomTabView from '../../../components/CustomTabView';
import CustomText from '../../../components/CustomText';
import Img from '../../../components/Img';
import appStyles from '../../appStyles';
import Modal from 'react-native-modal';
import CustomModal from '../../../components/CustomModal';

const {height, width} = Dimensions?.get('screen');
export class MyGoals extends Component {
  constructor() {
    super();
    this.state = {
      isActive: 0,
      date: '',
      selectFormat: 0,
      isDatePickerVisible: false,
      formattedValue: '',
      selectedDate: '',
      selectedDate: null,
      isModalVisible: false,
      startDate: '',
      endDate: '',
      period: {},
      markedDates: {},
    };
  }
  handleDayPress = day => {
    const {dateString} = day;
    let {startDate, endDate, markedDates} = this.state;

    if (startDate && !endDate) {
      if (Date.parse(dateString) < Date.parse(startDate)) {
        [startDate, endDate] = [dateString, startDate];
      } else {
        endDate = dateString;
      }

      markedDates = this.markDatesBetween(startDate, endDate);
    } else {
      startDate = dateString;
      endDate = null;
      markedDates = {
        [dateString]: {
          startingDay: true,
          endingDay: true,
          color: colors.primary,
        },
      };
    }

    this.setState({startDate, endDate, markedDates});
  };

  markDatesBetween = (start, end) => {
    const markedDates = {};
    console.log(markedDates, 'markedDates');
    let currentDate = new Date(start);
    const stopDate = new Date(end);

    while (currentDate <= stopDate) {
      const dateString = currentDate.toISOString().split('T')[0];
      if (dateString === start) {
        markedDates[dateString] = {
          startingDay: true,
          color: colors.secondary,
          textColor: 'white',
          borderRadius: 100,
        };
      } else if (dateString === end) {
        markedDates[dateString] = {
          ...markedDates[dateString],
          endingDay: true,
          color: colors.secondary,
          textColor: 'white',
          borderRadius: 10,
        };
      } else {
        markedDates[dateString] = {color: colors.primary, textColor: 'white'};
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return markedDates;
  };

  // generateDateRange = () => {
  //   const {startDate, endDate} = this.state;
  //   const markedDates = {};

  //   if (startDate && endDate) {
  //     let currentDate = new Date(startDate);
  //     while (currentDate <= new Date(endDate)) {
  //       const dateString = currentDate.toISOString().split('T')[0];
  //       markedDates[dateString] = {selected: true, marked: true};
  //       currentDate.setDate(currentDate.getDate() + 1);
  //     }
  //   }

  //   return markedDates;
  // };
  // handleDateSelect = date => {
  //   const {startDate, endDate} = this.state;

  //   if (!startDate || endDate) {
  //     this.setState({
  //       startDate: date.dateString,
  //       endDate: '', // Clear the end date
  //     });
  //   } else if (date.dateString < startDate) {
  //     // If the selected date is before the start date, set it as the new start date.
  //     this.setState({
  //       startDate: date.dateString,
  //     });
  //   } else {
  //     // If the selected date is after the start date, set it as the end date.
  //     this.setState({
  //       endDate: date.dateString,
  //     });
  //   }
  // };

  // handleDateSelect = date => {
  //   const {startDate, endDate, period} = this.state;
  //   console.log(period, 'periodperiod');

  //   if (!period.startDate) {
  //     this.setState({period: {startDate: date.dateString}});
  //   } else if (period.startDate && !period.endDate) {
  //     this.setState({period: {...period, endDate: date.dateString}});
  //   } else {
  //     this.setState({period: {}});
  //   }
  // };

  // renderPeriodStyles = () => {
  //   const {startDate, endDate, period} = this.state;
  //   const periodStyles = {};

  //   if (period.startDate && period.endDate) {
  //     const currentDate = moment(period.startDate);
  //     while (currentDate.isSameOrBefore(period.endDate)) {
  //       const dateStr = currentDate.format('YYYY-MM-DD');
  //       periodStyles[dateStr] = {
  //         startingDay: true,
  //         endingDay: currentDate.isSame(period.endDate),
  //         backgroundColor: 'lightblue',
  //         textColor: 'red',
  //       };
  //       currentDate.add(1, 'day');
  //     }
  //   }

  //   return periodStyles;
  // };

  // handleDateSelect = date => {
  //   const { startDate, endDate } = this.state;

  //   // this.setState({

  //   //   selectedDate: date.dateString,
  //   //   //   isModalVisible: false, // Close the modal after selecting a date
  //   // });
  // };

  openCalendar = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleConfirm = date => {
    if (this.state.selectFormat === 0) {
      const currentDate = moment();
      const selectedDate = moment(date);
      if (selectedDate.isAfter(currentDate)) {
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
  ItemSeparatorComponent = () => {
    return <View style={styles.lineSeparator} />;
  };
  render() {
    const {
      isActive,
      selectedDate,
      isDatePickerVisible,
      date,
      startDate,
      endDate,
      period,
    } = this?.state;
    const markedDates = {};

    if (startDate && endDate) {
      // If both start and end dates are selected, mark the date range.
      markedDates[`${startDate}/${endDate}`] = {
        backgroundColor: startDate || endDate ? 'lightblue' : 'black',
        selected: true,
      };
    }

    if (startDate && endDate) {
      // If both start and end dates are selected, mark the date range.
      markedDates[`${startDate}/${endDate}`] = {
        backgroundColor: startDate || endDate ? 'lightblue' : 'black',

        selected: true,
      };
    }
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
        menu
        title={'My Goals'}
        notification
        marginHorizontal={false}
        marginBottom={height / 32}>
        <View style={styles?.container}>
          <View style={styles?.searchWrapper}>
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
            <TouchableOpacity
              style={styles.circle}
              onPress={this.openCalendar}
              activeOpacity={0.9}>
              <CustomIcon size={24} src={appIcons?.calendar} />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, marginTop: -25}}>
            <CustomTabView
              item={buttonTabs}
              width={width - 40}
              btnWidth={(width - 50) / 2}
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
              data={_ongoingGoals}
              ItemSeparatorComponent={this?.ItemSeparatorComponent}
              renderItem={({item}) => (
                <>
                  <CustomText
                    color={colors?.black}
                    text={item?.assosiate_date_info?.date}
                    font={family?.Poppins_Medium}
                    size={size?.normal}
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
                    data={item?.assosiate_date_info?.data}
                    ItemSeparatorComponent={this?.ItemSeparatorComponent}
                    renderItem={({item}) => (
                      <CustomList
                        _item={item}
                        statusColor={
                          isActive ? colors?.secondary : colors?.primary
                        }
                        customContainer={{
                          borderRadius: 15,
                          backgroundColor: isActive
                            ? colors?.lightBlue
                            : colors?.white,
                        }}
                        onPress={() =>
                          NavService?.navigate('GoDetails', {
                            completed: isActive,
                          })
                        }
                      />
                    )}
                  />
                </>
              )}
            />
          </View>
          <DateTimePickerModal
            maximumDate={new Date()}
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
          <View style={styles?.footer}>
            <CustomButton
              onPress={() => NavService.navigate('CreateGoal')}
              title="Create Goal"
              imgSrc={appIcons?.plus}
              buttonStyle={{alignItems: 'center', gap: 5}}
            />
          </View>
        </View>
        <CustomModal
          backdropColor={'red'}
          backdropOpacity={0.5}
          visible={this.state.isModalVisible}
          transparent={true}
          animationType="slide"
          onBackButtonPress={this.closeModal}
          onBackdropPress={this.closeModal}
          onRequestClose={this.closeModal}>
          <View
            style={{
              justifyContent: 'center',
              // flex: 1,
              ...Shadows.shadow5,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderRadius: 30,
                backgroundColor: colors.white,
                ...Shadows.shadow5,
                width: 350,
                paddingVertical: 10,
                // height: '65%',
                // height: 200,

                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'pink',
                  alignItems: 'center',
                  marginLeft: '30%',
                  // width: '62%',
                }}>
                <CustomText
                  text="Select Date"
                  style={{
                    ...appStyles.font18,
                    marginRight: '35%',
                    color: colors.secondary,
                  }}
                />
                <TouchableOpacity onPress={this.closeModal}>
                  <Img
                    src={appIcons.cross}
                    local
                    style={{height: 30, width: 30}}
                  />
                </TouchableOpacity>
              </View>
              <Calendar
                markingType="period"
                markedDates={this.state.markedDates}
                onDayPress={this.handleDayPress}
              />
              <CustomButton
                onPress={this.closeModal}
                title="Apply"
                buttonStyle={{width: 300}}
                textStyle={{fontSize: size.small, color: colors.white}}
              />
            </View>
          </View>
        </CustomModal>
      </AppBackground>
    );
  }
}

export default MyGoals;
