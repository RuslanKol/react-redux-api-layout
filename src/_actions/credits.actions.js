import { creditsConstants } from "../_constants";

import {
    getCredits
} from '../_api/credits';

export const getAllCredits = () => dispatch => {
    getCredits()
        .then(res => {
            dispatch({
                type: creditsConstants.GET_CREDITS,
                payload: res.data.data
            })
        })
        .catch(err => {
            
        })
}