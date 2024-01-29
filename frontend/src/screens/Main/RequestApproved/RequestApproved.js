import React, { Component } from "react";
import AppBackground from "../../../components/AppBackground";
import { appImages } from "../../../assets";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";
import CustomText from "../../../components/CustomText";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, family, size } from "../../../utils";
import NavService from "../../../helpers/NavService";
import {
  _Challenges,
  _Home,
  _dailyGoal,
  homeCards,
  postData,
} from "../../../utils/dummyData";
import CustomList from "../../../components/CustomList";
import { connect } from "react-redux";
import { ASSETS_URL } from "../../../config/WebService";
import CustomIcon from "../../../components/CustomIcon";
import Shadows from "../../../helpers/Shadows";
import ApiSauce from "../../../services/ApiSauce";
import axios from "axios";
import Utils from "../../../utils/Utils";
import Toast from "react-native-toast-message";
import { retry } from "redux-saga/effects";
const { height, width } = Dimensions.get("screen");
export class RequestApproved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      allRequestApproval: [],
    };
  }
  componentDidMount() {
    this?.getAllRequest();
  }
  ItemSeparatorComponent = () => {
    return <View style={{ height: 10 }} />;
  };
  handleClose = () => {
    this?.setState({ isVisible: false });
  };
  getAllRequest = () => {
    const url = "http://localhost:3017/api/get-request";
    const token = this?.props?.user?.user_authentication;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        // Handle the data as needed
        this?.setState({ allRequestApproval: data?.data });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  };

  acceptRequest = (id) => {
    console.log("🚀 ~ file: RequestApproved.js:73 ~ RequestApproved ~ id:", id);
    const url = "http://localhost:3017/api/accept-request";
    const token = this?.props?.user?.user_authentication;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = JSON.stringify({ _id: id });
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
        this.getAllRequest();
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
    const { isVisible } = this?.state;
    const { user } = this?.props;
    console.log("useeerrrr", user);

    return (
      <AppBackground
        homePress={() => NavService.navigate("MyProfile")}
        back
        title={"Request Approval"}
        homeSubtitle={`${user?.first_name} ${user?.last_name}`}
        marginHorizontal={false}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ gap: 15 }}>
            <View style={styles.ViewText}>
              {/* <CustomButton title="View Details" onPress={()=> NavService?.navigate('ChallengesParticipate')} /> */}

              <CustomText
                text="Requests"
                style={styles.text1}
                font={family?.Poppins_Medium}
                size={size?.normal}
              />
              <TouchableOpacity onPress={() => NavService.navigate("MyGoals")}>
                {/* <CustomText text="View Details" style={styles.ViewDetails} /> */}
              </TouchableOpacity>
            </View>
            <FlatList
              bounces={false}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: width * 0.32,
              }}
              ListEmptyComponent={() => {
                return (
                  <View
                    style={{ justifyContent: "center", alignItems: "left" }}
                  >
                    <CustomText
                      text="No Request Found.."
                      font={family?.Poppins_Italic}
                      color={colors?.lightGray}
                      size={size?.xxsmall}
                    />
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(_index) => _index.toString()}
              data={this?.state?.allRequestApproval}
              ItemSeparatorComponent={this?.ItemSeparatorComponent}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: colors?.lightBlue,
                    justifyContent: "space-between",
                    padding: 10,
                    borderRadius: 10,
                    alignItems: "center",
                    ...Shadows?.shadow3,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: colors?.secondary,
                        height: 50,
                        width: 50,
                        borderRadius: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CustomText
                        text={item?.name?.charAt().toUpperCase()}
                        font={family?.Poppins_Regular}
                        color={colors?.primary}
                        size={size.h4}
                      />
                    </View>
                    <View>
                      <CustomText
                        text={item?.name}
                        font={family?.Poppins_Medium}
                        color={colors?.secondary}
                        size={size.small}
                      />
                      <CustomText
                        text={item?.role_type}
                        font={family?.Poppins_Italic}
                        color={colors?.primary}
                        size={size.xxsmall}
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors?.secondary,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                      borderRadius: 10,
                    }}
                    onPress={() => this.acceptRequest(item?._id)}
                  >
                    <CustomText
                      text="Accept"
                      font={family?.Poppins_Regular}
                      color={colors?.white}
                      size={size.xxsmall}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
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
export default connect(mapStateToProps, null)(RequestApproved);
