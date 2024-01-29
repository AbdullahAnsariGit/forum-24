import passwordValidator  from 'password-validator';

export const loginValidation = (email, password) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) {
    return {
      success: false,
      message: 'Please type your email',
    };
  } else if (reg.test(email) === false) {
    return {
      success: false,
      message: 'This is not valid email',
    };
  } else if (password === '') {
    return {
      success: false,
      message: 'Please type your password',
    };
  } else {
    return {
      success: true,
      message: '',
    };
  }
};
export const signUpValidation = (email, password, name) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!name) {
    return {
      success: false,
      message: 'Please type your name',
    };
  } else if (name && name.length < 4) {
    return {
      success: false,
      message: 'Name must be greater than 4 characters',
    };
  } else if (!email) {
    return {
      success: false,
      message: 'Please type your email',
    };
  } else if (reg.test(email) === false) {
    return {
      success: false,
      message: 'This is not valid email',
    };
  } else if (password === '') {
    return {
      success: false,
      message: 'Please type your password',
    };
  } else if (password.length < 6) {
    return {
      success: false,
      message: 'Password must be greater than 5 characters',
    };
  } else {
    return {
      success: true,
      message: '',
    };
  }
};

export const forgetValidation = (email, password) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) {
    return {
      success: false,
      message: 'Please type your email',
    };
  } else if (reg.test(email) === false) {
    return {
      success: false,
      message: 'This is not valid email',
    };
  } else {
    return {
      success: true,
      message: '',
    };
  }
};

export const addMobValidation = phone => {
  let reg = /^(\+|\d)[0-9]{7,16}$/;

  if (!phone) {
    return {
      success: false,
      message: 'Please type your mobile number',
    };
  } else if (reg.test(phone) === false) {
    return {
      success: false,
      message: 'This is not valid mobile',
    };
  } else {
    return {
      success: true,
      message: '',
    };
  }
};

export const schema = new passwordValidator();

// Add properties to it
schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()
  .has()
  .symbols();
