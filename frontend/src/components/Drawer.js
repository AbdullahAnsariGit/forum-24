import React, { Component } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Dimensions,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { colors, family, size } from "../utils";
import NavService from "../helpers/NavService";
import { appIcons, appImages, appLogos } from "../assets";
import ProfileImage from "../components/ProfileImage";
import { logoutUser, loginCurrentUser } from "../redux/actions/authAction";
import CustomText from "./CustomText";
import ModalPopup from "../containers/Popup/modalPopup/modalPopup";
import { logoutCurrentUser } from "../redux/actions/authAction";
import Img from "./Img";
const { width, height } = Dimensions?.get("screen");
const menuItems = [
  {
    icon: appIcons.myprofile,
    title: "My Profile",
    nav: "MyProfile",
  },
  {
    icon: appIcons.logout,
    title: "Logout",
    nav: "logout",
  },
];
const menuItemsModerator = [
  {
    icon: appIcons.myprofile,
    title: "My Profile",
    nav: "MyProfile",
  },
  {
    icon: appIcons.user,
    title: "Users",
    nav: "User",
  },
  {
    icon: appIcons.postAttachment,
    title: "Post",
    nav: "Home",
  },
  {
    icon: appIcons.logout,
    title: "Logout",
    nav: "logout",
  },
];
const menuItemsAdmin = [
  {
    icon: appIcons.myprofile,
    title: "My Profile",
    nav: "MyProfile",
  },
  {
    icon: appIcons.checkRight,
    title: "Request Approval",
    nav: "RequestApproved",
  },
  {
    icon: appIcons.user,
    title: "Users",
    nav: "User",
  },
  {
    icon: appIcons.postAttachment,
    title: "Post",
    nav: "Home",
  },
  {
    icon: appIcons.logout,
    title: "Logout",
    nav: "logout",
  },
];

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      profileImage: null,
    };
  }
  handleClose = () => {
    this?.setState({ isVisible: false });
  };
  handleLogout = () => {
    this.props.logoutCurrentUser();
    this.props.logoutUser();
  };

  render() {
    const { profileImage, isVisible } = this.state;
    const { user } = this.props;
    console.log(
      "🚀 ~ file: Drawer.js:76 ~ Drawer ~ render ~ user admin:",
      user
    );
    const RenderItem = ({ item, index }) => {
      const { title, icon, nav } = item;
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (title === "Logout") {
              // this.props.logoutUser();
              NavService?.closeDrawer();
              this?.setState({ isVisible: true });
            } else if (title === "Post") {
              NavService?.closeDrawer();
            } else {
              NavService?.closeDrawer();
              this.props.navigation.navigate(nav);
            }
          }}
          style={{
            width: item?.title == "Logout" ? "70%" : "100%",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: height / 90,
            paddingHorizontal: width / 12,
            backgroundColor: item?.title == "Logout" ? colors?.primary : null,
            paddingLeft: item?.title == "Logout" ? 55 : null,
            gap: 10,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View
            style={{
              paddingVertical: 10,
              borderRadius: 7,
              marginBottom: 5,
            }}
          >
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                tintColor:
                  item?.title == "Logout"
                    ? colors.white
                    : item?.title == "Help & Feedback"
                      ? null
                      : colors.primary,
              }}
            />
          </View>

          <CustomText
            style={{ marginTop: -5 }}
            text={title}
            font={family?.Poppins_Medium}
            size={size?.xsmall}
            color={colors?.white}
          />
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: colors.secondary,
          alignItems: "center",
          paddingTop: getStatusBarHeight(),
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          borderRightColor: colors?.white,
          borderRightWidth: 2,
        }}
      >
        <TouchableOpacity
          onPress={() => NavService?.closeDrawer()}
          style={{ height: 20, width: 20, alignSelf: "flex-end", right: 20 }}
        >
          <Img
            local
            resizeMode={"contain"}
            src={appIcons.drawerback}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            paddingBottom: 30,
            gap: 5,
            paddingHorizontal: 20,
            position: "relative",
            top: 20,
            borderBottomWidth: 1.5,
            borderBottomColor: colors?.white,
          }}
        >
          <View
            style={{
              height: 120,
              width: 120,

              borderRadius: 100,
              alignItems: "center",
              borderWidth: 2,
              borderStyle: "dashed",
              borderColor: colors.primary,
              justifyContent: "center",
            }}
          >
            <ProfileImage
              ViewStyle={{
                justifyContent: "center",
                marginTop: 0,
                borderColor: null,
                borderRadius: 140,
              }}
              widthsize={100}
              heightsize={100}
              ImageborderRadius={110}
              // ViewBorderWidth={0}
              ViewborderColor={colors.secondary}
              innerAsset={profileImage == null ? true : false}
              imageUri={appIcons?.userPlaceholder}
              label
              name={user?.name}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              gap: 5,
            }}
          >
            <CustomText
              text={user?.name}
              font={family?.Poppins_Medium}
              size={size?.small}
              color={colors?.white}
            />
            <CustomText
              style={{ marginTop: -4 }}
              text={user?.email}
              font={family?.Poppins_Medium}
              size={size?.xsmall}
              color={colors?.white}
            />
          </View>
        </View>
        <View style={{ flex: 1, marginTop: height / 20, width: "100%" }}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={
              user?.role_type == "user"
                ? menuItems
                : user.role_type == "moderator"
                  ? menuItemsModerator
                  : menuItemsAdmin
            }
            style={{
              height: "100%",
            }}
            renderItem={(props) => <RenderItem {...props} />}
          />
        </View>
        <ModalPopup
          modalActive
          value={"Confirmation"}
          isVisible={isVisible}
          desc="Are you sure you want to logout?"
          sucessText="Yes, Logout"
          unsuccessText="No"
          title={"Logout"}
          handleClose={this?.handleClose}
          onBackButtonPress={this?.handleClose}
          onBackdropPress={this?.handleClose}
          onYesPress={this?.handleLogout}
          onNoPress={this?.handleClose}
        />
      </View>
    );
  }
}

function mapStateToProps({ authReducer: { user } }) {
  return {
    user: user,
  };
}
const actions = { logoutUser, logoutCurrentUser };
export default connect(mapStateToProps, actions)(Drawer);
