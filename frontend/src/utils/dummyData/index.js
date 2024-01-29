import {appIcons, appImages} from '../../assets';
import NavService from '../../helpers/NavService';
export const categoriesData = ['Nike Revolution', 'Addidas', 'Skecher'];
export const colorData = ['black', 'orange', 'red'];
export const sizeData = ['40', '41', '42', '43', '44', '45'];
export const ProfileInfo = [
  {
    heading: 'Phone Number',
    subHeading: '917-204-7949',
    verify: true,
  },
  {
    heading: 'Email Address',
    subHeading: 'business@domail.com',
    verify: true,
  },
  {
    heading: 'Status',
    subHeading: 'Active',
    active: true,
  },

  {
    heading: 'Location',
    subHeading: '3570 SAINT MARYS,AVENUE',
  },
  {
    heading: 'Documents',
    location: false,
  },
];
export const GoalDetails = [
  {
    heading: 'Lorem Ipsum is simply dummy text',
    headingsize: true,
  },
  {
    heading: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    heading: 'Target',
    subHeading: '$2000.00',
    verify: false,
    image: appIcons?.sun,
  },

  {
    heading: 'Date',
    subHeading: 'July 15, 2023',
  },
];
export const homeData = [
  {
    id: 0,
    image: appIcons.postOne,
    name: 'Bella Jane',
    time: '10 min',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 1,
    image: appIcons.postTwo,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 2,
    image: appIcons.postThree,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 3,
    image: appIcons.postOne,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 4,
    image: appIcons.postTwo,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 5,
    image: appIcons.postThree,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
];

export const _dataStats = [
  {
    // rank: '01',
    name: 'John Smith',
    email: 'john@smith.com',

    category: 'Lorem',
    revenue: '8.5',
    // icon1: appIcons?.rank,
    profile: appImages?.profile,
  },
  {
    // rank: '02',
    name: 'Bella Jane',
    category: 'Lorem',
    email: 'john@smith.com',
    revenue: '6.4',
    profile: appImages?.profile,
  },
  {
    // rank: '03',
    name: 'Alex Smith',
    category: 'Lorem',
    email: 'john@smith.com',
    revenue: '7.2',
    profile: appImages?.profile,
  },
  {
    // rank: '04',
    name: 'John Butler',
    category: 'Lorem',
    email: 'john@smith.com',
    revenue: '9.1',
    profile: appImages?.profile,
  },
  {
    // rank: '05',
    email: 'john@smith.com',
    name: 'John Smith',
    category: 'Lorem',
    revenue: '4.7',
    profile: appImages?.profile,
  },
  {
    rank: '06',
    name: 'Jason Gogo',
    email: 'john@smith.com',
    category: 'Lorem',
    revenue: '5.3',
    profile: appImages?.profile,
  },
];
export const _Participants = [
  {
    id: 0,
    profile: appImages?.profile,
    name: 'John Smith',
  },
  {
    id: 1,
    profile: appImages?.profile,
    name: 'Emma Young',
  },
  {
    id: 2,
    profile: appImages?.profile,
    name: 'Justin Matt',
  },
  {
    id: 4,
    profile: appImages?.profile,
    name: 'Phillip Holland',
  },
  {
    id: 5,
    profile: appImages?.profile,
    name: 'Nick Brewer',
  },
  {
    id: 6,
    profile: appImages?.profile,
    name: 'Amando Lucas',
  },
  {
    id: 7,
    profile: appImages?.profile,
    name: 'Chris Gordan',
  },
  {
    id: 8,
    profile: appImages?.profile,
    name: 'John Smith',
  },
  {
    id: 9,
    profile: appImages?.profile,
    name: 'Emma Young',
  },
];

export const _messagePage = [
  {
    id: 0,
    profile: appIcons.dummy,
    name: 'John Smith',
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    status: 'Today',
  },
  {
    id: 1,
    profile: appIcons.dummy1,
    name: 'John Smith',
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    status: 'Today',
  },
  {
    id: 2,
    profile: appIcons.dummy2,
    name: 'John Smith',
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    status: 'Today',
  },
  {
    id: 4,
    profile: appIcons.dummy3,
    name: 'John Smith',
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    status: 'Today',
  },
  {
    id: 5,
    profile: appImages.profile,
    name: 'John Smith',
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    status: 'Today',
  },
  {
    id: 6,
    profile: appIcons?.dummy1,
    name: 'John Smith',
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    status: 'Today',
  },
  {
    id: 7,
    profile: appIcons?.dummy2,
    name: 'John Smith',
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    status: 'Today',
  },
];
export const _Challenges = [
  {
    id: 0,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.sales,
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet',

    // status: 'Today',
  },
  {
    id: 1,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.pos,
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet orem ispum alexo Lorem ispum dolor sit amet ',
    // status: 'Today',
  },
];
export const _Home = [
  {
    id: 0,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.sales,
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet  ',

    status: 'Today',
  },
  {
    id: 1,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.pos,
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet orem ispum alexo Lorem ispum dolor sit amet ',
    status: 'Today',
  },
  {
    id: 0,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.sales,
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet  ',

    status: 'Today',
  },
  {
    id: 1,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.pos,
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet orem ispum alexo Lorem ispum dolor sit amet ',
    status: 'Today',
  },
];
export const _singleChallenge = [
  {
    id: 0,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.sales,
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet',
    status: 'Today',
  },
];
export const completedData = [
  {
    id: 0,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.pos,
    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet  ',

    status: 'Today',
  },
  {
    id: 1,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.sales,

    message: 'Lorem ispum dolor sit amet lorem ispum alexo',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet orem ispum alexo Lorem ispum dolor sit amet ',
    status: 'Today',
  },
];
export const _Promotion = [
  {
    id: 0,
    profile: appImages?.profile,
    Sales: appImages?.sales,
    name: 'John Smith',
    message: 'Lorem ispum dolor sit amet ',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet Lorem ispum dolor sit amet',

    status: 'Today',
  },
  {
    id: 1,
    profile: appImages?.profile,
    name: 'John Smith',
    Sales: appImages?.pos,

    message: 'Lorem ispum dolor sit amet ',
    description:
      'Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet orem ispum alexo Lorem ispum dolor sit amet lorem ispum alexo Lorem ispum dolor sit amet Lorem ispum ',
    status: '2 days ago',
  },
];

export const _DiscussionBoard = [
  {
    id: 0,
    name: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    status: 'Created by Admin',
  },
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    status: 'Created by Admin',
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    status: 'Created by Admin',
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    status: 'Created by Admin',
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    status: 'Created by Admin',
  },
];
export const _dailyGoal = [
  {
    id: 0,
    name: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    status: 'July 01',
  },
];

