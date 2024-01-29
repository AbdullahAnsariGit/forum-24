import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {appIcons} from '../../../assets';
import {Alert, FlatList, TextInput, View} from 'react-native';
import CustomSingleList from '../../../components/CustomSingleList';
import {
  GoalDetails,
  ProfileInfo,
  goDetailsPops,
  topicsPosts,
} from '../../../utils/dummyData';
import styles from './styles';
import CustomButton from '../../../components/CustomButton';
import {colors, family, size} from '../../../utils';
import NavService from '../../../helpers/NavService';
import SocialSheetPopup from '../../../containers/Popup/socialSheetPopup/socialSheetPopup';
import ModalPopup from '../../../containers/Popup/modalPopup/modalPopup';
import CustomText from '../../../components/CustomText';
import {TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isModal: false,
    };
  }
  componentDidMount() {
    this?.getComments();
  }
  handleClosed = () => {
    this.setState({isModal: false});
  };
  handleSuccess = () => {
    this.setState({isModal: false});
    NavService?.navigate('BottomTabs', {screen: 'MyGoals'});
  };
  getComments = () => {
    const {id} = this.props.route.params;
    console.log("🚀 ~ file: Comments.js:42 ~ Comments ~ id:", id)
    const url = "http://localhost:3017/api/getallcomments";
    const token = this.props.user?.user_authentication;

    console.log("🚀 ~ file: Comments.js:45 ~ Comments ~ token:", token)

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = JSON.stringify({ post: id });
    fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        // this.getAllRequest();
        Toast.show({
          text1: "Request Accepted Successfully",
          type: "success",
          visibilityTime: 3000,
        });
        // Handle the data as needed
        // this?.setState({ allRequestApproval: data?.data });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  };
  render() {
    const {user}  = this.props;
    console.log("🚀 ~ file: Comments.js:81 ~ Comments ~ render ~ user:", user)
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    return (
      <AppBackground
        title={'Comments'}
        back
        resizeMode={'contain'}
        OnPressRight={() => {
          this.setState({isVisible: true});
        }}
        marginHorizontal={false}>
        <FlatList
          data={topicsPosts}
          style={{marginTop: 20}}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={({item}) => (
            <View style={{alignItems: 'flex-end'}}>
              <View
                style={{
                  backgroundColor: colors?.lightBlue,
                  borderRadius: 10,
                  gap: 2,
                  padding: 10,
                  width: '100%',
                }}>
                <CustomText
                  text={'Alex'}
                  size={size?.xxsmall}
                  color={colors?.lightGray}
                  font={family?.Poppins_SemiBold}
                />
                <CustomText
                  text={item.text}
                  size={size?.xxsmall}
                  color={colors?.lightGray}
                  font={family?.Poppins_Italic}
                />
              </View>
            </View>
          )}
        />
     
        <View style={{flexDirection: 'row', width: '100%', gap: 10}}>
          <TextInput
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 20,
              paddingHorizontal: 15,
            }}
            placeholder="Enter Comment"
          />
          <TouchableOpacity style={styles?.btn} onPress={() => {}}>
            <CustomText
              text="Post"
              color={colors?.white}
              font={family?.Poppins_Medium}
              size={size?.xsmall}
            />
          </TouchableOpacity>
        </View>
      </AppBackground>
    );
  }
}


function mapStateToProps({ authReducer: { user } }) {
  return {
    user,
  };
}
export default connect(mapStateToProps, null)(Comments);