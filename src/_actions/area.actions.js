import { areaConstants } from "../_constants";
import { getArea } from "../_api/area";

//GET AREAS
export const getAreas = () => dispatch => {
    getArea()
        .then(res => {
            console.log(res);
            dispatch({
                type: areaConstants.GET_AREAS,
                payload: res.data.data
            })
        })
        .catch(err => {
            console.log(err);
        })
}