export const _data = [
  {
    rank: '01',
    name: 'John Smith',
    category: 'Lorem',
    revenue: '$85000',
    icon1: appIcons?.rank,
    profile: appImages?.profile,
  },
  {
    rank: '02',
    name: 'Bella Jane',
    category: 'Lorem',
    revenue: '$85000',
    profile: appImages?.profile,
  },
  {
    rank: '03',
    name: 'Alex Smith',
    category: 'Lorem',
    revenue: '$85000',
    profile: appImages?.profile,
  },
  {
    rank: '04',
    name: 'John Butler',
    category: 'Lorem',
    revenue: '$85000',
    profile: appImages?.profile,
  },
  {
    rank: '05',
    name: 'John Smith',
    category: 'Lorem',
    revenue: '$85000',
    profile: appImages?.profile,
  },
  {
    rank: '06',
    name: 'Jason Gogo',
    category: 'Lorem',
    revenue: '$85000',
    profile: appImages?.profile,
  },
];

export const _grouplist = [
  {
    groupName: 'Group Name ABC My group name.',
    groupType: 'Private',
    // groupImg: appImages.group_1,
    groupNo: '10',
  },
  // {
  //   groupName: 'Group Name ABC',
  //   groupType: 'Public',
  //   groupImg: appImages.group_2,
  //   groupNo: '25',
  // },
  // {
  //   groupName: 'Group Name ABC',
  //   groupType: 'Public',
  //   groupImg: appImages.group_3,
  //   groupNo: '10',
  // },
  // {
  //   groupName: 'Group Name ABC',
  //   groupType: 'Private',
  //   groupImg: appImages.group_4,
  //   groupNo: '1.2k',
  // },
  // {
  //   groupName: 'Group Name ABC',
  //   groupType: 'Private',
  //   groupImg: appImages.group_1,
  //   groupNo: '10',
  // },
  // {
  //   groupName: 'Group Name ABC',
  //   groupType: 'Public',
  //   groupImg: appImages.group_2,
  //   groupNo: '25',
  // },
  // {
  //   groupName: 'Group Name ABC',
  //   groupType: 'Public',
  //   groupImg: appImages.group_3,
  //   groupNo: '10',
  // },
  // {
  //   groupName: 'Group Name ABC',
  //   groupType: 'Private',
  //   groupImg: appImages.group_4,
  //   groupNo: '1.2k',
  // },
];

