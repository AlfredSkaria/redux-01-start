import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.STORE_RESULT:

            console.log('In reducer [store result]');
            return updateObject(state,{results: state.results.concat({id: new Date(), value: action.result * 2})});
            
        case actionTypes.DELETE_RESULT:
            //ANother way to remove item from array 
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, {results: updatedArray});
    }
    return state;
};

export default reducer;