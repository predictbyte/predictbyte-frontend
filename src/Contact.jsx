import React from 'react'

export default function Contact() {
  return (
    <div>

 <section className="contact_us">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="contact_inner">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="contact_form_inner">
                                    <div className="contact_field">
                                        <h3>Contact Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <input type="text" className="form-control form-group" placeholder="Name" />
                                        <input type="text" className="form-control form-group" placeholder="Email" />
                                        <textarea className="form-control form-group" placeholder="Message"></textarea>
                                        <button className="contact_form_submit">Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="right_conatct_social_icon d-flex align-items-end">
                                   <div className="socil_item_inner d-flex">
                                      <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                                     <li><a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true"><i className="fab fa-linkedin"></i></a></li>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_sec" style={{color:"#FFF"}}>
                            <h4>Contact Info</h4>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-headset"></i>
                                <span>+91 7302227370</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-envelope-open-text"></i>
                                <span>@PredictByte.com</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-map-marked-alt"></i>
                                <span>H-140 4 floor Office No-402,Sector 63, Noida, India-201305</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="predictbyte-map-section" className="map_section_unique" style={{ width: "100%", margin: 0, padding: 0 }}>
      <div className="map_container" style={{ width: "100%", height: "60vh" }}>
        <iframe
          title="PredictByte Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
          style={{
            border: "0",
            width: "100%",
            height: "100%",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

  
    </div>
  )
}
