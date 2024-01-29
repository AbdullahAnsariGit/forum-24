import {ScrollView, Keyboard, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import CustomBackground from '../../../components/CustomBackground';
import ImagePicker from '../../../components/ImagePicker';
import styles from './styles';
import ProfileImage from '../../../components/ProfileImage';
import {colors} from '../../../utils';
import {appIcons} from '../../../assets';
import CustomTextInput from '../../../components/CustomTextInput';
import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import ModalPopup from '../../../containers/Popup/modalPopup/modalPopup';
import NavService from '../../../helpers/NavService';
import Toast from 'react-native-toast-message';
import {connect} from 'react-redux';
import {updateProfile} from '../../../redux/actions/authAction';
import {ASSETS_URL} from '../../../config/WebService';
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: null,
      Firstname: props?.user?.first_name,
      DesiredName: props?.user?.last_name,
      Backimage: null,
      frontimage: null,
      location: props?.user?.location,
      showModal: false,
    };
  }

  callback = (address, geometry) => {
    this.setState({latitude: geometry?.location.lat});
    this.setState({longitude: geometry?.location.lng});
    this.setState({location: address});
  };
  onSubmit = () => {
    const {
      Firstname,
      phoneNumbers,
      DesiredName,
      address,
      profileImage,
      location,
      frontimage,
      Backimage,
    } = this.state;
    if (
      profileImage == null &&
      Firstname == undefined &&
      DesiredName == undefined &&
      address == undefined &&
      frontimage == null &&
      Backimage == null 
    )
    {
      return Toast.show({
        text1: 'Please update something',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else {
      Keyboard.dismiss();
    let payload = new FormData();
    if (profileImage !== null) {
      payload.append('profile_image', {
        uri: profileImage?.path,
        name: `Profile${Date.now()}.${profileImage?.mime?.slice(
          profileImage?.mime?.lastIndexOf('/') + 1,
        )}`,
        type: profileImage?.mime,
      });
    }
    if (Firstname !== undefined) {
      payload.append('first_name', Firstname);
    }
    if (DesiredName !== undefined) {
      payload.append('last_name', DesiredName);
    }
    if (frontimage !== null) {
      payload.append('image_front', {
        uri: frontimage?.path,
        name: `frontimage${Date.now()}.${frontimage?.mime?.slice(
          frontimage?.mime?.lastIndexOf('/') + 1,
        )}`,
        type: frontimage?.mime,
      });
    }
    if (address !== undefined) {
      payload.append('location', address);
    }
    payload.append('latitude', location?.lat);
    payload.append('longitude', location?.lng);
    if (Backimage !== null) {
      payload.append('image_back', {
        uri: Backimage?.path,
        name: `Backimage${Date.now()}.${Backimage?.mime?.slice(
          Backimage?.mime?.lastIndexOf('/') + 1,
        )}`,
        type: Backimage?.mime,
      });
    }
    console.log('paylooooaaadofeditprofile', payload);
    setTimeout(() => {
      this?.props?.updateProfile(payload);
      NavService.goBack();
    }, 850);
  };
}
  render() {
    const {
      Firstname,
      phoneNumbers,
      DesiredName,
      Backimage,
      frontimage,
      profileImage,
      location,
      showModal,
    } = this.state;
    const updateImageInGallery = (path, mime, type) => {
      this.setState({
        profileImage: {path, mime, type},
      });
    };
    const updateImageInGallery1 = (path, mime, type) => {
      this.setState({
        frontimage: {path, mime, type},
      });
    };
    const updateImageInGallery2 = (path, mime, type) => {
      this.setState({
        Backimage: {path, mime, type},
      });
    };
    const handleGoBack = () => {
      this.setState({showModal: false});
      NavService.goBack();
    };
    const handleClose = () => {
      this.setState({showModal: false});
    };
    const saveAddress = (address, geometry, data) => {
      // console.log('data?.termsdata?.terms', data?.terms);
      this.setState({address: address, location: geometry?.location});
    };
    const {user} = this?.props;
    return (
      <AppBackground
        showLogo={false}
        title={'Edit Profile'}
        back
        backgroundImage={null}
        titleText={'Edit Profile'}
        onBack={() => this.props.navigation.goBack()}>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 15,
              bottom: 20,
            }}>
            <View style={styles.mainContainer}>
              <ImagePicker
                onImageChange={(path, mime, type) => {
                  updateImageInGallery(path, mime, type);
                }}>
                <ProfileImage
                  ViewStyle={{
                    justifyContent: 'center',
                    marginTop: 0,
                  }}
                  viewHeight={130}
                  ViewWidth={130}
                  widthsize={profileImage?.path ? 130 : 30}
                  heightsize={profileImage?.path ? 130 : 30}
                  ImageborderRadius={profileImage?.path ? 100 : 0}
                  ViewBorderWidth={2}
                  ViewborderColor={colors.secondary}
                  // name={'aa'}
                  innerAsset={profileImage == null ? true : false}
                  imageUri={
                    profileImage == null && user?.user_image == null
                      ? appIcons.camera
                      : user?.user_image !== '' && profileImage == null
                      ? {uri: ASSETS_URL + user?.user_image}
                      : profileImage?.path
                  }
                />
              </ImagePicker>
            </View>
            <View style={{gap: 10}}>
              <CustomTextInput
                label
                labeltext={'First Name'}
                Lineiconcolor={colors.gray}
                Iconcolor={colors.secondary}
                placeholder={'First Name'}
                value={Firstname}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({Firstname: value})}
                containerStyle={styles.emailinput}
              />
              <CustomTextInput
                label
                labeltext={'Desired Name'}
                Lineiconcolor={colors.gray}
                Iconcolor={colors.secondary}
                placeholder={'Desired Name'}
                value={DesiredName}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({DesiredName: value})}
                containerStyle={styles.emailinput}
              />

              <GooglePlaceAutocomplete
                addressText={location}
                placeholder={user?.location}
                handleAddressText={location => this.setState({location})}
                iconColor={true}
                editprofile={true}
                valueEdit={'Nagan Chowrangi'}
                rightIcon={appIcons.location}
                CheckIn={true}
                val={location}
                isBorderShow
                callback={saveAddress}
              />
              <View style={styles.uploadView}>
                <CustomText
                  text="Upload Documents"
                  style={styles.uploaddoctext}
                />
                <CustomText
                  style={styles.uploaddocsubtext}
                  text="(ldentification Government Card or Business Sales License)"
                />

                <View style={[styles.uploaddocuments]}>
                  <ImagePicker
                    onImageChange={(path, mime, type) => {
                      updateImageInGallery1(path, mime, type);
                    }}>
                    <ProfileImage
                      ViewStyle={{
                        marginTop: 0,
                        height: 105,
                        width: 170,
                        borderWidth: 1,
                        borderStyle: 'dashed',
                        backgroundColor: 'white',
                        borderRadius: 10,
                      }}
                      label
                      style={{
                        // tintColor: !Backimage?.path ? null : null,
                        borderRadius: frontimage?.path ? 10 : 0,
                        marginTop: 15,
                      }}
                      widthsize={165}
                      heightsize={100}
                      ImageborderRadius={frontimage?.path ? 0 : 0}
                      ViewBorderWidth={2}
                      ViewborderColor={colors.secondary}
                      innerAsset={frontimage == null ? true : false}
                      imageUri={
                        frontimage == null && user?.image_back == null
                          ? appIcons.certificate
                          : user?.image_back !== '' && frontimage == null
                          ? {uri: ASSETS_URL + user?.image_back}
                          : frontimage?.path
                      }
                    />
                  </ImagePicker>
                  <ImagePicker
                    onImageChange={(path, mime, type) => {
                      updateImageInGallery2(path, mime, type);
                    }}>
                    <ProfileImage
                      ViewStyle={{
                        marginTop: 0,
                        height: 105,
                        width: 170,
                        borderWidth: 1,
                        borderStyle: 'dashed',

                        backgroundColor: 'white',
                        borderRadius: 10,
                      }}
                      label
                      style={{
                        // tintColor: !Backimage?.path ? null : null,
                        borderRadius: Backimage?.path ? 10 : 0,
                        marginTop: 15,
                      }}
                      widthsize={165}
                      heightsize={100}
                      ImageborderRadius={Backimage?.path ? 0 : 0}
                      ViewBorderWidth={2}
                      ViewborderColor={colors.secondary}
                      innerAsset={Backimage == null ? true : false}
                      imageUri={
                        Backimage == null && user?.image_front == null
                          ? appIcons.certificate
                          : user?.image_front !== '' && Backimage == null
                          ? {uri: ASSETS_URL + user?.image_front}
                          : Backimage?.path
                      }
                    />
                  </ImagePicker>
                </View>
              </View>
              <ModalPopup
                congratulation
                modalActive
                value={'Success'}
                isVisible={showModal}
                desc={`Profile updated successfully.`}
                onPress={handleGoBack}
                handleClose={handleClose}
                onBackButtonPress={handleClose}
                onBackdropPress={handleClose}
                // onGoBack={() =>

                // }
              />
            </View>
            <CustomButton
              title="Save"
              onPress={this.onSubmit}
              buttonStyle={styles.btn}
              textStyle={styles.btntext}
            />
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}
function mapStateToProps({authReducer: {user}}) {
  return {
    user,
  };
}
const actions = {updateProfile};
export default connect(mapStateToProps, actions)(EditProfile);
