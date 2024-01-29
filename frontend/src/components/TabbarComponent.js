import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Keyboard,
} from "react-native";
import Modal from "react-native-modal";
import NavService from "../helpers/NavService";
import CustomButton from "./CustomButton";
import Shadows from "../helpers/Shadows";
import { colors, family, size } from "../utils";
import { appIcons, appImages } from "../assets";
import CustomText from "./CustomText";
import Img from "./Img";

const { width } = Dimensions.get("screen");
export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardStatus: false,
      isVisible: false,
    };
  }
  componentDidMount() {
    this.showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      this.setState({ keyboardStatus: true });
    });
    this.hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      this.setState({ keyboardStatus: false });
    });
  }
  componentWillUnmount() {
    this.showSubscription.remove();
    this.hideSubscription.remove();
  }
  render() {
    const { state, navigation } = this.props;
    const { keyboardStatus } = this.state;
    console.log(keyboardStatus, "keyboardStatuskeyboardStatus");

    return (
      <ImageBackground
        source={appImages.tabbar}
        style={[
          {
            width: width,
            height: width * 0.25,
            position: "absolute",
            bottom: 0,
            justifyContent: "flex-end",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          },
          keyboardStatus ? styles.hideTabNavigation : null,
        ]}
        imageStyle={{
          width: width,
          height: width * 0.265,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            overflow: "hidden",
            paddingHorizontal: 5,
            backgroundColor: colors.secondary,
            justifyContent: "space-around",
          }}
        >
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const onPress = () => {
              if (route.name === "Home")
                navigation.navigate("BottomTabs", { screen: "Home" });
              if (route.name === "LeaderBoard")
                navigation.navigate("BottomTabs", { screen: "LeaderBoard" });
              if (route.name === "Stats")
                navigation.navigate("BottomTabs", { screen: "Stats" });
              if (route.name === "Messages")
                navigation.navigate("BottomTabs", { screen: "Messages" });
              if (route.name === "MyGoals")
                navigation.navigate("BottomTabs", { screen: "MyGoals" });
            };

            let imageSrc = appIcons.homeUnSelected;
            if (route.name === "Home") imageSrc = appIcons.homeUnSelected;
            if (route.name === "Stats") imageSrc = appIcons.stats;
            if (route.name === "LeaderBoard") imageSrc = appIcons.leaderboard;
            if (route.name === "Messages") imageSrc = appIcons.message;
            if (route.name === "tabBar4") imageSrc = appIcons.mygoals;

            // if (route.name === 'tabBar4') {
            //   return <View key={index + 1} style={styles.tabs} />;
            // }
            return (
              <>
                <TouchableOpacity
                  key={index + 1}
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityRole="button"
                  activeOpacity={0.8}
                  onPress={onPress}
                  style={styles.tabs}
                >
                  {isFocused && (
                    <Image
                      source={appIcons.selected}
                      style={[
                        {
                          height: 8,
                          width: 28,
                          tintColor: colors.primary,
                          alignSelf: "center",
                          top: -8,
                        },
                        keyboardStatus ? styles.hideTabNavigation : null,
                      ]}
                      resizeMode="contain"
                    />
                  )}
                  <Image
                    source={imageSrc}
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: isFocused ? colors.primary : colors.lightGray,
                    }}
                    resizeMode="contain"
                  />
                  <CustomText
                    text={
                      route?.name == "MyGoals"
                        ? "My Goals"
                        : route?.name == "LeaderBoard"
                        ? "Leaderboard"
                        : route?.name
                    }
                    // style={{marginLeft:route?.name == 'LeaderBoard'? 5:0}}
                    font={family?.Poppins_Medium}
                    size={size?.xxtiny}
                    color={isFocused ? colors.primary : colors.lightGray}
                  />
                </TouchableOpacity>
              </>
            );
          })}
        </View>
        {/* <TouchableOpacity
          activeOpacity={1}
          // onPress={() => togglePopUp()}
          onPress={() =>
            NavService?.navigate('BottomTabs', {screen: 'tabBar4'})
          }
          style={[
            {
              position: 'absolute',
              width: 75,
              height: 75,
              borderRadius: 48,
              backgroundColor: colors.primary,
              alignSelf: 'center',
              bottom: 50,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: colors.primary,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,

              elevation: 9,
            },
            keyboardStatus ? styles.hideTabNavigation : null,
          ]}>
          <Image
            source={appIcons.home}
            style={{
              height: 28,
              width: 28,
              tintColor: colors.white,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 0.14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    width: width * 0.4,
    borderRadius: 10,
  },
  buttonPerfectionNext: {
    backgroundColor: colors.secondary,
    marginLeft: 15,
  },
  hideTabNavigation: {
    width: 0,
    height: 0,
    position: "absolute",
    bottom: 0,
  },
  tabs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 5,
    height: 70,
    paddingHorizontal: 4,
  },
});
