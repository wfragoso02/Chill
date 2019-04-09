import { RECEIVE_ALL_PROFILES, RECEIVE_PROFILE, REMOVE_PROFILE }from '../actions/profile_actions';
import { merge } from 'lodash';

const profileReducer = (state ={}, action) => {
    let newState;
    Object.freeze(state);
    switch(action.type){
        case REMOVE_PROFILE:
        newState = merge({}, state)
        debugger
            delete newState[action.payload.profile.id]
            return newState;
        case RECEIVE_ALL_PROFILES:
            return action.profiles;
        case RECEIVE_PROFILE:
            return merge({}, state, {[action.payload.profile.id]: action.payload.profile});
        default:
            return state;
    }
};


export default profileReducer;