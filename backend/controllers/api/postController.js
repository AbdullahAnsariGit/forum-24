const postModel = require("../../models/post");
const reactionModel = require('../../models/reaction')
const commentModel = require('../../models/comment')
const savedModel = require('../../models/savepost')
const reportModel = require('../../models/reportpost')
const moment = require("moment/moment");
var mongoose = require("mongoose");


const createPost = async (req, res, next) => {
  try {
    const user = req.user._id
    if (req.user.is_blocked === 1) {
      res.status(400).send({
        message: "Your profile has been temporarily banned",
        status: 0
      })
    }
    else {
      const newPost = {
        userid: user,
        title: req.body.title,
        description: req.body.description,
      }
      const data = await postModel.create(newPost);

      res.status(200).send({
        message: "Post created successfully",
        data: data,
        status: 1
      })
    }
  }
  catch (error) {

    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}

const editPost = async (req, res, next) => {
  try {

    const findPost = await postModel.findOne({ _id: req.body._id })

    if (findPost) {
      findPost.title = req.body.title ? req.body.title : findPost.title
      findPost.description = req.body.description ? req.body.description : findPost.description
      await findPost.save()

      res.status(200).send({
        message: "Post updated successfully",
        data: findPost,
        status: 1
      })
    }

    else {
      res.status(400).send({
        message: "Post not found",
        status: 0
      })
    }





  }
  catch (error) {

    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}

const deletePost = async (req, res, next) => {
  try {
    console.log("======>>>",req.user)
    if (req.user.role_type == "admin") {
      const findPost = await postModel.findOneAndDelete({ _id: req.body._id })
      if (findPost) {
        return res.status(200).json({
          status: 1,
          message: "Delete post sucessfully"
        });
      }
    }

    else if (req.user.role_type == "moderator") {
      const findPost = await postModel.findOneAndDelete({ _id: req.body._id })
      if (findPost) {
        return res.status(200).json({
          status: 1,
          message: "Delete post sucessfully"
        });
      }
    }

    else if (req.user.role_type == "user") {
      const findPost = await postModel.findOneAndDelete({ _id: req.body._id , userid: req.user._id})
      if (findPost) {
        return res.status(200).json({
          status: 1,
          message: "Delete post sucessfully"
        });
      }
      else {
        return res.status(400).json({
          status: 0,
          message: "Post not found of current user post"
        });
      }
    }

    else {
      return res.status(400).json({
        status: 0,
        message: "No role type match"
      });
    }


  }
  catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}


const getallpost = async (req, res, next) => {
  const user = mongoose.Types.ObjectId(req.userId)
  try {
    const data = [
      {
        '$lookup': {
          'from': 'reports',
          'localField': '_id',
          'foreignField': 'post',
          'as': 'result'
        }
      }, {
        '$unwind': {
          'path': '$result',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$match': {
          'result.user': {
            '$ne': user
          }
        }
      }, {
        '$lookup': {
          'from': 'savedposts',
          'localField': '_id',
          'foreignField': 'post',
          'as': 'results'
        }
      }, {
        '$unwind': {
          'path': '$results',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$lookup': {
          'from': 'users',
          'localField': 'userid',
          'foreignField': '_id',
          'as': 'usersdata'
        }
      }, {
        '$unwind': {
          'path': '$usersdata',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$lookup': {
          'from': 'reactions',
          'localField': '_id',
          'foreignField': 'postid',
          'as': 'reaction'
        }
      }, {
        '$addFields': {
          'reactions': {
            '$size': '$reaction.reactions'
          }
        }
      },
      {
        $addFields: {
          ownreaction: {
            $let: {
              vars: {
                userReaction: {
                  $arrayElemAt: [
                    {
                      $map: {
                        input: {
                          $filter: {
                            input: "$reaction",
                            as: "react",
                            cond: {
                              $eq: ["$$react.userid", user]
                            }
                          }
                        },
                        as: "res",
                        in: "$$res.reactions"
                      }
                    },
                    0
                  ]
                }
              },
              in: "$$userReaction"
            }
          }
        }
      },


      {
        '$lookup': {
          'from': 'comments',
          'localField': '_id',
          'foreignField': 'postid',
          'as': 'postcomments'
        }
      }, {
        '$addFields': {
          'comments': {
            '$size': '$postcomments.comments'
          }
        }
      },


      {
        '$addFields': {
          'username': '$usersdata.name',
          'userimage': '$usersdata.user_image',
          'date': '$createdAt',
          'title': '$title',
          'description': '$description',
          'postimage': '$post_image',
          'saved': '$results.issaved'
        }
      }, {
        '$project': {
          'username': 1,
          'userimage': 1,
          'description': 1,
          'date': 1,
          'title': 1,
          'postimage': 1,
          'saved': 1,
          'reactions': 1,
          'comments': 1,
          'ownreaction': 1
        }
      }
    ]
    const getpost = await postModel.aggregate(data)


    return res.status(200).json({
      message: "get all post successfully",
      status: 1,
      data: getpost
    });

  }
  catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}

const createReaction = async (req, res, next) => {
  try {
    const user = req.userId
    const post = req.body.postid
    const reaction = req.body.reaction

    const postdata = await postModel.findOne({ _id: post })
    if (!postdata) {
      return res.status(400).json({
        message: "post not found",
        status: 0,
      });
    }

    else {
      const reactionexist = await reactionModel.findOne({
        userid: user,
        postid: post
      })

      if (reactionexist) {
        reactionexist.reactions = reaction
        await reactionexist.save()

        return res.status(200).json({
          message: `reaction ${reaction} successfully`,
          status: 1,
          data: reactionexist
        });

      }
      else {
        const reactionadd = {
          userid: user,
          postid: post,
          reactions: reaction
        }
        const data = await reactionModel.create(reactionadd)

        return res.status(200).json({
          message: "reaction added successfully",
          status: 1,
          data: data
        });
      }

    }
  }
  catch (error) {

    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}

const createComment = async (req, res, next) => {
  try {
    const user = req.userId
    const post = req.body.postid
    const comment = req.body.comment

    const postdata = await postModel.findOne({ _id: post })
    if (!postdata) {
      return res.status(400).json({
        message: "post not found",
        status: 0,
      });
    }
    else {
      const commentadd = {
        userid: user,
        postid: post,
        comments: comment
      }
      const data = await commentModel.create(commentadd)

      return res.status(200).json({
        message: "comment added successfully",
        status: 1,
        data: data
      });


    }
  }
  catch (error) {

    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}

const getallreactions = async (req, res, next) => {
  const post = mongoose.Types.ObjectId(req.body.post)
  try {
    const getallreaction = [

      {
        '$match': {
          '_id': post
        }
      }, {
        '$lookup': {
          'from': 'reactions',
          'localField': '_id',
          'foreignField': 'postid',
          'as': 'res'
        }
      }, {
        '$unwind': {
          'path': '$res',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$lookup': {
          'from': 'users',
          'localField': 'res.userid',
          'foreignField': '_id',
          'as': 'usersdata'
        }
      }, {
        '$unwind': {
          'path': '$usersdata',
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$addFields': {
          'username': '$usersdata.name',
          'image': '$usersdata.user_image',
          'date': '$res.createdAt',
          'reaction': '$res.reactions'
        }
      }, {
        '$project': {
          'username': 1,
          'image': 1,
          'date': 1,
          'reaction': 1
        }
      }
    ]

    const data = await postModel.aggregate(getallreaction)


    return res.status(200).json({
      message: "get all reaction successfully",
      status: 1,
      data: data

    });

  }
  catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}

const getallcomments = async (req, res, next) => {
  const post = mongoose.Types.ObjectId(req.body.post)
  const allcomments = [
    {
      '$match': {
        '_id': post
      }
    }, {
      '$lookup': {
        'from': 'comments',
        'localField': '_id',
        'foreignField': 'postid',
        'as': 'res'
      }
    }, {
      '$unwind': {
        'path': '$res',
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$lookup': {
        'from': 'users',
        'localField': 'res.userid',
        'foreignField': '_id',
        'as': 'usersdata'
      }
    }, {
      '$unwind': {
        'path': '$usersdata',
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$addFields': {
        'username': '$usersdata.name',
        'image': '$usersdata.user_image',
        'date': '$res.createdAt',
        'comments': '$res.comments'
      }
    }, {
      '$project': {
        'username': 1,
        'image': 1,
        'date': 1,
        'comments': 1
      }
    }
  ]
  const data = await postModel.aggregate(allcomments)
  try {

    return res.status(200).json({
      message: "get all comments successfully",
      status: 1,
      data: data
    });

  }
  catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}




const savedpost = async (req, res, next) => {

  try {

    const user = req.userId
    const post = req.body.post
    const issaved = req.body.issaved


    const postexist = await postModel.findOne({ _id: post })
    if (postexist) {

      const savedPostOrNot = await savedModel.findOne({
        post: post,
        user: user
      })
      console.log(savedPostOrNot)

      if (savedPostOrNot) {
        savedPostOrNot.issaved = !(savedPostOrNot.issaved)
        await savedPostOrNot.save()

        return res.status(200).json({
          message: postexist.issaved === true ? "saved successfully" : "not saved successfully",
          status: 1,
          data: savedPostOrNot
        });
      }

      else {
        const savedpost = {
          user: user,
          post: post,
          issaved: issaved
        }
        const data = await savedModel.create(savedpost)

        return res.status(200).json({
          message: "post saved successfully",
          status: 1,
          data: data
        });
      }



    }

    else {
      return res.status(400).json({
        message: "post not found",
        status: 0
      });
    }
  }

  catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }

}

const reportpost = async (req, res, next) => {
  try {
    const user = req.userId
    const post = req.body.post
    const reportedtext = req.body.text
    const isreported = req.body.isreported


    const postexist = await postModel.findOne({ _id: post })
    if (postexist) {

      const report = {
        user: user,
        post: post,
        reportedtext: reportedtext,
        isreported: isreported
      }

      const reportpost = await reportModel.create(report)

      return res.status(200).json({
        message: "post reported successfully",
        status: 1,
        data: reportpost
      });

    }

    else {
      return res.status(400).json({
        message: "post not found",
        status: 0
      });
    }

  }
  catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.message
    });
  }
}

module.exports = {
  createPost,
  editPost,
  deletePost,
  createReaction,
  createComment,
  getallpost,
  savedpost,
  reportpost,
  getallreactions,
  getallcomments,

}
