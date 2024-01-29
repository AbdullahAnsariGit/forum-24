//MyProfile

import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {appIcons, appImages} from '../../../assets';
import CustomText from '../../../components/CustomText';
import ProfileImage from '../../../components/ProfileImage';
import appStyles from '../../appStyles';
import {colors, size} from '../../../utils';
import {ProfileInfo, event, itemInfo} from '../../../utils/dummyData';
import CustomSingleList from '../../../components/CustomSingleList';
import styles from './styles';
import Img from '../../../components/Img';
import NavService from '../../../helpers/NavService';
import Shadows from '../../../helpers/Shadows';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/actions/authAction';
import CustomButton from '../../../components/CustomButton';

const {width} = Dimensions.get('screen');

class UserProfile extends Component {
  state = {
    profileImage: null,
  };
  render() {
    const {profileImage} = this.state;
    const user = this.props.user;
    console.log(user, 'yellllll');

    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    return (
      <AppBackground back title={'User Profile'} marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              appStyles.directionColumn,
              appStyles.alignCenter,
              appStyles.borderBottomColor,
              ,
              ,
              {gap: 7, marginTop: 20},
            ]}>
            <View style={styles.Profile}>
              <ProfileImage
                ViewStyle={styles.viewstyles}
                widthsize={110}
                heightsize={110}
                ImageborderRadius={140}
                // ViewBorderWidth={0}
                ViewborderColor={colors.secondary}
                innerAsset={profileImage == null ? true : false}
                imageUri={appImages.profile}
              />
            </View>

            <CustomText
              text={'Jay Smith'}
              size={size.normal}
              style={{
                ...appStyles.family_Montserrat_Semi_Bold,
                color: colors.secondary,
              }}
            />
          </View>
          <FlatList
            contentContainerStyle={styles.containerstyle}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            data={ProfileInfo}
            renderItem={({item}) => <CustomSingleList item={item} />}
          />
        </ScrollView>
        <CustomButton
          onPress={() => NavService.navigate('Chat')}
          title="Message"
          buttonStyle={[styles.pressAble]}
          textStyle={{fontSize: size.small, color: colors.white}}
        />
      </AppBackground>
    );
  }
}

function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {loginUser};
export default connect(mapStateToProps, actions)(UserProfile);
