export let ToastError = message => {
  return {
    type: 'error',
    position: 'top',
    text1: message,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
  };
};
export let ToastSuccess = message => {
  return {
    type: 'success',
    position: 'top',
    text1: message,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
  };
};
