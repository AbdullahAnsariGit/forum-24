// @app
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// drawerComponentt
import UserAppStack from "../drawer/appDrawer";
// @stack screens
import Home from "../../screens/Main/Home";
import LeaderBoard from "../../screens/Main/LeaderBoard/LeaderBoard";
import Stats from "../../screens/Main/Stats/Stats";
import Messages from "../../screens/Main/Messages/Messages";
import MyGoals from "../../screens/Main/MyGoals/MyGoals";
import MyProfile from "../../screens/Main/MyProfile/MyProfile";
import EditProfile from "../../screens/Main/EditProfile/EditProfile";
import Settings from "../../screens/Main/Settings/Settings";
import AboutApp from "../../screens/Main/AboutApp/AboutApp";
import Feedback from "../../screens/Main/Feedback/Feedback";
import GoDetails, { Comments } from "../../screens/Main/Comments/Comments";
import Notifications from "../../screens/Main/Notifications/Notifications";
import StatsDetails from "../../screens/Main/StatsDetails/StatsDetails";
import Challenges from "../../screens/Main/Challenges/Challenges";
import DiscussionBoard from "../../screens/Main/DiscussionBoard/DiscussionBoard";
import CreateGoal from "../../screens/Main/CreateGoal/CreateGoal";
import UserProfile from "../../screens/Main/UserProfile/UserProfile";
import ChallengesDetails from "../../screens/Main/ChallengesDetails/ChallengesDetails.js";
import ChallengesDetailsWinner from "../../screens/Main/ChallengesDetailsWinner/ChallengesDetailsWinner";
import ChallengesParticipate from "../../screens/Main/ChallengesParticipate/ChallengesParticipate";
import PromotionDetails from "../../screens/Main/PromotionDetails/PromotionDetails";
import EditGoal from "../../screens/Main/EditGoal/EditGoal";
import Chat from "../../screens/Main/Chat/Chat";
import Information from "../../screens/Main/Information/Information";
import Participants from "../../screens/Main/Participants/Participants";
// import GroupChat from '../../screens/Main/GroupChat/GroupChat';
import MyStats from "../../screens/Main/MyStats/MyStats";
import User from "../../screens/Main/User";
import RequestApproved from "../../screens/Main/RequestApproved";
import Commentss from "../../screens/Main/Commentss";
import UpdatePost from "../../screens/Main/UpdatePost";

const Stack = createNativeStackNavigator();

const AppNavigation = ({ initialRoute }) => {
  return (
    <Stack.Navigator
      initialRouteName="UserAppStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: "horizontal",
        gestureEnabled: true,
        animation: "slide_from_right",
        animationDuration: 3017,
      }}
    >
      <Stack.Screen name="UserAppStack" component={UserAppStack} />
      <Stack.Screen name="Comments" component={Comments} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      <Stack.Screen name="Stats" component={Stats} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="MyGoals" component={MyGoals} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AboutApp" component={AboutApp} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="StatsDetails" component={StatsDetails} />
      <Stack.Screen name="Challenges" component={Challenges} />
      <Stack.Screen name="DiscussionBoard" component={DiscussionBoard} />
      <Stack.Screen name="CreateGoal" component={CreateGoal} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="ChallengesDetails" component={ChallengesDetails} />
      <Stack.Screen
        name="ChallengesDetailsWinner"
        component={ChallengesDetailsWinner}
      />
      <Stack.Screen
        name="ChallengesParticipate"
        component={ChallengesParticipate}
      />
      <Stack.Screen name="PromotionDetails" component={PromotionDetails} />
      <Stack.Screen name="MyStats" component={MyStats} />
      <Stack.Screen name="EditGoal" component={EditGoal} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="Participants" component={Participants} />
      {/* <Stack.Screen name="GroupChat" component={GroupChat} /> */}
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="RequestApproved" component={RequestApproved} />
      <Stack.Screen name="Commentss" component={Commentss} />
      <Stack.Screen name="UpdatePost" component={UpdatePost} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
