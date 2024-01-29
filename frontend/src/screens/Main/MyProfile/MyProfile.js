//MyProfile

import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import AppBackground from '../../../components/AppBackground';
import {appIcons, appImages} from '../../../assets';
import CustomText from '../../../components/CustomText';
import ProfileImage from '../../../components/ProfileImage';
import appStyles from '../../appStyles';
import {colors, size} from '../../../utils';
import { event, itemInfo} from '../../../utils/dummyData';
import CustomSingleList from '../../../components/CustomSingleList';
import NavService from '../../../helpers/NavService';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
import { ASSETS_URL } from '../../../config/WebService';

class Profile extends Component {
  state = {
    profileImage: null,
  };
  render() {
    const {profileImage} = this.state;
    const {user} = this?.props;
    console.log('usjjjjer', user)
     const ProfileInfo = [
      {
        heading: 'First Name',
        subHeading: user?.first_name,
        verify: true,
      },
      {
        heading: 'Email Address',
        subHeading: user?.email,
        verify: true,
      },
      {
        heading: 'Status',
        subHeading: 'Active',
        active: true,
      },
    
      {
        heading: 'Location',
        subHeading: user?.location,
      },
      {
        heading: 'Documents',
        location: false,
        imgBack: ASSETS_URL + user?.image_back,
        imgFront : ASSETS_URL + user?.image_front
      },
    ];
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    console.log('userinmyprofileeeee', user)
    return (
      <AppBackground
        back
        title={'My Profile'}
        Rightimage
        rightIcon={appIcons.pen}
        OnPressRight={() => NavService.navigate('EditProfile')}
        // notification
        marginHorizontal={false}>
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
                imageUri={
                  profileImage == null && user?.profile_image == null
                      ? appImages?.profile
                      : user?.profile_image !== '' && profileImage == null
                      ? {uri: ASSETS_URL + user?.profile_image}
                      : profileImage?.path
                }
              />
            </View>
            <CustomText
              text={`${user?.first_name} ${user?.last_name}`}
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
            data={ProfileInfo}ß
            renderItem={({item}) => (
              <CustomSingleList item={item} user={user} />
            )}
          />
        </ScrollView>
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
export default connect(mapStateToProps, actions)(Profile);
