import React, { useRef } from 'react';
import Button from '../../../components/Button';
import { connect } from "react-redux";
import { contactSendFeedback } from '../../../_actions/user.actions';

const SettingsContactUs = props => {
    const enquiryType = useRef(null);
    const comments = useRef(null);

    const handleSendFeedback = () => {
        props.sendFeedback(enquiryType.current.value, comments.current.value);
    }

    return (
        <div className="contact-us">
            <div className="contact-us__main">
                <div className="contact-us__main_cont">
                    <div className="contact-us__main_cont_contact-form">
                        <div className="contact-us__main_cont_contact-form_input">
                            <label htmlFor="enquiry">Type of Enquiry*</label>
                            <select
                                ref={enquiryType}
                                id="fulenquirylName"  
                            >
                                <option value="">Choose your type of enquiry</option>
                                <option value={1}>1</option>
                            </select>
                        </div>
                        <div className="contact-us__main_cont_contact-form_input">
                            <label htmlFor="comments">Comments</label>
                            <textarea
                                ref={comments}
                                id="comments"
                                placeholder="Tell about your enquiry"
                                rows="5"
                            > </textarea>
                        </div>

                        <div className="contact-us__main_cont_contact-form_file">
                            <p className="contact-us__main_cont_contact-form_file_title">Attachment</p>
                            <Button 
                                className="contact-us__main_cont_contact-form_file_file-btn"
                            >
                                UPLOAD File
                            </Button>
                            <Button 
                                onClick={handleSendFeedback}
                                className="contact-us__main_cont_contact-form_file_submit-btn"
                            > SEND US </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    sendFeedback: contactSendFeedback,
  };
  
  function mapStateToProps(state) {
    const { user } = state;
    return user;
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SettingsContactUs);