const router = require("express").Router();

const { verifyToken } = require("../middleware/authenticate");
const { authorizeRoles } = require('../middleware/authorizeRoles');
const {
    register,
    login,
    getRequest,
    acceptRequest,
    verifyUser,
    resendCode,
    forgotPassword,
    resetPassword,
    changePassword,
    logOut,
    socialLogin,
    completeProfile,
    bannedOrunbannedUser
} = require("../controllers/api/authController");
const {
    updateProfile,
    userProfile,
    deleteUserProfile,
} = require("../controllers/api/userController");
const { getContent } = require("../controllers/api/commonController");

const {createPost,editPost,deletePost,createReaction,createComment,getallpost,savedpost,reportpost,getallreactions,getallcomments} = require('../controllers/api/postController')

//** Multer **//
const { upload } = require("../middleware/utils");


const { getInAppNotification, userNotifications } = require("../controllers/api/notificationController");


/** Auth */
router.post("/login", login);
router.post("/register", register);
router.get("/get-request", verifyToken, getRequest);
router.post("/accept-request", verifyToken, acceptRequest);

router.post("/user-isbanned", verifyToken, bannedOrunbannedUser);

router.post("/add-post",verifyToken,createPost);
router.post("/edit-post",verifyToken,editPost);
router.post("/delete-post",verifyToken,deletePost);
router.get("/getallpost",verifyToken,getallpost);

router.post("/addreaction",verifyToken,createReaction);
router.post("/addcomments",verifyToken,createComment);
router.post("/getallreactions",verifyToken,getallreactions);
router.post("/getallcomments",verifyToken,getallcomments);



router.post("/verifyOtp", verifyUser);
router.post("/resend-code", resendCode);
router.post("/forgetpassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.post("/change-password", verifyToken, changePassword);
router.post("/socialLogin", socialLogin);
router.post('/complete-profile', upload.single('user_image'), completeProfile);
router.post("/logout", verifyToken, logOut);
router.get("/profile-details/:id", verifyToken, userProfile);
router.get("/delete-profile/:id", verifyToken, deleteUserProfile);
router.post('/update-profile', upload.single('user_image'), verifyToken, updateProfile);

/** Content */
router.get("/content/:type", getContent);

/** Post */
//============================================================

router.post("/savedpost",verifyToken,savedpost);
router.post("/reportpost",verifyToken,reportpost);

//============================================================

/** Notification **/
router.post("/notification", verifyToken, userNotifications);
router.get('/app-notification', verifyToken, getInAppNotification);


module.exports = router;
