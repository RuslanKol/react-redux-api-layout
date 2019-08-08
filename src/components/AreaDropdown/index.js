import React from 'react';
import Button from '../Button';

import { ReactComponent as MainLocIcon } from '../../images/main_loc.svg';
import { ReactComponent as SecLocIcon } from '../../images/secondary_loc.svg';

const AreaDropdown = props => {
    return (
        <div 
            className={`location-field_areas ${
            props.isShowAreas
            ? "active"
            : ""
            }`}
        >
            {props.areas.map((el,index) => {
            return (
                <div className="location-field_areas_item">
                    <p className="location-field_areas_item_main-loc"><MainLocIcon /> {el.CategoryArea}</p> 
                    <div>
                        {el.Areas.split(',').map((area,index) => (
                            <Button 
                                className="location-field_areas_button"
                                onClick={() => props.areaClick(area)}
                                key={index}
                            >
                                <p><SecLocIcon /> {area}</p>
                            </Button>
                        ))}
                    </div>
                </div>
            )   
            })}
        </div>
    )
}

export default AreaDropdown;