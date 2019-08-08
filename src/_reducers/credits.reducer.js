import { creditsConstants } from "../_constants";

const initialState = {};

export const credits = (state = initialState, action) => {
    switch (action.type) {
        case creditsConstants.GET_CREDITS: {
            return {
                goCreditList: action.payload.goCreditList,
                providerList: action.payload.providerList
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}