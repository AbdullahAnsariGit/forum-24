import React, { Component } from "react";
import AppBackground from "../../../components/AppBackground";
import {
  Dimensions,
  FlatList,
  Keyboard,
  ScrollView,
  Text,
  View,
} from "react-native";
import CustomText from "../../../components/CustomText";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, family, size } from "../../../utils";
import NavService from "../../../helpers/NavService";
import {
  _Challenges,
  _Home,
  _dailyGoal,
  topicsPosts,
} from "../../../utils/dummyData";
import CustomList from "../../../components/CustomList";
import { LineChart } from "react-native-chart-kit";
import ListComponent from "../../../components/ListComponent";
import ModalPopup from "../../../containers/Popup/modalPopup/modalPopup";
import CustomCard from "../../../components/CustomCard";
import { connect } from "react-redux";
import { ASSETS_URL } from "../../../config/WebService";
import { TextInput } from "react-native";
import Toast from "react-native-toast-message";
const { height, width } = Dimensions.get("screen");
export class Commentss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isModal: false,
      allComments: [],
      comments: "",
    };
  }
  componentDidMount() {
    this.getComments();
  }
  handleClosed = () => {
    this.setState({ isModal: false });
  };
  handleSuccess = () => {
    this.setState({ isModal: false });
    NavService?.navigate("BottomTabs", { screen: "MyGoals" });
  };
  getComments = () => {
    const { id } = this.props.route.params;
    console.log("🚀 ~ file: Comments.js:42 ~ Comments ~ id:", id);
    const url = "http://localhost:3017/api/getallcomments";
    const token = this.props.user?.user_authentication;

    console.log("🚀 ~ file: Comments.js:45 ~ Comments ~ token:", token);

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
        this.setState({ allComments: data?.data });
        // this.getComments();
        // Toast.show({
        //   text1: "Request Accepted Successfully",
        //   type: "success",
        //   visibilityTime: 3000,
        // });
        // Handle the data as needed
        // this?.setState({ allRequestApproval: data?.data });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  };
  postComments = () => {
    const { id } = this.props.route.params;
    console.log("🚀 ~ file: Comments.js:42 ~ Comments ~ id:", id);
    const url = "http://localhost:3017/api/addcomments";
    const token = this.props.user?.user_authentication;

    console.log("🚀 ~ file: Comments.js:45 ~ Comments ~ token:", token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = JSON.stringify({ postid: id, comment: this.state.comments });
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
        this.setState({ comments: "" });
        Keyboard.dismiss();
        this.getComments();
        Toast.show({
          text1: "Comments Added Successfully",
          type: "success",
          visibilityTime: 3000,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  };
  render() {
    const { allComments } = this.state;
    const { user } = this.props;
    console.log("🚀 ~ file: Comments.js:81 ~ Comments ~ render ~ user:", user);
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    console.log("allComments", allComments);
    return (
      <AppBackground
        title={"Comments"}
        back
        resizeMode={"contain"}
        OnPressRight={() => {
          this.setState({ isVisible: true });
        }}
        marginHorizontal={false}
      >
        <FlatList
          data={allComments}
          style={{ marginTop: 20 }}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={({ item }) => {
            console.log("ddddd", item);
            
            return (
              <View style={{ alignItems: "flex-end" }}>
                <View
                  style={{
                    backgroundColor: colors?.lightBlue,
                    borderRadius: 10,
                    gap: 2,
                    padding: 10,
                    width: "100%",
                  }}
                >
                  <CustomText
                    text={item?.username}
                    size={size?.xxsmall}
                    color={colors?.lightGray}
                    font={family?.Poppins_SemiBold}
                  />
                  <CustomText
                    text={item.comments}
                    size={size?.xxsmall}
                    color={colors?.black}
                    font={family?.Poppins_Italic}
                  />
                </View>
              </View>
            );
          }}
        />

        <View style={{ flexDirection: "row", width: "100%", gap: 10 }}>
          <TextInput
            value={this.state.comments}
            style={{
              backgroundColor: "white",
              flex: 1,
              borderRadius: 20,
              paddingHorizontal: 15,
              height: 50,
            }}
            onChangeText={(comments) => this.setState({ comments })}
            placeholder="Enter Comment"
          />
          <TouchableOpacity
            style={styles?.btn}
            onPress={() => {
              this.postComments();
            }}
          >
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
export default connect(mapStateToProps, null)(Commentss);
