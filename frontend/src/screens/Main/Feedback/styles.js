import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import appStyles from '../../appStyles';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width * 0.9,
    alignSelf:'center',
    // backgroundColor:'red',
    marginTop: '10%',
    flex: 1,
    gap:10
  },
  headerText: {
    marginTop: 10,
    marginRight: 'auto',
    ...appStyles.font16,
    ...appStyles.family_Jost_SemiBold,
  },
  textinputstyling: {
    height: 200,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 15,
  },
  itemSeperator: {
    width: 20,
  },
  mainView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  // icon: {
  //   width: 18,
  //   height: 18,
  //   resizeMode: 'cover',
  // },
  text: {
    marginHorizontal: 10,
    ...appStyles.family_Jost_Regular,
  },
  border: {
    height: 1,
    ...appStyles.w100,
  },
  footerMainView: {
    flexDirection: 'row',
  },
  pressAble1: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 20,
  },
  btnTextStyle: {
    ...appStyles.font16,
    color: 'white',
    ...appStyles.family_Jost_Bold,
  },
  inputBox: {
    height: 200,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  videoStyle: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundForGalleryAsset: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  wrapper: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    position: 'relative',
  },
  playIcon: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    position: 'absolute',
    top: '35%',
    left: '35%',
  },
  crossIconView: {
    position: 'absolute',
    zIndex: 1000,
    right: 3,
    top: 0.7,
  },
  crossBtn: {
    borderRadius: 100,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossText: {
    ...appStyles.font12,
  },
  plusContainer: {
    width: 80,
    height: 80,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor:colors.darkBlue ,
    marginVertical:10,
    borderRadius: 10,
    backgroundColor:colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  iconPlus: {
    width: 25,
    height: 25,
    // borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default styles;
