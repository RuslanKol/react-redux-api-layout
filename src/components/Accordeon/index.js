import React, { useState } from 'react';

import { ReactComponent as TriangleArrow } from "../../images/triangle-arrow.svg";
import { ReactComponent as TriangleArrowActive } from "../../images/triangle-arrow-active.svg";

const Accordeon = props => {
    const [ onActive, setOnActive ] = useState(false);
    return(
        <div
            className="accordeon"
            onClick={() => setOnActive(!onActive)}
        >
            <div className="accordeon_top">
                {props.title}
                <div
                className={`arrow-${
                    onActive
                    ? "bottom"
                    : "top"
                }`}
                >
                    {onActive ? (
                        <TriangleArrowActive />
                    ) : (
                        <TriangleArrow />
                    )}
                </div>
            </div>
            <div className="accordeon_bottom">
                {onActive 
                ? 
                    <div>
                        <p className="accordeon_bottom_desc">{props.description}</p>
                        {props.workHrs 
                            ?  <div>
                                    {props.workHrs.map((item, index) => {
                                        return(
                                            <div className="accordeon_bottom_work-hrs" key={index}>
                                                <p><b>{item.day}</b></p>
                                                <p>Working day: {item.isWorkingDay ? "yes" : "no"}</p>
                                                <p>{item.workingHours[0]}, {item.workingHours[1]}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            :   null
                        }
                    </div>
                : null
                }
            </div>
        </div>
    )
}

export default Accordeon;