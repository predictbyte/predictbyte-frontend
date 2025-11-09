import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      

   {/* ------------------------footer---------------------- */}


<footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ animationDelay: "0.4s", animationName: "fadeInLeft;"}}>
                                <h3 className="f-title f_600 t_color f_size_18">PredictByte InfoSoft</h3>
                                <p>H 140, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309 </p>
                                <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                    <Link to="/contact"><button className="btn btn_get btn_get_two" style={{border:"solid black 2px"}} type="submit">Contact Us</button></Link>
                                    <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                    <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ animationDelay: "0.4s", animationName: "fadeInLeft;"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Company</h3>
                                <ul className="list-unstyled f_list">
                                    <Link to="/"><li><a>Home</a></li></Link>
                                    <Link to="/about"><li><a>About</a></li></Link>
                                    <Link to="/dev"><li><a>Service</a></li></Link>
                                    <Link to="/adaura"><li><a>Product</a></li></Link>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ animationDelay: "0.4s", animationName: "fadeInLeft;"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Legal</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Claim</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ animationDelay: "0.4s", animationName: "fadeInLeft;"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="https://www.facebook.com" className="fab fa-facebook"></a>
                                    <a href="https://www.linkedin.com/company/predictbyte-infosoft/?viewAsMember=true" className="fab fa-linkedin"></a>
                                    <a href="https://www.instagram.com/predictbyte.infosoft?igsh=OXoxcnJjdGtnd244" className="fab fa-instagram"></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© copy right.. 2025 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p> <i className="icon_heart"></i> <a href="http://cakecounter.com" target="_blank"></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    </div>
  )
}
