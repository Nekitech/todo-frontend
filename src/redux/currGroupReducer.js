import data from '../assets/data';
import {SET_CURR_GROUP} from './types';

export const currGroupReducer = (state = data[0]?.idGroup, action) => {
    switch (action.type) {
        case SET_CURR_GROUP:
            return {currGroupId: action.payload}
        default:
            return state
    }
}