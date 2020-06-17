import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            //ANother way to remove item from array 
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return{
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;