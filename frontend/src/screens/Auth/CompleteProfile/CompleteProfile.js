import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import PhoneInput from 'react-native-phone-number-input';
// import DocumentPicker from 'react-native-document-picker';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import NavService from '../../../helpers/NavService';
import {colors, size} from '../../../utils';
import {appLogos, appImages, appIcons} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
import Shadows from '../../../helpers/Shadows';
import CustomText from '../../../components/CustomText';
import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';
import appStyles from '../../appStyles';
import Img from '../../../components/Img';
import {completeProfile} from '../../../redux/actions/authAction';

class CompleteProfile extends Component {
  state = {
    Firstname: '',
    DesiredName: '',
    phoneNumber: '',
    profileImage: null,
    Backimage: null,
    frontimage: null,
    pickedDocument: null,
    latitude: '',
    longitude: '',
    location: '',
    address: '',
    phoneNumber: '',
    location: '',
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
    console.log('adressssincompleteprofile' , address);
    console.log('Locationincompleteprofile' , location);

    if (Firstname == '') {
      Toast.show({
        text1: 'First Name field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } 
    else if (DesiredName == '') {
      Toast.show({
        text1: 'Desired Name field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (address == '') {
      Toast.show({
        text1: 'Address field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (frontimage == null) {
      Toast.show({
        text1: 'Please upload front image',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (Backimage == null) {
      Toast.show({
        text1: 'Please upload back image',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    // else if (location == '') {
    //   Toast.show({
    //     text1: 'location field can`t be empty',
    //     type: 'error',
    //     visibilityTime: 3000,
    //   });
    // }
    else {
      Keyboard.dismiss();
      let payload = new FormData();
      payload.append('first_name', Firstname);
      payload.append('last_name', DesiredName);
      payload.append('push_notification', '1');
      payload.append('location', address);
      payload.append('latitude', location?.lat);
      payload.append('longitude', location?.lng);
      // payload.append('phone_number', phoneNumbers);
      if (profileImage !== null) {
        payload.append('profile_image', {
          uri: profileImage?.path,
          name: `Profile${Date.now()}.${profileImage?.mime?.slice(
            profileImage?.mime?.lastIndexOf('/') + 1,
          )}`,
          type: profileImage?.mime,
        });
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
      if (Backimage !== null) {
        payload.append('image_back', {
          uri: Backimage?.path,
          name: `frontimage${Date.now()}.${Backimage?.mime?.slice(
            Backimage?.mime?.lastIndexOf('/') + 1,
          )}`,
          type: Backimage?.mime,
        });
      }

      console.log('payloadpayloadofcompleteProfile', payload);
      this.props.completeProfile(payload);
    }
  };
  handleBackButtonClick() {
    NavService.replace('Onboarding');
  }
  componentWillUnmount() {
    // this?.handleBackButtonClick();
  }
  // callback = (address, geometry) => {
  //   if (address) {
  //     this.setState({
  //       latitude: geometry?.location.lat,
  //       location: address,
  //       longitude: geometry?.location.lng,
  //     });
  //   } else {
  //     this.setState({location: ''});
  //   }
  // };
  render() {
    const {
      Firstname,
      DesiredName,
      Backimage,
      frontimage,
      profileImage,
      pickedDocument,
      address,
      latitude,
      longitude,
      phoneNumber,
      location,
    } = this.state;
    const {phoneNumbers, mail} = this?.props?.route?.params;
    console.log('address', address);
    // console.log(mail, 'mail');

    const updateImageInGallery = (path, mime, type) => {
      this.setState({
        profileImage: {path, mime, type},
      });
    };
    const updateImageInGallery1 = (path, mime, type) => {
      this.setState({frontimage: {path, mime, type}});
    };
    const updateImageInGallery2 = (path, mime, type) => {
      this.setState({Backimage: {path, mime, type}});
    };
    // const saveAddress = (address, geometry) => {
    //   console.log('addressaddressaddress', address);
    //   console.log('geometrygeometry', geometry);
    //   this.setState({location: address, address: geometry?.location});
    // };
    const saveAddress = (address, geometry, data) => {
      // console.log('data?.termsdata?.terms', data?.terms);
      this.setState({address: address, location: geometry?.location});
    };
    return (
      <CustomBackground
        showLogo={false}
        backgroundImage
        titleText={'Create Profile'}
        onBack={() => this.props.navigation.goBack()}>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 30,
            gap: 20,
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
                  profileImage !== null ? profileImage?.path : appIcons.camera
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
              Lineiconcolor={colors.gray}
              Iconcolor={colors.secondary}
              textInputStyles={styles?.textInputStyles}
              placeholder={'Desired Name'}
              value={DesiredName}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({DesiredName: value})}
              containerStyle={styles.emailinput}
            />
            {mail ? (
              <CustomTextInput
                Lineiconcolor={colors.gray}
                Iconcolor={colors.secondary}
                placeholder={'Email'}
                editable={false}
                value={
                  mail.length <= 23
                    ? mail
                    : `${mail.toString().slice(0, 24)}...`
                }
                rightImage={appIcons.verify}
                tintColor={colors.secondary}
                keyboardType={'email-address'}
                rightimagetext={'Verified'}
                rightimagetextstyle={{color: 'red'}}
                onChangeText={value => this.setState({mail: value})}
                containerStyle={[
                  styles.emailinput,
                  {borderWidth: 1.5, borderColor: colors.secondary},
                ]}
                textInputStyles={
                  {
                    // width: 240,
                  }
                }
              />
            ) : (
              ''
              // <View style={[appStyles.directionRow]}>
              //   <View>
              //     <PhoneInput
              //       ref={this.phoneInput}
              //       codeTextStyle={{color: colors.gray}}
              //       textInputProps={{
              //         maxLength: 13,
              //         color: 'black',
              //         right: 10,
              //         editable: false,
              //         placeholderTextColor: colors.gray,
              //       }}
              //       disabled={true}
              //       defaultValue={phoneNumbers ? phoneNumbers : phoneNumber}
              //       defaultCode="US"
              //       disableArrowIcon={true}
              //       layout="second"
              //       containerStyle={styles.phoneContainer}
              //       textContainerStyle={styles.textContainerPhone}
              //       textInputStyle={{
              //         padding: 0,
              //         fontSize: size.small,
              //       }}
              //       textStyle={{fontSize: 10, color: colors.lightGray}}
              //       countryPickerButtonStyle={[styles.countryPickerButtonStyle]}
              //       onChangeText={text => {
              //         this.setState({phoneNumber: text});
              //       }}
              //       onChangeFormattedText={text => {
              //         this.setState({formattedValue: text});
              //       }}
              //       withDarkTheme
              //       autoFocus
              //     />
              //     <Img
              //       tintColor={colors.gray}
              //       local
              //       src={appIcons.line}
              //       resizeMode={'cover'}
              //       style={{
              //         height: 40,
              //         width: 0.75,
              //         left: 55,
              //         top: 8,
              //         position: 'absolute',
              //       }}
              //     />
              //   </View>
              //   <View
              //     style={{
              //       position: 'absolute',
              //       // bottom: 0,
              //       height: 55,
              //       alignItems: 'center',
              //       flexDirection: 'row',
              //       right: 10,
              //     }}>
              //     <Img
              //       tintColor={colors.secondary}
              //       local
              //       src={appIcons.verify}
              //       resizeMode={'contain'}
              //       style={{height: 20, width: 20, right: 5}}
              //     />
              //     <CustomText
              //       text="Verified"
              //       size={size?.xxsmall}
              //       color={colors.secondary}
              //       style={{
              //         marginRight: 10,
              //         ...appStyles.family_Poppins_SemiBold,
              //       }}
              //     />
              //   </View>
              // </View>
            )}
            {/* <GooglePlaceAutocomplete
              // addressText={location}
              handleAddressText={location => {
                this.setState({location: '', latitude: '', longitude: ''});
              }}
              placeholder={address ? address : 'Location'}
              rightIcon={appIcons.location}
              CheckIn={true}
              // val={location}
              isBorderShow
              callback={this.callback}
            />  */}
            {/* <GooglePlaceAutocomplete
              placeholder={'Address'}
              addressText={location}
              rightIcon={appIcons.location}
              CheckIn={true}
              backgroundColor={'transparent'}
              isBorderShow
              callback={saveAddress}
            /> */}
            {/* <GooglePlaceAutocomplete
              placeholdercolor={colors.white}
              // placeholder={
              //   // edit == 'edit' ? paramItem?.venue_address : 'Location'
              // }
              callback={saveAddress}
              imageStyle={{
                backgroundColor: colors.secondary,
              }}
              contStyles={{
                backgroundColor: colors.secondary,
              }}
              wrapperStyles={styles.wrapperstyles}
            /> */}

            <GooglePlaceAutocomplete
              addressText={location}
              placeholder={'Address'}
              rightIcon={appIcons.location}
              CheckIn={true}
              backgroundColor={'transparent'}
              isBorderShow
              callback={saveAddress}
              // wrapperStyles={styles.wrapmper}
              // contStyles={styles.contStyles}
              rightImg={false}
              locationNew
            />

            {/* <GooglePlaceAutocomplete
              // addressText={location}
              handleAddressText={location => {
                this.setState({location: '', latitude: '', longitude: ''});
              }}
              placeholder={address ? address : 'Location'}
              rightIcon={appIcons.location}
              CheckIn={true}
              // val={location}
              isBorderShow
              callback={this.callback}
            /> */}
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
                      justifyContent: 'center',
                      marginTop: 0,
                      height: 102,
                      width: 160,
                      backgroundColor: colors.white,
                      borderRadius: 10,
                    }}
                    label
                    style={{
                      tintColor: frontimage?.path ? null : colors.primary,
                      borderRadius: frontimage?.path ? 10 : 0,
                      marginTop: 15,
                    }}
                    widthsize={frontimage?.path ? 160 : 20}
                    heightsize={frontimage?.path ? 102 : 20}
                    ImageborderRadius={frontimage?.path ? 0 : 0}
                    ViewBorderWidth={2}
                    ViewborderColor={colors.secondary}
                    name={frontimage?.path ? '' : 'Upload Front Image'}
                    innerAsset={frontimage == null ? true : false}
                    imageUri={
                      frontimage !== null ? frontimage?.path : appIcons.upload
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
                      height: 102,
                      width: 160,
                      backgroundColor: colors.white,
                      borderRadius: 10,
                    }}
                    label
                    style={{
                      tintColor: Backimage?.path ? null : colors.primary,
                      borderRadius: Backimage?.path ? 10 : 0,
                      marginTop: 15,
                    }}
                    widthsize={Backimage?.path ? 160 : 20}
                    heightsize={Backimage?.path ? 102 : 20}
                    ImageborderRadius={Backimage?.path ? 0 : 0}
                    ViewBorderWidth={2}
                    ViewborderColor={colors.secondary}
                    name={Backimage?.path ? '' : 'Upload Back Image'}
                    innerAsset={Backimage == null ? true : false}
                    imageUri={
                      Backimage !== null ? Backimage?.path : appIcons.upload
                    }
                  />
                </ImagePicker>
              </View>

              {/* <Button title="Pick a Document" onPress={this.pickDocument} />
              {pickedDocument && (
                <View>
                  <Text>Document Name: {pickedDocument.name}</Text>
                  <Text>Document Type: {pickedDocument.type}</Text>
                  <Text>Document Size: {pickedDocument.size} bytes</Text>
                </View>
              )} */}
            </View>
          </View>
          <CustomButton
            title="Continue"
            onPress={this.onSubmit}
            buttonStyle={{borderRadius: 10, bottom: 10}}
            textStyle={{fontSize: 15}}
          />
        </View>
      </CustomBackground>
    );
  }
}

const actions = {loginUser, completeProfile};
export default connect(null, actions)(CompleteProfile);
