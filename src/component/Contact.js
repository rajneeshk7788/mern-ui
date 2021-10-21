import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="content-info">
                <div className="container-fluid " id="signini">
                    <div className="row">
                        <div className="About">
                            {/* fhone */}
                            <div className="contact_info_item  ">
                                <i className="zmdi zmdi-account-box-phone zmdi-hc-2x"></i>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        <u>Phone</u>
                                    </div>
                                    <div className="number">
                                        +917894285257
                                    </div>
                                </div>

                            </div>

                            <div className="contact_info_item ">
                                <i className="zmdi zmdi-account-box-mail zmdi-hc-2x"></i>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        <u>Email</u>
                                    </div>
                                    <div className="number">
                                        jdsfa1213@gmail.com
                                    </div>
                                </div>

                            </div>

                            <div className="contact_info_item ">
                                <i className="zmdi zmdi-accounts-list zmdi-hc-2x"></i>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        <u>Address</u>
                                    </div>
                                    <div className="number">
                                        Satna_Madhya_Pradesh.
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>


            </div>

            {/* Contact Us Form */}

            <div className=" contact_sform">
                <div className="container_s">
                    <div className="rows">
                        <div className="col-lg-10 offset-lg-1">
                            <h2>Get In Tuch</h2>
                        </div>
                        <form id="contact_form">

                            <div className="contact_form_name f-flex justify-content-between align-item-between">
                                <input type="text" id="contact_form_name"  className="contact_form_name"
                                    placeholder="Your Name" required="true"
                                />

                                <input type="email" id="contact_form_email" className="contact_form_email"
                                    placeholder="Your Email" required="true"
                                />

                                <input type="number" id="contact_form_number" className="contact_form_number"
                                    placeholder="Your number" required="true"
                                />
                            </div>

                            <div className="contact_form_text">
                                <textarea className="text_field contact_form_massage" placeholder="Massage" ></textarea>
                            </div>

                            <div className="contact_form_button">
                                <button type="submit" className="button content_submit_button">Send Massage</button> 

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Contact;