// export const _ongoingGoals = [
//   {
//     id: 0,
//     name: 'John Smith',
//     message:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
//     status: 'July 01',
//   },
//   {
//     id: 1,
//     name: 'John Smith',
//     message:
//       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
//     status: 'July 01',
//   },
// ];

export const _ongoingGoals = [
  {
    id: 0,
    assosiate_date_info: {
      id: 0,
      date: 'July 12, 2023',
      data: [
        {
          id: 0,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
          price: '$4,000',
        },
        {
          id: 1,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
          price: '$5,000',
        },
      ],
    },
  },
  {
    id: 1,
    assosiate_date_info: {
      id: 0,
      date: 'July 15, 2023',
      data: [
        {
          id: 0,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
          price: '$3,000',
        },
        {
          id: 1,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
          price: '$3,050',
        },
      ],
    },
  },
  {
    id: 1,
    assosiate_date_info: {
      id: 0,
      date: 'July 18, 2023',
      data: [
        {
          id: 0,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
          price: '$3,0020',
        },
        {
          id: 1,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
          price: '$4,000',
        },
      ],
    },
  },
];

export const _notifications = [
  {
    id: 0,
    assosiate_date_info: {
      id: 0,
      date: 'Today',
      data: [
        {
          id: 0,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
        },
        {
          id: 1,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
        },
      ],
    },
  },
  {
    id: 1,
    assosiate_date_info: {
      id: 0,
      date: 'Yesterday',
      data: [
        {
          id: 0,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
        },
        {
          id: 1,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
        },
        {
          id: 2,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
        },
        {
          id: 3,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
        },
        {
          id: 4,
          name: 'John Smith',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          status: 'July 01',
        },
      ],
    },
  },
];

export const _progressBar = [
  {
    rank: '01',
    name: 'John Smith',
    category: 'Lorem',
    revenue: '$85000',
    progressper: '80%',
    icon1: appIcons?.rank,
    profile: appImages?.profile,
  },
  {
    rank: '02',
    name: 'Bella Jane',
    category: 'Lorem',
    revenue: '$85000',
    progressper: '60%',

    profile: appImages?.profile,
  },
  {
    rank: '03',
    name: 'Alex Smith',
    progressper: '75%',

    category: 'Lorem',
    revenue: '$85000',
    profile: appImages?.profile,
  },
  {
    rank: '04',
    name: 'John Butler',
    category: 'Lorem',
    revenue: '$85000',
    progressper: '95%',

    profile: appImages?.profile,
  },
  {
    rank: '05',
    name: 'John Smith',
    category: 'Lorem',
    revenue: '$85000',
    progressper: '38%',

    profile: appImages?.profile,
  },
  {
    rank: '06',
    name: 'Jason Gogo',
    category: 'Lorem',
    progressper: '35%',

    revenue: '$85000',
    profile: appImages?.profile,
  },
];

export const multiImages = [
  {
    img: appImages?.profile,
  },
  {
    img: appIcons?.dummy,
  },
  {
    img: appIcons?.dummy1,
  },
  {
    img: appImages?.profile,
  },
  {
    img: appIcons?.dummy3,
  },
  {
    img: appImages?.profile,
  },

  {
    img: appIcons?.dummy,
  },
];

