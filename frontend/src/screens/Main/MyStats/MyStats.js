import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {
  Alert,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import CustomList from '../../../components/CustomList';
import {
  _dataStats,
  _messagePage,
  _ongoingGoals,
} from '../../../utils/dummyData';
import NavService from '../../../helpers/NavService';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors} from '../../../utils';
import {appIcons, appImages} from '../../../assets';
import CustomIcon from '../../../components/CustomIcon';
import CustomButton from '../../../components/CustomButton';
import CustomTabView from '../../../components/CustomTabView';
import CustomText from '../../../components/CustomText';
import Img from '../../../components/Img';
import appStyles from '../../appStyles';
const {height, width} = Dimensions?.get('screen');
export class MyStats extends Component {
  constructor() {
    super();
    this.state = {
      isActive: 0,
      isActiveMonth: 0,
    };
  }
  ItemSeparatorComponent = () => {
    return <View style={styles.lineSeparator} />;
  };
  render() {
    const {isActive, isActiveMonth} = this?.state;
    const buttonTabs = [
      {
        id: 0,
        btn: 'Weekly',
      },
      {
        id: 1,
        btn: 'Monthly',
      },
      {
        id: 2,
        btn: 'Yearly',
      },
    ];

    const buttonTabsMonths = [
      {id: 0, btn: 'Jan'},
      {id: 1, btn: 'Feb'},
      {id: 2, btn: 'Mar'},
      {id: 3, btn: 'Apr'},
      {id: 4, btn: 'May'},
      {id: 5, btn: 'Jun'},
      {id: 6, btn: 'Jul'},
      {id: 7, btn: 'Aug'},
      {id: 8, btn: 'Sep'},
      {id: 9, btn: 'Oct'},
      {id: 10, btn: 'Nov'},
      {id: 11, btn: 'Dec'},
    ];

    const handleTabs = id => {
      this?.setState({isActive: id});
    };
    const handleTabsMonths = id => {
      this?.setState({isActiveMonth: id});
    };
    return (
      // <ScrollView>
      <AppBackground back title={'My Stats'} marginHorizontal={false}>
        <View style={styles?.container}>
          <View style={{flex: 1, marginTop: 10, gap: 12}}>
            <CustomTabView
              item={buttonTabs}
              isActive={isActive}
              onPress={handleTabs}
              width={width - 40}
              btnWidth={(width - 50) / 3}
            />

            {/* LineChart */}

            <View>
              <LineChart
                data={{
                  labels: [
                    'Week 1',
                    'Week 2',
                    'Week 3',
                    'Week 4',
                    'Week 5',
                    'Week 6',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                    },
                  ],
                }}
                width={360}
                height={200}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: 'white',
                  backgroundGradientTo: 'white',
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(16, 181, 250, ${opacity})`,
                  labelColor: (opacity = 1) => 'black',

                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '4',
                    strokeWidth: '1',
                    stroke: colors.primary,
                  },
                }}
                bezier
                style={{
                  // alignSelf:'center',
                  // marginVertical: 8,
                  // paddingHorizontal: 50,
                  borderRadius: 16,
                }}
              />
            </View>
            <CustomTabView
              item={buttonTabsMonths}
              isActive={isActiveMonth}
              onPress={handleTabsMonths}
              width={width - 40}
              btnWidth={(width - 50) / 6}
            />
            <FlatList
              bounces={false}
              style={{flex: 1, marginTop: height / 64}}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: width * 0.03,
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
                        Star
                        _item={item}
                        statusColor={
                          isActive ? colors?.secondary : colors?.primary
                        }
                        customContainer={{
                          borderRadius: 15,
                          backgroundColor: colors?.lightBlue,
                        }}
                        // onPress={() => NavService?.navigate('Information')}
                      />
                    )}
                  />
                </>
              )}
            />
          </View>
        </View>
      </AppBackground>
      /* </ScrollView> */
    );
  }
}

export default MyStats;
