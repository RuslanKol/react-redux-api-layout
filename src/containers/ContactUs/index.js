import React from 'react';
import Footer from "../../components/Footer";
import Button from '../../components/Button';

class ContactUs extends React.Component {
    render() {
        return(
            <div className="app bg-pink">
                <div className="contact-us">
                    <div className="orders__sidebar">
                        <div className="orders__sidebar_title">
                            <div className="orders__sidebar_title_container">
                                <span className="orders__sidebar_title_container_text">
                                Contact Us
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us__main">
                        <div className="contact-us__main_cont">
                            <div className="contact-us__main_cont_contact-form">
                                <div className="contact-us__main_cont_contact-form_input">
                                    <label for="enquiry">Type of Enquiry*</label>
                                    <select
                                       id="fulenquirylName"  
                                    >
                                        <option value="">Choose your type of enquiry</option>
                                    </select>
                                </div>
                                <div className="contact-us__main_cont_contact-form_input">
                                    <label for="comments">Comments</label>
                                    <textarea
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
                                        className="contact-us__main_cont_contact-form_file_submit-btn"
                                    > SEND US </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactUs;