export const incrementCount = (payload) => {
  return {
    type: 'INCREMENT',
    payload,
  };
};

const goToServer = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000)
  })
};

export const incrementAsyncCounter = (payload) => {
  return (dispatch, getState) => {
    goToServer().then(() => {
      dispatch({
        type: 'ASYNC_INCREMENT',
        payload,
      });
    });
  };

  // return{
  //   type: 'INCREMENT',
  //   payload,
  // };
};
