import React, { Component } from "react";
import AppBackground from "../../../components/AppBackground";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";
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
import CustomIcon from "../../../components/CustomIcon";
import { appIcons } from "../../../assets";
import { color } from "react-native-elements/dist/helpers";
const { height, width } = Dimensions.get("screen");
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      allPost: [],
      isFetching: false,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.unsubscribe = navigation.addListener('focus', () => {
      this.getAllRequest();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe)
      this.unsubscribe();
  }

  ItemSeparatorComponent = () => {
    return <View style={{ height: 10 }} />;
  };
  handleClose = () => {
    this?.setState({ isVisible: false });
  };
  getAllRequest = () => {
    const url = "http://localhost:3017/api/getallpost";
    const token = this.props.user?.user_authentication;
    console.log("🚀 ~ file: Home.js:42 ~ Home ~ token:", token);

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
        this?.setState({ allPost: data?.data });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      }).finally(() => {
        this.setState({ isFetching: false })
      });
  };
  deletePost = (id) => {
    console.log("id", id);
    const url = "http://localhost:3017/api/delete-post";
    const token = this.props.user?.user_authentication;
    const user = this.props.user
    console.log("user--user", user?._id);
    console.log("🚀 ~ file: Home.js:42 ~ Home ~ token:", token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let params = {
      _id: id,
      userid: user?._id
    }
    const body = JSON.stringify(params);

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
        // Handle the data as needed
        this.getAllRequest();
        // this?.setState({ allPost: data?.data });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  };
  onRefresh() {
    this.setState({ isFetching: true }, () => { this.getAllRequest(); });
  }
  render() {
    const { isVisible } = this?.state;
    const { user } = this?.props;
    console.log("ssssssssUsbddhbs", user);
    return (
      <AppBackground
        homePress={() => NavService.navigate("MyProfile")}
        menu
        title={"Home"}
        marginHorizontal={false}
      >
        <View style={{ gap: 15 }}>
          <View style={styles.ViewText}>
            <CustomText text="All Posts" style={styles.text1} />
          </View>
          <FlatList
            bounces={false}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            style={{ height: height / 1.9, }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_index) => _index.toString()}
            data={this?.state?.allPost}
            ItemSeparatorComponent={this?.ItemSeparatorComponent}
            renderItem={({ item }) => {
              console.log("item", item);
              return (
                <CustomList
                  Status
                  _item={item}
                  _title2={item?.title}
                  _title3={item?.createAt}
                  _titleUser={"alex"}
                  statusColor={colors?.secondary}
                  customContainer={{
                    borderRadius: 15,
                    backgroundColor: colors?.lightBlue,
                  }}
                  role={user?.role_type}
                  onPress={() =>
                    NavService?.navigate("Commentss", { id: item?._id })
                  }
                  onEdit={() => {
                    NavService.navigate("UpdatePost", { post: item });
                  }}
                  onDelete={() => this.deletePost(item?._id)}
                />
              );
            }}
          />
          <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => NavService.navigate('UpdatePost', { postType: 'Create Post' })}>
            <CustomIcon
              src={appIcons?.plus}
              customIconStyle={{ tintColor: colors?.primary }}
              customIconWrapper={{ height: 50, width: 50, backgroundColor: 50, borderRadius: 50, backgroundColor: colors?.white }}
              tintColor={colors?.primary}
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

const mapDispatchToProps = (dispatch) => {
  return {
    loaderStart: () => dispatch(loaderStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
