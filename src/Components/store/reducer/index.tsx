const initialState = {
  numberOfCake: 20,
  cakeNo: 0,
};
const BUY_CAKE = "BUY_CAKE";
const CAKENUMBER = "CAKE_NUMBER";

const CakeReducer = (state = initialState, action: any) => {
  console.log("okkk", action);
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.payload,
      };
    case CAKENUMBER:
      return {
        ...state,
        cakeNo: action.payload,
      };
    default:
      return state;
  }
};

export default CakeReducer;
