const Logger = (state) => (next) => (action) => {
  console.log("currentState =>", state.getState());
  console.log("Action =>", action);
  next(action);
  console.log("nextState =>", state.getState());
};
export default Logger;