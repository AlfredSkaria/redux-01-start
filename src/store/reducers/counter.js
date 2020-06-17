import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.INCREMENT:
            //A different approach of copying the state into a new object
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
            
        case actionTypes.DECREMENT:
            return {
            //Using the spread operator. It will give us a new object
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
    }
    return state;
};

export default reducer;