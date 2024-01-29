import React, {Component} from 'react';
import {
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
// import LottieView from 'lottie-react-native';
// import CustomModal from '../../../components/CustomModal';
// import CustomText from '../../../components/CustomText';
// import CustomCard from '../../../components/CustomCard';
// import CustomButton from '../../../components/CustomButton';
// import CustomIcon from '../../../components/CustomIcon';
// import {appIcons, appImages} from '../../../assets';
// import {colors} from '../../../utils';
// import Modal from 'react-native-modal';

import {
  loginUser,
  setUserType,
  logoutUser,
} from '../../../redux/actions/authAction';
import {business} from '../../../utils/dummyData';
import appStyles from '../../../screens/appStyles';
import {styles} from './styles';
import NavService from '../../../helpers/NavService';
import {connect} from 'react-redux';
import Img from '../../../components/Img';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import CustomModal from '../../../components/CustomModal';
import {colors} from '../../../utils';
import {appIcons} from '../../../assets';
import LottieView from 'lottie-react-native';
import CustomIcon from '../../../components/CustomIcon';

class ModalPopup extends Component {
  state = {
    isVisible: false,
    showModal: false,
  };

  render() {
    const {
      togglePopup,
      isVisible,
      onBackButtonPress,
      onBackdropPress,
      modalActive,
      title,
      onYesPress,
      onNoPress,
      desc,
      sucessText,
      unsuccessText,
      congratulation,
      value,
      onGoBack,
    } = this.props;
    const user = this.props.user;
    console.log(user, 'userrrr');

    const renderView = () => {
      if (value == 'Confirmation') {
        return (
          <View
            style={[
              appStyles.gap_10,
              appStyles.alignCenter,
              appStyles.paddingVertical_1,
              {borderRadius: 10},
            ]}>
            <CustomText style={styles.desc} text={desc} />
            <View
              style={[
                appStyles.directionRow,
                {...appStyles.paddingVertical_1},
              ]}>
              <CustomButton
                onPress={onYesPress}
                title={sucessText}
                buttonStyle={[styles.press, {backgroundColor: colors.primary}]}
                textStyle={[styles.btnstext, {color: colors.white}]}
              />
              <CustomButton
                onPress={onNoPress}
                title={unsuccessText}
                buttonStyle={[styles.press2, {backgroundColor: colors.white}]}
                textStyle={[styles.btnstext2, {color: colors.black}]}
              />
            </View>
          </View>
        );
      } else if (value == 'Success') {
        return (
          <View
            style={[
              appStyles.gap_10,
              appStyles.alignCenter,
              appStyles.paddingVertical_3,
            ]}>
            <View style={styles.lottieContainer}>
              {congratulation ? (
                <LottieView
                  // ref={animationRef}
                  source={require('./animation.json')}
                  autoPlay
                  loop
                  style={{height: 100, width: 100}}
                />
              ) : (
                <CustomIcon src={appIcons?.success} size={134} />
              )}
              <CustomText style={styles.title} text={title} />
              <CustomText style={styles.desc} text={desc} />
              <CustomButton
                onPress={onGoBack}
                title={'Go Back'}
                buttonStyle={styles.btnStyles}
                textStyle={styles.btnTextStyles}
              />
            </View>
          </View>
        );
      }
    };
    return (
      <CustomModal
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        visible={isVisible}
        animationIn="slideInRight"
        animationOut="slideOutLeft"
        togglePopup={togglePopup}
        value={value}>
        <View style={[styles.main]}>{modalActive && renderView()}</View>
      </CustomModal>
    );
  }
}

function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {loginUser, logoutUser};
export default connect(mapStateToProps, actions)(ModalPopup);
