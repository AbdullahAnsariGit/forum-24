import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import appStyles from '../screens/appStyles';
import { WP, colors, size } from '../utils';

const { width } = Dimensions.get('screen');

const GooglePlaceAutocomplete = ({
  callback,
  wrapperStyles,
  inputStyles,
  placeholder,
  iconColor,
  label,
  title,
  titleStyle,
  titleViewstyle,
  titleText,
  backgroundColor,
  rightIcon,
  index,
  image
}) => {
  const renderRightButton = () => {
    if (rightIcon) {
      return (
        <View
          activeOpacity={0.8}
          // onPress={() => onDelete(index)}
          style={{
            // top: getStatusBarHeight() + 1,
            position: 'absolute',
            // right: 10,
            width: 30,
            alignSelf: 'flex-end',
            marginLeft: '90%',
            alignItems: 'flex-end',
            height: 30,
            borderRadius: 30,
            backgroundColor: colors.white,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
           
          }}>
          <Image
            source={rightIcon}
            style={{
              width: 22,
              height: 22,
              tintColor:colors.secondary
              
            }}
          />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={[styles.geoLocationView, wrapperStyles]}>
      {/*       
      {title && (
          <View style={[{}, titleViewstyle]}>
            <Text style={{ color: 'black' }}>
              {titleText}
            </Text>
          </View>
        )} */}
      {/* {image && (
        <Image
          source={image}
          style={{
            width: 40,
            height: 40, // Adjust the height as per your requirements
            resizeMode: 'contain',
            tintColor: colors.primary,
            marginRight: 8, // Added marginRight to create space between image and input
          }}
        />
      )} */}
      <GooglePlacesAutocomplete
        enableHighAccuracyLocation
        fetchDetails
        disableScroll
        backgroundColor
        rightIcon
        enablePoweredByContainer={false}
        keepResultsAfterBlur={true}
        listViewDisplayed={false}
        // onDelete={() => this.deletePoint(index)} 

        placeholder={placeholder ? placeholder : 'Add Location'}
        placeholderTextColor={colors.white}
        onPress={(data, details = null) => {
          const { formatted_address, geometry } = details;
          callback(formatted_address, geometry, label);
        }}
        renderRightButton={renderRightButton} 
        styles={{
          textInput: {
            height: 50,
         
            backgroundColor: backgroundColor,
     
            color: colors.black,
            ...appStyles.font13,
            backgroundColor:colors.white,
            borderRadius:30,
            width:'100%'
          },
          description: { color: colors.black },
        }}
        textInputProps={{
          placeholderTextColor: colors.black,
          fontSize:size.normal
        }}
        query={{
          key: 'AIzaSyBmaS0B0qwokES4a_CiFNVkVJGkimXkNsk',
          language: 'en',
        }}
      />
  {image && (
        <Image
          source={image}
          style={{
            width: 24,
            height: 24, // Adjust the height as per your requirements
            resizeMode: 'contain',
            marginHorizontal:10
             // Added marginRight to create space between image and input
          }}
        />
      )}
    </View>
  );
};

export default GooglePlaceAutocomplete;

const styles = StyleSheet.create({
  geoLocationView: {
    width: WP('90%'),
    backgroundColor: colors.white,
    borderRadius: 30,
    // height: 55,
    ...appStyles.directionRow,
    ...appStyles.alignCenter,
    // borderWidth:1,
    // borderColor: colors.darkGray,
    justifyContent:"center",
    alignItems:'center',
    alignSelf:"center",
    marginVertical:10,
  },
  textInput: {
    flex: 1,
    height: 55,
    color: colors.white,
    borderRadius: 10,
    backgroundColor: colors.card,
    width: width,
  },

  locationIcon:{
    position:"absolute",
    width:18,
    height:18,
    right:10,
    top:18
  }
});
