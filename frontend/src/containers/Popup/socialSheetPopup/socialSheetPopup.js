import React, {Component} from 'react';
import {
  View,
  Pressable,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import CustomModal from '../../../components/CustomModal';
import CustomText from '../../../components/CustomText';
import CustomList from '../../../components/CustomList';
import Img from '../../../components/Img';
import CustomButton from '../../../components/CustomButton';
import {SearchBar} from '../../../components/CustomTextInput';
// import Checkbox from '../../../components/Checkbox';
import {appIcons, appImages} from '../../../assets';
import {colors, family, size} from '../../../utils';
import {
  category,
  check,
  cities,
  modalLikeList,
  states,
} from '../../../utils/dummyData';
import appStyles from '../../../screens/appStyles';
import {styles} from './styles';
import CustomIcon from '../../../components/CustomIcon';

const {height, width} = Dimensions.get('screen');
class SocialSheetPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
      replyName: '',
      comments: {},
      currentReply: [],
      activeIndex: null,
      userComment: modalLikeList,
      searchStates: states,
      searchCity: cities,
      searchCategory: category,
      isActive: false,
      activeChecks: {},
    };
    this.textInputRef = React.createRef();
  }
  componentDidMount() {}
  handleCheck = index => {
    this.setState(prevState => ({
      activeChecks: {
        ...prevState.activeChecks,
        [index]: !prevState.activeChecks[index],
      },
    }));
  };

  handleReplyButtonPress = (name, index) => {
    this.setState({currentReply: {name: name, id: index}});
    this.setState(prevState => ({
      activeIndex: index === prevState.activeIndex ? null : index,
    }));
    this.setState({replyName: name});
    this.textInputRef.current.focus();
  };

  handleSendButtonPress = () => {
    const {replyName, reply, activeIndex} = this.state;
    const item = modalLikeList.find((item, index) => {
      return index === activeIndex;
    });
    const newComment = modalLikeList;
    if (item && item.replies) {
      item.replies.push({
        profile: appImages.userFive,
        name: 'John Smith',
        time: '1 min ago',
        description: reply,
      });
    } else {
      newComment.push({
        id: 7,
        profile: appImages.userFive,
        name: 'John Smith',
        state: 'New York',
        time: '1 min ago',
        description: reply,
        like: false,
        heart: false,
        replies: [],
      });
    }
    this.setState({userComment: item ? item : newComment, reply: ''});
  };

  resetCheckboxes = () => {
    const {activeChecks} = this.state;
    const resetChecks = Object.keys(activeChecks).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    this.setState({activeChecks: resetChecks});
  };
  handleApplyAndReset = () => {
    const {handleApply} = this.props;
    this.resetCheckboxes();
    if (handleApply) handleApply();
    Keyboard.dismiss();
  };

  handleCloseAndReset = () => {
    const {handleClose} = this.props;
    this.resetCheckboxes();
    if (handleClose) handleClose();
  };
  handleApplyAndResetHome = () => {
    // const { handleApply } = this.props;
    this.resetCheckboxes();
    // if (handleApply) handleApply();
    Keyboard.dismiss();
  };

  handleCloseAndResetHome = () => {
    const {handleClose} = this.props;
    this.resetCheckboxes();
    if (handleClose) handleClose();
  };
  render() {
    const {
      togglePopup,
      isVisible,
      onBackButtonPress,
      onBackdropPress,

      data,
      onPress,
    } = this.props;

    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    return (
      <CustomModal
        style={styles.modal}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        visible={isVisible}
        // animationIn="slideInUp"
        // animationOut="slideOutDown"
        animationIn="slideInRight"
        animationOut="slideOutLeft"
        togglePopup={togglePopup}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles?.container}>
            <View style={styles?.header}>
              <View style={styles?.topIcon} />
            </View>
            {data?.map(_item => {
              return (
                <>
                  <TouchableOpacity
                    style={styles?.buttonWrapper}
                    onPress={() => onPress(_item?.id)}>
                    <CustomIcon src={_item?.icon} size={size?.large} />
                    <CustomText
                      text={_item?.name}
                      color={colors?.secondary}
                      font={family?.Poppins_Medium}
                      size={size?.small}
                    />
                  </TouchableOpacity>
                  {_item?.id == 0 && ItemSeparatorComponent()}
                  {_item?.id == 2 && ItemSeparatorComponent()}
                </>
              );
            })}
          </View>
        </KeyboardAvoidingView>
      </CustomModal>
    );
  }
}

export default SocialSheetPopup;
