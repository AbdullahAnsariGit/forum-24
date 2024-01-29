import {StyleSheet} from 'react-native';
import {colors, WP, HP, platform, hasNotch} from '../utils';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

let ios = platform === 'ios';

const styles = StyleSheet.create({
  StatusBarContainer: {
    height: hasNotch ? '8%' : HP(5),
    // height: hasNotch ? HP(8) : HP(5),
    paddingBottom: hasNotch ? '1%' : '0%',
    // paddingBottom: hasNotch ? HP(1) : HP(0),
    width: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'flex-end',
    // alignItems: hasNotch ? 'flex-end' : "center",
    justifyContent: 'center',
  },
  spLogoSize: {
    width: hasNotch ? '7%' : 25,
    height: hasNotch ? '70%' : 25,

    // width: hasNotch ? WP(7) : WP(7),
    // height: hasNotch ? HP(2) : HP(2.2),
    // backgroundColor:'red'
  },
  center: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarText: {
    color: colors.bg1,
    fontSize: hasNotch ? RFPercentage(1.5) : RFPercentage(1.9),
  },

  // Auth Header
  authHeaderContainer: {
    // flex:1,
    height: HP(5),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darkPrimary,
  },
  authHeaderLeftSide: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  authHeaderCenter: {
    flexDirection: 'row',
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authHeaderRightSide: {flex: 2},
  authHeaderLeftSideText: {color: colors.darkBlue, fontSize: HP(2)},
  authHeaderCenterText: {
    color: colors.white,
    fontSize: HP(2.2),
    textTransform: 'capitalize',
  },
  // Auth Header

  // restaurant list
  profileContainer: {flex: 2, justifyContent: 'center', alignItems: 'center'},
  name: {fontWeight: '700', color: colors.black, fontSize: HP(2)},
  desc: {fontSize: HP(2)},
  loaderStyle: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10,10,10,0.4)',
  },
  spinerBox: {
    width: WP(15),
    height: HP(10),
    borderRadius: HP(1),
    justifyContent: 'center',
    backgroundColor: 'rgba(10,10,10,0.8)',
  },
  showErr: {color: colors.red, paddingHorizontal: WP(5)},

  bookingClndrContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
    width: WP(100),
    justifyContent: 'center',
    alignItems: 'center',
    height: HP(100),
  },

  BookingSlotsContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  BookingSlotsArea: {
    height: '65%',
    width: '80%',
    backgroundColor: colors.primary,
    borderRadius: WP(3),
    overflow: 'hidden',
  },

  BookingNotesArea: {
    height: '35%',
    width: '50%',
    backgroundColor: colors.primary,
    borderRadius: RFPercentage(2),
    overflow: 'hidden',
  },

  SlotsCustomTimeFrame: {flex: 5.5},

  bookingNoteHeader: {flex: 2},
  bookingTagsHeader: {flex: 0.8},

  SlotsSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: WP(0),
  },

  SlotsShift: {flex: 4.5},

  SlotsSectionText: {color: colors.white, fontSize: WP(1.8)},

  SlotsSectionLine: {
    width: HP(15),
    height: WP(0.35),
    marginHorizontal: HP(1),
    borderRadius: WP(3),
    backgroundColor: colors.white,
  },

  SlotsHeader: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  SlotsTimeFrameContainer: {flex: 7, width: '97%', alignSelf: 'center'},

  SlotsCustomTimeContainer: {
    height: 60,
    width: '97%',
    alignSelf: 'center',
    borderRadius: HP(1),
    flexDirection: 'row',
    marginVertical: HP(1),
    justifyContent: 'space-between',
  },

  timeContainer: {
    flex: 9,
    paddingHorizontal: HP(1.5),
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: WP(2),
    color: colors.white,
  },

  range: {
    fontSize: WP(2.5),
    color: colors.txt2,
  },

  checkContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  checkCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  SlotsHeaderButton: {
    paddingHorizontal: HP(1.5),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 10,
    backgroundColor: colors.darkPrimary,
  },

  bookingTagsHeaderButton: {
    paddingHorizontal: HP(1.5),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: RFPercentage(1),
    borderTopRightRadius: RFPercentage(1),
    backgroundColor: colors.darkPrimary,
  },

  BookingTagsText: {
    flex: 1,
    color: colors.white,
    fontSize: RFPercentage(2),
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  SlotsHeaderText: {
    flex: 1,
    color: colors.white,
    fontSize: 30,
    textAlign: 'center',
  },
  BookintNotesHeader: {
    flex: 1,
    textTransform: 'capitalize',
    color: colors.white,
    fontSize: 30,
    textAlign: 'center',
  },

  SlotsCheckButton: {
    paddingHorizontal: HP(1.5),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    backgroundColor: colors.darkPrimary,
  },

  bookingTagsCheckButton: {
    paddingHorizontal: HP(1.5),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: RFPercentage(1),
    borderTopLeftRadius: RFPercentage(1),
    backgroundColor: colors.skyBlue,
  },

  SlotsCustomTimeFrameText: {
    fontSize: WP(1.3),
    textAlign: 'center',
    marginVertical: WP(0.2),
    color: colors.txt2,
  },

  SlotsSliderContainer: {
    flex: 1,
    backgroundColor: colors.darkPrimary,
    borderRadius: WP(1),
    paddingHorizontal: HP(3),
  },

  CalendarModal: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  CalendarModalContainer: {
    width: '55%',
    height: '90%',
    backgroundColor: colors.primary,
    borderRadius: 30,
    overflow: 'hidden',
  },

  CalendarModalClose: {
    width: 75,
    height: 75,
    borderBottomEndRadius: 10,
    backgroundColor: colors.darkPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  CalendarModalHeading: {
    color: colors.white,
    fontSize: 30,
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  TableContainer: {width: 60, height: 60, justifyContent: 'center'},

  Chair1: {
    width: 30,
    height: 15,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: colors.white,
  },

  Chair2: {
    width: 15,
    height: 30,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: colors.white,
  },

  Table: {
    width: '80%',
    height: '78%',
    elevation: 1,
    position: 'absolute',
    borderRadius: 10,
    zIndex: 1,
    borderWidth: 1.5,
    backgroundColor: colors.gray,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  bottomSheetContainer: {height: '100%', width: '100%'},

  sheetHeader: {
    flex: 1.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  sheetTable: {flex: 4, paddingHorizontal: 10},

  tableText: {color: colors.txt2, fontSize: 20, left: 10},

  sheetPartySize: {flex: 2.4, paddingHorizontal: 10},

  sheeButton: {
    flex: 1.8,
    backgroundColor: colors.darkPrimary,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addWalkText: {
    color: colors.white,
    textTransform: 'capitalize',
    fontSize: RFPercentage(2),
  },

  sheetTableContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: colors.darkPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  tableDataTextDefault: {
    color: colors.txt2,
    fontSize: RFPercentage(1.5),
  },

  partySizecontainer: {
    height: '100%',
    marginTop: '2%',
    width: 80,
    borderColor: colors.skyBlue,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  partySizeText: {
    fontSize: RFPercentage(2.5),
  },

  partySizeTextguest: {color: colors.skyBlue, fontSize: RFPercentage(1.5)},

  sheeButtonContainer: {
    height: '75%',
    width: '95%',
    backgroundColor: colors.skyBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  newBookingContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primary,
    position: 'absolute',
    zIndex: 2,
  },

  newBookingHeader: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  newBookingCalender: {flex: 8},

  tableBody: {flex: 1, paddingTop: RFPercentage(0.8)},

  customStyles: {width: '100%', height: '100%', borderRadius: 0},

  HeaderText: {
    color: colors.white,
    fontSize: RFPercentage(2),
    letterSpacing: -1,
    left: 20,
    textTransform: 'capitalize',
  },

  HeaderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: RFPercentage(5),
    backgroundColor: colors.darkPrimary,
  },

  selectedItemText: {
    fontSize: RFPercentage(1.7),
    letterSpacing: 0.5,
    color: colors.skyBlue,
    right: 20,
    textAlign: 'right',
  },

  selectedTxtContainer: {width: '40%'},

  newBookingSizeContainer: {
    flex: 1.5,
    marginTop: RFPercentage(1),
    marginBottom: RFPercentage(0.5),
    justifyContent: 'center',
  },

  partySizeSlotsContainer: {
    flex: 8.5,
    marginTop: RFPercentage(0.5),
    marginBottom: RFPercentage(1),
  },

  partySizeSlotsHeader: {
    flex: 1.4,
    paddingHorizontal: RFPercentage(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopColor: colors.black,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.darkPrimary,
  },

  partySizeSlotsHeaderContainer: {
    flex: 1,
    height: '70%',
    borderRadius: RFPercentage(1.5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  partySizeSlotsBody: {
    flex: 7.2,
    backgroundColor: colors.darkPrimary,
    paddingHorizontal: 10,
  },

  partySizeSlotsFooter: {
    flex: 1.4,
    borderTopWidth: 1,
    borderTopColor: colors.black,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.darkPrimary,
    paddingHorizontal: RFPercentage(2.5),
  },

  customSlotsTitle: {
    fontSize: RFPercentage(1.2),
  },

  timeSlotsText: {fontSize: RFPercentage(1.6), color: colors.skyBlue},

  timeSlotsDataContainer: {
    height: RFPercentage(4.0),
    width: RFPercentage(7.2),
    borderRadius: RFPercentage(0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  customTimeListData: {
    flexDirection: 'row',
    marginVertical: RFPercentage(1),
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  SuggestedAllocationContainer: {
    borderRadius: RFPercentage(1),
    backgroundColor: colors.darkPrimary,
    marginHorizontal: RFPercentage(1.5),
  },

  SuggestedAllocationHeaderContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFPercentage(0.7),
  },

  SuggestedAllocationBodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RFPercentage(0.7),
  },

  SuggestedAllocationHeaderText: {
    color: colors.white,
    fontSize: RFPercentage(1.5),
    textTransform: 'capitalize',
  },

  selectedTableheaderText: {
    color: colors.white,
    fontSize: RFPercentage(1.7),
    textTransform: 'capitalize',
  },

  selectedTableText: {
    color: colors.gray,
    fontSize: RFPercentage(1.7),
  },

  SuggestedAllocationBodyText: {
    color: colors.yellow,
    fontSize: RFPercentage(1.1),
    letterSpacing: -0.8,
    textAlign: 'center',
  },

  allocationErrorContainer: {
    flex: 8.5,
    paddingHorizontal: RFPercentage(1),
    justifyContent: 'center',
    alignItems: 'center',
  },

  warningContainer: {flex: 1.5, justifyContent: 'center', alignItems: 'center'},

  selectedTables: {
    height: 180,
    marginTop: RFPercentage(0.8),
    marginHorizontal: RFPercentage(1.5),
    backgroundColor: colors.darkPrimary,
    borderRadius: 20,
  },

  selectedTableTextContainer: {
    paddingVertical: RFPercentage(0.5),
    alignItems: 'center',
    borderBottomWidth: 1,
  },

  selectedTableBody: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  confirmButton: {
    height: 50,
    alignSelf: 'center',
    paddingHorizontal: RFPercentage(1.5),
    marginVertical: RFPercentage(1),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    borderRadius: 5,
  },

  guestList: {
    height: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: RFPercentage(1.8),
    marginVertical: RFPercentage(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    borderRadius: 5,
  },
  guestListdetail: {
    height: '70%',
    flexDirection: 'row',
    width: '90%',
    paddingHorizontal: RFPercentage(1.8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    borderRadius: 5,
  },

  confirmButtonTextStyle: {
    textTransform: 'capitalize',
    color: colors.white,
    fontSize: RFPercentage(1.5),
  },

  skip: {
    position: 'absolute',
    bottom: RFPercentage(1),
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  bookingDetailfooter: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: colors.darkPrimary,
    alignItems: 'center',
  },

  bookingDetailBody: {flex: 8, paddingHorizontal: RFPercentage(1)},

  addToWaitList: {
    flex: 3.5,
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RFPercentage(0.7),
    borderWidth: 1,
    borderColor: colors.skyBlue,
    borderRadius: 5,
  },

  addToWaitListText: {
    color: colors.skyBlue,
    fontSize: RFPercentage(1.4),
    letterSpacing: -0.5,
    textTransform: 'capitalize',
  },

  addBooking: {
    flex: 6.5,
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: RFPercentage(0.7),
    backgroundColor: colors.skyBlue,
    borderRadius: 5,
  },

  bookingNotesContainer: {},

  bookingNotesHeading: {
    textTransform: 'uppercase',
    marginVertical: RFPercentage(0.5),
    color: colors.txt2,
    marginHorizontal: RFPercentage(1),
    fontSize: RFPercentage(1),
  },

  bookingNotesButton: {
    height: RFPercentage(3.7),
    borderRadius: 10,
    backgroundColor: colors.darkPrimary,
    marginBottom: RFPercentage(0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookingTagsContainer: {},

  bookingDownPaymentContainer: {},

  bookingNotesButtonText: {
    color: colors.txt2,
    textAlign: 'center',
    fontSize: RFPercentage(1.3),
  },

  downPaymentContainer: {height: RFPercentage(4.5), flexDirection: 'row'},

  downPaymentContainerButton: {
    height: RFPercentage(4.5),
    borderRadius: 10,
    backgroundColor: colors.darkPrimary,
    marginBottom: RFPercentage(0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchLeftItems: {
    height: RFPercentage(20),
    padding: RFPercentage(1.5),
    paddingVertical: RFPercentage(2),
    marginVertical: RFPercentage(1),
    borderRadius: RFPercentage(1.5),
    width: '94%',
    backgroundColor: colors.darkPrimary,
    alignSelf: 'center',
  },

  searchProfileContainer: {flex: 3.8, alignItems: 'center'},

  searchGuestButton: {
    flex: 1.2,
    backgroundColor: colors.skyBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFPercentage(0.5),
  },

  searchGuestButtonText: {
    color: colors.white,
    fontSize: RFPercentage(2),
    textTransform: 'capitalize',
  },

  Defaulticon: {height: RFPercentage(7), width: RFPercentage(7)},

  guestName: {
    color: colors.white,
    fontSize: RFPercentage(1.8),
    textTransform: 'capitalize',
  },

  searchResultRightBody: {flex: 7},

  searchResultHeading: {
    color: colors.white,
    fontSize: RFPercentage(2),
    textAlign: 'center',
  },

  searchResultProfileContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchResultBodyContainer: {flex: 7, justifyContent: 'center'},

  searchResultButton: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchResultName: {
    color: colors.white,
    fontSize: RFPercentage(1.8),
    marginHorizontal: RFPercentage(1),
    textTransform: 'capitalize',
  },

  searchResultMobileAndEmail: {
    color: colors.white,
    fontSize: RFPercentage(1.5),
    marginHorizontal: RFPercentage(1),
  },

  selectButtonContainer: {
    height: '40%',
    width: '75%',
    borderRadius: RFPercentage(0.3),
    backgroundColor: colors.skyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  partySizeMainContainer: {
    height: '80%',
    marginTop: '14%',
    width: '35%',
    backgroundColor: colors.primary,
  },

  partySizeMainContainerAbs: {
    position: 'absolute',
    zIndex: 1,
    paddingTop: RFPercentage(0.5),
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
  },

  TimePickerContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  BookingNotesContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: RFPercentage(2),
  },

  BookingTagsContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
  },

  bookingTagLeftPanel: {flex: 3.5},

  bookingTagrightPanel: {flex: 6.5, backgroundColor: colors.primary},

  guestsearchBar: {
    flex: 1,
    marginHorizontal: RFPercentage(1.5),
    backgroundColor: colors.darkPrimary,
    color: colors.white,
    fontSize: RFPercentage(2),
    padding: 0,
    justifyContent: 'center',
  },

  bookingTagBody: {
    height: RFPercentage(5),
    marginHorizontal: RFPercentage(1),
    paddingHorizontal: RFPercentage(1),
    borderRadius: RFPercentage(1.5),
    backgroundColor: colors.darkPrimary,
    marginVertical: RFPercentage(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  TagTile: {
    color: colors.white,
    fontSize: RFPercentage(2.5),
    marginVertical: RFPercentage(1),
    textAlign: 'center',
  },

  bookingTagesquare: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: RFPercentage(0.2),
    justifyContent: 'center',
    alignItems: 'center',
  },

  tagsTile: {
    fontSize: RFPercentage(1.5),
    marginHorizontal: RFPercentage(0.5),
    textTransform: 'capitalize',
  },

  tagContainer: {
    height: RFPercentage(3.3),
    margin: RFPercentage(0.5),
    flexDirection: 'row',
    borderRadius: RFPercentage(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1),
  },

  bookingTagFlatContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: RFPercentage(1),
  },

  tagIcon: {height: 20, width: 20},

  searchBarHeading: {
    color: colors.white,
    fontSize: RFPercentage(2),
    textTransform: 'capitalize',
  },

  guestDetailContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: RFPercentage(1),
  },

  guestDetailHeader: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  guestDetailFirstContainer: {flex: 1, flexDirection: 'row'},

  guestDetailSecondContainer: {flex: 8.2},

  salution: {justifyContent: 'space-between'},

  guestDetailfirstName: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: RFPercentage(1),
  },

  guestDetailswitchContainer: {
    flex: 1.5,
    justifyContent: 'flex-end',
    paddingBottom: RFPercentage(0.2),
    alignItems: 'center',
  },

  guestDetaillastName: {flex: 8.5, justifyContent: 'space-between'},

  SalutationText: {
    color: colors.txt2,
    fontSize: RFPercentage(1.1),
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  SalutationTextFirstName: {
    color: colors.txt2,
    fontSize: RFPercentage(1.2),
    textTransform: 'uppercase',
    marginHorizontal: RFPercentage(1),
  },

  SalutationDataText: {
    color: colors.skyBlue,
    fontSize: RFPercentage(1.2),
    textTransform: 'capitalize',
  },

  salutationMr: {
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    width: RFPercentage(4),
    borderWidth: 1,
    borderColor: colors.skyBlue,
    borderTopLeftRadius: RFPercentage(0.8),
    borderBottomLeftRadius: RFPercentage(0.8),
  },

  salutationMs: {
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    width: RFPercentage(4),
    borderWidth: 1,
    borderColor: colors.skyBlue,
    borderTopRightRadius: RFPercentage(0.8),
    borderBottomRightRadius: RFPercentage(0.8),
  },

  firstNameInput: {
    backgroundColor: colors.darkPrimary,
    height: '65%',
    width: '100%',
    borderRadius: RFPercentage(1),
    color: colors.white,
    fontSize: RFPercentage(1.7),
    paddingHorizontal: RFPercentage(1),
  },

  phoneNumber: {
    backgroundColor: colors.darkPrimary,
    height: '100%',
    width: '100%',
    borderRadius: RFPercentage(1),
    color: colors.white,
    fontSize: RFPercentage(1.7),
    paddingHorizontal: RFPercentage(1),
  },
  bookingNotes: {
    width: '96%',
    marginLeft: '2%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.darkPrimary,
    fontSize: RFPercentage(1.8),
    marginHorizontal: RFPercentage(1.5),
    padding: RFPercentage(1.3),
    lineHeight: RFPercentage(2),
    flex: 1,
    marginVertical: '2%',
    borderRadius: RFPercentage(0.8),
    color: colors.white,
    textAlignVertical: 'top',
  },

  guestEmailAddress: {
    backgroundColor: colors.darkPrimary,
    height: '65%',
    width: '100%',
    borderRadius: RFPercentage(1),
    color: colors.white,
    fontSize: RFPercentage(1.7),
    paddingHorizontal: RFPercentage(1),
  },

  phoneContainer: {
    backgroundColor: colors.darkPrimary,
    flexDirection: 'row',
    height: '65%',
    width: '100%',
    borderRadius: RFPercentage(1),
    fontSize: RFPercentage(1.7),
    paddingHorizontal: RFPercentage(1),
    color: colors.white,
  },

  country: {flex: 3, justifyContent: 'center', alignItems: 'center'},

  phoneNumberContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  emailContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: RFPercentage(1),
  },
});

export default styles;
