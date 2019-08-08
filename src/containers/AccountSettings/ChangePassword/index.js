import React, {useRef, useState} from 'react';

const ChangePassword = props => {
    const currentPass = useRef(null);
    const newPass = useRef(null);
    const repeatNewPass = useRef(null);
    const [ error, setError ] = useState(null);

    const checkMatchNewPassword = () => {
        if(newPass.current.value !== repeatNewPass.current.value) {
            setError("Passwords not match");
        } else {
            props.handleChangePassword(currentPass.current.value, newPass.current.value);
        }
    }

    return(
        <div className="account-settings__main_cont_edit-block">
            <div className="account-settings__main_cont_edit-block_input">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    ref={currentPass}
                    type="password"
                    placeholder="Enter your current password"
                />
            </div>
            <div className="account-settings__main_cont_edit-block_input">
                <label htmlFor="new_password">New Password</label>
                <input
                    id="new_password"
                    ref={newPass}
                    type="password"
                    placeholder="Enter your new password"
                />
            </div>
            <div className="account-settings__main_cont_edit-block_input">
                <label htmlFor="confirm_new_password">
                Confirm New Password
                </label>
                <input
                    ref={repeatNewPass}
                    id="confirm_new_password"
                    type="password"
                    placeholder="Confirm new password"
                />
            </div>
            <button 
                className="account-settings__main_cont_save"
                onClick={checkMatchNewPassword}
            >
                change
            </button>
            <p>{error}</p>
        </div>
    )
}

export default ChangePassword;