export const challengesparticipate = [
  {
    id: 0,
    icon: appIcons?.checkRight,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun',
  },
  {
    id: 1,

    icon: appIcons?.checkRight,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun',
  },
  {
    id: 2,

    icon: appIcons?.checkRight,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun',
  },
  {
    id: 3,

    name: 'Participated',
    multiImages: [
      {
        img: appImages?.profile,
      },
      {
        img: appIcons?.dummy,
      },
      {
        img: appIcons?.dummy1,
      },
      {
        img: appImages?.profile,
      },
      {
        img: appIcons?.dummy3,
      },
      {
        img: appImages?.profile,
      },

      {
        img: appIcons?.dummy,
      },
    ],
    userCount: '09 Users',
  },
  {
    id: 4,

    name: 'End Date',
    userCount: '12 03, 2012',
  },
];

export const goDetailsPops = [
  {
    id: 0,
    icon: appIcons?.editgoal,
    name: 'Edit Goal',
  },
  {
    id: 1,
    icon: appIcons?.deletegoal,
    name: 'Delete Goal',
  },
];
export const goChatPops = [
  {
    id: 0,
    icon: appIcons?.infogoal,
    name: 'Information',
  },
  {
    id: 2,
    icon: appIcons?.participategoal,
    name: 'Participants',
  },
  {
    id: 1,
    icon: appIcons?.leavegoals,
    name: 'Leave Discussion Board',
  },
];

export const homeCards = [
  {
    id: 0,
    name: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    status: 'Today',
    image: appImages?.sales,
  },
  {
    id: 1,
    name: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ',
    status: 'Today',
    image: appImages?.sales,
  },
  {
    id: 2,
    name: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    status: 'Today',
    image: appImages?.sales,
  },
  {
    id: 3,
    name: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    status: 'Today',
    image: appImages?.sales,
  },
  {
    id: 4,
    name: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    status: 'Today',
    image: appImages?.sales,
  },
];

export const topicsPosts = [
  {
    _id: '123',
    postid: '123',
    text: 'rrrBeautiful blog post',
    replies: [
      {
        _id: '123',
        userid: '123',
        commentid: '123',
        text: 'Reply text blog post',
        isdeleted: 0,
      },
      {
        _id: '123',
        postid: '123',
        text: 'Reply beautiful blog post',
        replies: [],
        isdeleted: 0,
      },
    ],
    isdeleted: 0,
  },
  {
    _id: '123',
    postid: '123',
    text: 'beautiful blog post',
    replies: [
      {
        _id: '123',
        userid: '123',
        commentid: '123',
        text: 'Reply text blog post',
        isdeleted: 0,
      },
      {
        _id: '123',
        postid: '123',
        text: 'Reply beautiful blog post',
        replies: [],
        isdeleted: 0,
      },
    ],
    isdeleted: 0,
  },
  {
    _id: '123',
    postid: '123',
    text: 'beautiful blog post',
    replies: [
      {
        _id: '123',
        userid: '123',
        commentid: '123',
        text: 'Reply text blog post',
        isdeleted: 0,
      },
      {
        _id: '123',
        postid: '123',
        text: 'Reply beautiful blog post',
        replies: [],
        isdeleted: 0,
      },
    ],
    isdeleted: 0,
  },
];

export const postData = [
  {

    _id: '123',
    userId: '123',
    username: 'Alexander',
    title: 'Recent New',
    description:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore',
    createAt: '12/12/2015',
    updatedAt: '12/12/2015',
  },
  {
    _id: '124',
    userId: '124',
    username: 'Hales',

    title: 'New News',
    description:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore',
    createAt: '12/12/2015',
    updatedAt: '12/12/2015',
  },
  {
    _id: '125',
    userId: '125',
    username: 'Mallow',

    title: 'Updated News',
    description:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore',
    createAt: '12/12/2015',
    updatedAt: '12/12/2015',
  },
];
