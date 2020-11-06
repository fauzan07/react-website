import React, {useState} from 'react';

function Contact(props) {

  const [thankuMessage, SetThankuMessage] = useState(false);

  function formsubmit(e) {
    e.preventDefault();
            SetThankuMessage(true);
              setTimeout(() => {
                SetThankuMessage(false);
              }, 3000);
  
      e.target.reset();
  }

  return(
    <>
    <section className="topbanner text-white bg-dark-overlay">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center topban">
          <h1>Contact</h1>
          </div>
        </div>
      </div>
    </section>



  <section className="contact-text py-5">
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12 pt-3">
        <h2>Get in Touch</h2>
   
        <form onSubmit={formsubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control"  name="name" id="name" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email Address" required/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" maxlength="10" pattern="[789][0-9]{9}" name="mobile" id="mobile" placeholder="Your Mobile Number" required/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" maxlength="50" name="city" id="city" placeholder="Your City" required/>
                  </div>
                  <div className="form-group"><textarea className="form-control" placeholder="Your Message" id="exampleFormControlTextarea1" rows="3" maxlength="90" name="message"></textarea>
                  </div>
                  <p>Verify you're a human - Please enter the following code in the box below- 7102</p>
                  <div className="form-group"><input type="text" className="form-control" name="code" placeholder="" required/>
                  </div>
                  <div className="submit-button">
                      <button className="button web-btn" id="form-submit" name="submit" type="submit">Send Message</button>
                  </div>
                  {thankuMessage ? <span className="text-success text-center my-2">"Thank you for contacting us!"</span> : null}
              </form>
          </div>
          <div className="col-lg-6 col-md-12 pt-3">
          <h2 className="section-title">Our <span>Address</span></h2>
              <ul className="fa-ul">
                  <li className="mb-4"><span className="fa-li"><i className="fa fa-building"></i></span> 
                  <span className="add_text">2130 Fulton Street, San Diego, CA 94117-1080 USA</span>
                  </li>
                  <li className="mb-4"><span className="fa-li"><i className="fa fa-phone-square"></i></span> 
                  <span className="add_text">1-800-1234-567</span>
                  </li>
                  <li className="mb-4"><span className="fa-li"><i className="fa fa-envelope"></i></span> 
                  <span className="add_text">info@demolink.org</span>
                  </li>
              </ul>
              
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3153.574918681343!2d-122.45290738546568!3d37.77656427975912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2130%20fulton%20street%20san%20diego%20ca%2094117%201080!5e0!3m2!1sen!2sin!4v1594393998426!5m2!1sen!2sin" width="100%" height="400"  style={{border:0}} aria-hidden="false" ></iframe>
            
          </div>
        </div>
      </div>
    </section>
    </>
  
  );

}


export default Contact;
