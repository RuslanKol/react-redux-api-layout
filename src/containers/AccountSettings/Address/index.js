import React, { useState } from 'react';
import { withRouter } from "react-router";

import { ReactComponent as EditIcon } from "../../../images/edit-icon.svg";
import { ReactComponent as PlusIcon } from "../../../images/plus-icon.svg";

const AddressTab = props => {

    let defaultAddress = 0;
    if(props.address) {
        defaultAddress = props.address.map(item => {
            if( item.isDefault === 1 ) { 
                return item.AddressId;
            }
        })
    }
    
    const [ activeAddress, setActiveAddress ] = useState(Number(defaultAddress));

    const goAddAdress= () => {
        props.history.push("/address");
    };

    return (
        <div className="account-settings__main_cont_address-block">
            <div className="account-settings__main_cont_address-block_add-new">
                <button
                className="account-settings__main_cont_add"
                onClick={goAddAdress}
                >
                add new <PlusIcon />
                </button>
            </div>
            {props.address && props.address.map(
                address => {
                return (
                    <div
                    className="account-settings__main_cont_address-block_address-cont"
                    key={address.AddressId}
                    >
                    <div className="account-settings__main_cont_address-block_address-cont_cont">
                        <div
                        className="radio-select"
                        onClick={() => 
                            { 
                                setActiveAddress(address.AddressId);
                                props.setDefaultAddress(address.AddressId);
                            }
                        }
                        >
                        <div
                            className={`radio-select_circle${
                            activeAddress === address.AddressId
                                ? "-active"
                                : ""
                            }`}
                        />
                        </div>
                        <div
                        className="account-settings__main_cont_address-block_address-cont_cont_address"
                        onClick={() => setActiveAddress(address.AddressId)}
                        >
                        <span className="account-settings__main_cont_address-block_address-cont_cont_address_name">
                            {address.AddressType}
                        </span>
                        <span className="account-settings__main_cont_address-block_address-cont_cont_address_other">
                            {address.AddressLine1},<br />
                            {address.AddressLine2},
                            {address.AddressLine3}
                            <br />
                            {address.AddressLine4},
                            {address.AddressLine5},
                            {address.AddressLine6},
                            {address.AddressLine7}
                            <br />
                            {address.AddressLine8}
                        </span>
                        </div>
                    </div>
                    <div className="account-settings__main_cont_address-block_address-cont_cont_edit">
                        <EditIcon />
                    </div>
                    </div>
                );
                }
            )}
            </div>
    )
}

export default withRouter(AddressTab);