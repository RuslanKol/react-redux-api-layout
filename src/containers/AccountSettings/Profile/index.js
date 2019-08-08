import React, { useState, useRef } from 'react';

const gender = {
    MALE: "Male",
    FEMALE: "Female"
};

const ProfileTab = props => {

    const [userSex, setUserSex] = useState(gender.MALE);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const mobile = useRef(null);

    return(
        <div className="account-settings__main_cont_edit-block">
            <div className="account-settings__main_cont_edit-block_input">
                <label htmlFor="firstName">First name</label>
                <input
                id="firstName"
                ref={firstName}
                defaultValue={props.user.firstName}
                type="text"
                placeholder="John"
                />
            </div>
            <div className="account-settings__main_cont_edit-block_input">
                <label htmlFor="lastName">Last name</label>
                <input
                id="lastName"
                ref={lastName}
                defaultValue={props.user.lastName}
                type="text"
                placeholder="Doe"
                />
            </div>
            <div className="account-settings__main_cont_edit-block_input">
                <label htmlFor="email">Email</label>
                <input
                id="email"
                defaultValue={props.user.userName}
                type="email"
                placeholder="johndoe@gmail.com"
                disabled
                />
            </div>
            <div className="account-settings__main_cont_edit-block_input">
                <label htmlFor="phone">Phone Number</label>
                <input
                id="phone"
                ref={mobile}
                defaultValue={props.user.phone}
                type="number"
                placeholder="974 1234567890"
                />
            </div>
            <div className="account-settings__main_cont_edit-block_input">
                <label>Gender</label>
                <div className="account-settings__main_cont_edit-block_input_select">
                <div
                    className="radio-select"
                    onClick={() => setUserSex( gender.MALE )}
                >
                    <div
                    className={`radio-select_circle${
                        userSex === gender.MALE
                        ? "-active"
                        : ""
                    }`}
                    />
                    <span className="radio-select_text">Male</span>
                </div>
                <div
                    className="radio-select"
                    onClick={() => setUserSex( gender.FEMALE )}
                >
                    <div
                    className={`radio-select_circle${
                        userSex === gender.FEMALE
                        ? "-active"
                        : ""
                    }`}
                    />
                    <span className="radio-select_text">Female</span>
                </div>
                </div>
            </div>
            <button 
                onClick={() => props.handleUpdateProfile(firstName.current.value, lastName.current.value, mobile.current.value)}
                className="account-settings__main_cont_save"
            >
                save
            </button>
        </div>
    )
}

export default ProfileTab;