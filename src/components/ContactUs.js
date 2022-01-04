import React from 'react';
import "./Contact.css"
function ContactUs() {
    return (
        <div>
           <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form >
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <input type="text" className='form-control' placeholder="Your Name *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *"  />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *"  />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact"  />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *"></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
        </div>
    )
}

export default ContactUs
