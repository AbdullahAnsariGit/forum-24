import React, { Component } from "react";
import AppBackground from "../../../components/AppBackground";
import { Dimensions, FlatList, Keyboard, ScrollView, Text, View } from "react-native";
import CustomText from "../../../components/CustomText";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../../utils";
import NavService from "../../../helpers/NavService";
import { _Challenges, _Home, _dailyGoal } from "../../../utils/dummyData";
import CustomList from "../../../components/CustomList";
import { LineChart } from "react-native-chart-kit";
import ListComponent from "../../../components/ListComponent";
import ModalPopup from "../../../containers/Popup/modalPopup/modalPopup";
import CustomCard from "../../../components/CustomCard";
import { connect } from "react-redux";
import { ASSETS_URL } from "../../../config/WebService";
import CustomTextInput from "../../../components/CustomTextInput";
import { appIcons } from "../../../assets";
import Img from "../../../components/Img";
import CustomButton from "../../../components/CustomButton";
import Toast from "react-native-toast-message";
import { loaderStart, loaderStop } from "../../../redux/actions/appAction";
const { height, width } = Dimensions.get("screen");
export class UpdatePost extends Component {
  constructor(props) {
    super(props);
    const { post, postType } = this.props.route.params;
    console.log(
      "🚀 ~ file: UpdatePost.js:26 ~ UpdatePost ~ constructor ~ post:",
      post
    );

    this.state = {
      isVisible: false,
      allPost: [],
      title: post?.title != "" ? post?.title : "",
      Description: post?.description != "" ? post?.description : "",
      target: "",
    };
  }
  componentDidMount() {
  }
  ItemSeparatorComponent = () => {
    return <View style={{ height: 10 }} />;
  };
  handleClose = () => {
    this?.setState({ isVisible: false });
  };

  onSubmit = () => {
    const { title, Description, date, target } = this.state;
    const { post, postType } = this.props.route.params;

    Keyboard.dismiss();

    if (title == "") {
      Toast.show({
        text1: "Title field can`t be empty",
        type: "error",
        visibilityTime: 3000,
      });
    } else if (Description == "") {
      Toast.show({
        text1: "Description field can`t be empty",
        type: "error",
        visibilityTime: 3000,
      });
    } else {
      Keyboard.dismiss();

      let payload = {
        title,
        description: Description
      }

      if (postType) {
        this.createPost(payload)
      } else {
        this.updatePost()
      }
    }
  };
  updatePost = () => {
    const url = "http://localhost:3017/api/edit-post";
    const { post } = this.props.route.params;

    const token = this.props.user?.user_authentication;
    console.log("🚀 ~ file: Home.js:42 ~ Home ~ token:", token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = JSON.stringify({ _id: post?._id, title: this.state.title, description: this.state.Description, });

    fetch(url, {
      method: "POST",
      headers: headers,
      body: body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        Keyboard.dismiss();
        Toast.show({
          text1: "Post Updated Successfully.",
          type: "success",
          visibilityTime: 3000,
        });
        NavService.navigate('Home')
        // Handle the data as needed
        // this?.setState({ allPost: data?.data });
      })
      .catch((error) => {
        console.error("Error:", error);
        Keyboard.dismiss()

        // Handle errors
      });
  };
  createPost = (payload) => {
    this.props.loaderStart();

    const url = "http://localhost:3017/api/add-post";
    const token = this.props.user?.user_authentication;
    console.log("🚀 ~ file: Home.js:42 ~ Home ~ token:", token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    };

    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        Keyboard.dismiss();

        this.props.loaderStop();
        Toast.show({
          text1: "Post Created Successfully.",
          type: "success",
          visibilityTime: 3000,
        });
        NavService.navigate("BottomTabs", 'Home')

      })
      .catch((error) => {
        this.props.loaderStop();

        console.error("Error:", error);
      }).finally(() => {
        this.props.loaderStop();

      });
  };

  render() {
    const { user } = this?.props;
    const { isVisible, title, Description, date, selectedDate, target } =
      this.state;
    const { post, postType } = this.props.route.params;
    return (
      <AppBackground
        homePress={() => NavService.navigate("MyProfile")}
        back
        title={postType ? postType : "UpdatePost"}
        marginHorizontal={false}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ gap: 15, }}>
            <View style={styles.ViewText}>

              <TouchableOpacity onPress={() => NavService.navigate("MyGoals")}>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, marginTop: 20, gap: 15 }}>
              <CustomTextInput
                color={colors.black}
                placeholder={"Title"}
                placeholderColor={colors.lightGray}
                value={title}
                keyboardType={"email-address"}
                onChangeText={(value) => this.setState({ title: value })}
                containerStyle={{
                  borderRadius: 30,
                  alignItems: "flex-start",
                  paddingTop: 10,
                }}
              />
              <CustomTextInput
                textAlignVertical="top"
                multiline
                color={colors.black}
                placeholder={"Description..."}
                value={Description}
                placeholderColor={colors.lightGray}
                borderRadius={30}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={"email-address"}
                onChangeText={(value) => this.setState({ Description: value })}
                TextInputStyling={{ padding: 15, height: 300 }}
                containerStyle={{
                  borderRadius: 30,
                  height: 200,
                  alignItems: "flex-start",
                  paddingTop: 10,
                }}
              />
            </View>
            <View>
              <CustomButton
                title="Create"
                onPress={this.onSubmit}
                buttonStyle={styles.btn}
                textStyle={styles.btntext}
              />
            </View>
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

function mapStateToProps({ authReducer: { user } }) {
  return {
    user,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    loaderStart: () => dispatch(loaderStart()),
    loaderStop: () => dispatch(loaderStop()),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
