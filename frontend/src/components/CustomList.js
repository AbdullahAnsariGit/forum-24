import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors, family, size } from "../utils";
import CustomIcon from "./CustomIcon";
import CustomText from "./CustomText";
import Shadows from "../helpers/Shadows";
import { appIcons } from "../assets";
import appStyles from "../screens/appStyles";
import GroupImages from "./GroupImages";
import GroupList from "./GroupList";
import { _grouplist } from "../utils/dummyData";
const { height, width } = Dimensions?.get("screen");

const CustomList = (props) => {
  const {
    _item,
    color,
    onPress,
    customContainer,
    statusColor,
    _title2,
    _title3,
    role,
    _titleUser,
    onDelete,
    onEdit,
  } = props;

  console.log('role', role)

  return (
    <View style={[styles?.container, customContainer]}>
      <View
        activeOpacity={0.8}
        onPress={onPress}
        style={styles?.innerContainer}
      >
        <View style={styles?.middle}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText
              text={_item?.user ? _item?.user : _titleUser}
              color={color ? color : colors?.primary}
              font={family?.Poppins_SemiBold}
              size={size?.small}
              style={{ textTransform: "uppercase" }}
            />
            {role !== "user" && role !== "moderator" ? (
              <View style={{ flexDirection: "row", gap: 15 }}>
                <TouchableOpacity onPress={onEdit}>
                  <CustomIcon
                    size={20}
                    color={colors?.white}
                    src={appIcons?.editgoal}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                  <CustomIcon
                    size={20}
                    color={colors?.white}
                    src={appIcons?.deletegoal}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <CustomText
                text={_item?.status ? _item?.status : _title3}
                color={statusColor ? statusColor : colors?.primary}
                font={family?.Poppins_SemiBold}
                size={size?.xxsmall}
              />
            )}
       
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText
              text={_item?.name ? _item?.name : _title2}
              color={color ? color : colors?.secondary}
              font={family?.Poppins_SemiBold}
              size={size?.small}
            />
          </View>
          <CustomText
            text={_item?.description}
            color={color ? color : colors?.gray}
            font={family?.Poppins_Medium}
            size={size?.xsmall}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles?.btn} onPress={onPress}>
          <CustomText
            text="View Comments"
            color={color ? color : colors?.white}
            font={family?.Poppins_Medium}
            size={size?.xsmall}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: colors?.white,
    paddingHorizontal: width / 26,
    paddingVertical: height / 90,
    ...Shadows?.shadow3,
    gap: 10,
  },
  innerContainer: {
    flexDirection: "row",
    flex: 1,
    gap: 8,
    padding: 5,
  },
  middle: {
    flex: 2,
    justifyContent: "center",
  },
  customIconStyle: {
    borderRadius: 30,
  },
  searchno: {
    height: 30,
    width: 30,
  },
  customIconWrapper: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 2,
    borderStyle: "dashed",
    borderColor: colors?.secondary,
  },
  imgWrapper: {
    // height: height / 18,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    borderRadius: 20,
    padding: 8,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1,
    width: "50%",
    backgroundColor: colors?.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});
