import React from 'react'
import { Link } from 'react-router-dom';

export default function Dev() {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row align-items-center"
        style={{
          background: "linear-gradient(135deg, #f8fbff, #eaf3ff)"
        }}
      >
        {/* Left Content */}
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="fw-bold display-5">
            <span className="text-primary">Web-Development Excellence:
            </span>{" "}
            <br /> Solutions for a Smarter Future
          </h1>
          <p className="text-muted mt-3">
            Full Stack Development empowers your business with both an engaging frontend and a powerful backend. While the frontend creates intuitive, responsive, and visually appealing interfaces for an exceptional user experience, the backend ensures seamless performance, secure data handling, and scalable solutions. Together, they deliver end-to-end digital products tailored to your needs.
          </p>
          <Link to="/enroll"><button className="btn btn-primary btn-lg mt-3">
            Consult Now →
          </button></Link>

          {/* Impact Section */}
          <div className="mt-5">
            <h5 className="fw-semibold ms-4">Our Impact and Recognition</h5>
            <div className="d-flex flex-wrap gap-4 mt-3">
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTguODcgNzYuMTUiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNGI0YjRiO30uY2xzLTJ7ZmlsbDojNmZkYTQ0O30uY2xzLTN7Zm9udC1zaXplOjE1LjYzcHg7Zm9udC1mYW1pbHk6UG9wcGlucy1TZW1pQm9sZCwgUG9wcGlucztmb250LXdlaWdodDo2MDA7fS5jbHMtNHtmb250LWZhbWlseTpQb3BwaW5zLU1lZGl1bSwgUG9wcGlucztmb250LXdlaWdodDo1MDA7fS5jbHMtNXtmb250LWZhbWlseTpQb3BwaW5zLVJlZ3VsYXIsIFBvcHBpbnM7Zm9udC13ZWlnaHQ6NDAwO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05Ny40OSwxMi4wNmE5LjM4LDkuMzgsMCwxLDAsOS4zLDkuMzMsOS4zMiw5LjMyLDAsMCwwLTkuMy05LjMzWk05Ny41NiwyN2E1LjQ0LDUuNDQsMCwwLDEtMy44OS05LjI3LDUuNTMsNS41MywwLDAsMSwzLjg0LTEuNjFBNS40MSw1LjQxLDAsMCwxLDEwMywyMS41Miw1LjU4LDUuNTgsMCwwLDEsOTcuNTYsMjdabTIwLjU1LTEwLjUxYTQuNzksNC43OSwwLDAsMC00LjcyLDQuODhsMCw4LjkxLTQuMDUsMC0uMDgtMTcuNzFoNHYyLjc3YTYuNDUsNi40NSwwLDAsMSw1LjItMi44aDEuMTVsMCwzLjkzWm0tNDAuNC0zLjc0LDMuMDcsMTIuMTNMODQsMTIuNzFsNC4wNSwwTDgzLDMwLjQybC0zLjkzLDBMNzUuODksMTguMDgsNzIuODIsMzAuNDdsLTMuOTMsMEw2My42LDEyLjgxbDMuOTMsMCwzLjUzLDEyLjE0LDIuODMtMTIuMTdabTUzLjg0LDcuODRhOS40Miw5LjQyLDAsMCwwLDQuNy04LjEybC00LjA1LDBhNS4zOSw1LjM5LDAsMCwxLTUuMjksNS40NmgtLjU4bC0uMDctMTQtNC4wNSwwLC4xMywyNi4yNyw0LDAsMC04LjMzaC40NmExLjA4LDEuMDgsMCwwLDEsMSwuNTdsNS43LDcuNzIsNC43NCwwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjIyLDEyLjI3Yy00LjM5LDAtNy43MywyLjkzLTksNy41NmE0MS4xNCw0MS4xNCwwLDAsMS00LjY3LTEwbC00LjYzLDBMMzYsMjIuMDdhNC40LDQuNCwwLDEsMS04Ljc5LDBMMjcuMTQsOS44NWwtNC42MywwLC4wNiwxMi4yNmE5LDksMCwxLDAsMTgtLjA4VjIwQTM5LjM5LDM5LjM5LDAsMCwwLDQ0LDI1LjVMNDEuMTYsMzkuMDVsNC43NCwwLDItOS44NEExMS43MSwxMS43MSwwLDAsMCw1NC4zMSwzMWE5LjM3LDkuMzcsMCwwLDAtLjA5LTE4Ljc0Wm0uMDcsMTRhOC4yOCw4LjI4LDAsMCwxLTUuMjItMi4wNmwuNDYtMS44NXYtLjExYy4zNC0yLDEuMzYtNS4zMyw0LjgzLTUuMzRBNC42Myw0LjYzLDAsMCwxLDU5LDIxLjVhNC45Myw0LjkzLDAsMCwxLTQuNzIsNC43N1oiLz48dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDEgNzIuMTkpIj44OCU8dHNwYW4gY2xhc3M9ImNscy00IiB4PSIzMy4wNiIgeT0iMCI+IDwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNSIgeD0iMzcuMTIiIHk9IjAiPlN1Y2Nlc3MgU2NvcmU8L3RzcGFuPjwvdGV4dD48L3N2Zz4="
                  alt="Upwork"
                  style={{ height: "60px" }}
                />

              </div>
              <div>
                <img
                  src="https://www.appsquadz.com/assets/clutch-DNZQvahN.svg"
                  alt="Clutch"
                  style={{ height: "60px" }}
                />

              </div>
              <div>
                <img
                  src="https://www.appsquadz.com/assets/goodfirms-CujSIQkZ.svg"
                  alt="GoodFirms"
                  style={{ height: "60px" }}
                />

              </div>
              <div>
            

              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="col-lg-6 text-center mt-5 mt-lg-0">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/011/153/360/small_2x/3d-web-developer-working-on-project-illustration-png.png"
            alt="AI Robot" className="img-fluid" />

        </div>
      </div>
      <br />
      <br />
    

      {/* part 3 */}

      <div className="container d-flex flex-column justify-content-center align-items-center text-center py-5">
        
        
          
        <section className="about py-5" id="about">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left Image */}
      <div className="col-md-6 text-center mb-4 mb-md-0">
        <figure className="about-banner">
          <img
            src="https://i.postimg.cc/BvcVnF2n/about-banner-2.png"
            alt="SEO Illustration"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </figure>
      </div>

      {/* Right Content */}
      <div className="col-md-6">
        <div className="about-content text-center text-md-start">
  <h2 className="section-title fw-bold mb-3">
    Build Powerful Digital Experiences with Modern Web Development
  </h2>

  <p className="section-text text-muted mb-3">
    Transform your online presence with high-performing, visually stunning, and fully responsive websites. 
    We create digital platforms that not only look amazing but deliver seamless user experiences and measurable business results.
  </p>

  <p className="section-text text-muted">
    From custom front-end design to full-stack development and cloud integration — 
    our expert developers craft fast, secure, and scalable websites tailored to your brand vision and growth goals.
  </p>
</div>

      </div>

    </div>
  </div>
</section>

<h1 className="fw-bold display-5">
          Our Development Expertise
        </h1>
      </div>

      {/* Services Section */}
      <div className="container my-5">
        <div className="row g-4">

          {/* Service Cards Section */}
<div className="row g-4 text-center">
  {/* Card 1 */}
  <div className="col-sm-3">
    <div className="service-card p-4 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
      <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
        Custom Web Application Development
      </h5>
      <p className="text-muted mb-0">
        Work with the latest front-end technologies to create eye-pleasing and responsive user experiences. Combine your ideas and vision with expert development capabilities to deliver goal-driven solutions.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="col-sm-3">
    <div className="service-card p-4 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
      <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
        Responsive and Mobile-First Design
      </h5>
      <p className="text-muted mb-0">
        Our single page app development services revolve around using the best front-end technologies and development methodologies. Build power-packed SPAs with modern features and game-changing functionalities.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="col-sm-3">
    <div className="service-card p-4 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
      <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
        Content Management System (CMS) Development
      </h5>
      <p className="text-muted mb-0">
        Create highly secure and scalable PWA apps from the ground up that look and feel like mobile apps, reduce development time and money, and work seamlessly across all platforms and devices.
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="col-sm-3">
    <div className="service-card p-4 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
      <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
        Legacy Frontend Modernization
      </h5>
      <p className="text-muted mb-0">
        Our vetted front end developers complement the power of your web app with an equally appealing and intuitive user interface that converts potential leads into customers and boosts the growth funnel.
      </p>
    </div>
  </div>

  {/* Card 5 */}
  <div className="col-sm-3">
    <div className="service-card p-4 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
      <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
        Custom Backend Development
      </h5>
      <p className="text-muted mb-0">
        Our custom backend solutions are tailored to meet unique business needs. They provide flexibility, enhance performance, and ensure efficient workflows specific to your application's requirements.
      </p>
    </div>
  </div>

  {/* Card 6 */}
  <div className="col-sm-3">
    <div className="service-card p-4 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
      <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
        API Development and Integration
      </h5>
      <p className="text-muted mb-0">
        Predict Byte Infosoft specializes in building and integrating custom APIs to ensure seamless communication between applications, systems, and third-party services. This helps businesses enhance functionality and simplify complex processes.
      </p>
    </div>
  </div>

  {/* Card 7 */}
  <div className="col-sm-3">
    <div className="service-card p-4 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
      <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
        Payment System Integration
      </h5>
      <p className="text-muted mb-0">
        We provide secure integration of payment gateways into your application, enabling smooth transactions, multi-currency support, and compliance with industry standards for a seamless user experience.
      </p>
    </div>
  </div>

  {/* Card 8 */}
  <div className="col-sm-3">
    <div className="service-card p-4 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
      <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
        Enterprise Backend Solutions
      </h5>
      <p className="text-muted mb-0">
        Ensure the longevity and efficiency of your backend systems with our comprehensive maintenance and support services, including updates, troubleshooting, and performance optimization.
      </p>
    </div>
  </div>
</div>


        </div>
      </div>
      {/* CTA Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#f5f9ff" }}>
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="fw-bold">
                <span style={{ borderLeft: "4px solid #ff6600", paddingLeft: "10px" }}>
                  Embrace the Future of Innovation
                </span>
                <br />
                with Generative AI. Consult Now!
              </h2>
              <p className="text-muted mt-3">
                Explore how our Generative AI services can drive innovation and growth
                for your organization.
              </p>
            </div>

            {/* Right Content */}
            <div className="col-lg-4 text-lg-end text-center">
              <div className="d-flex flex-column align-items-lg-end align-items-center">
                <div className="mb-2 d-flex align-items-center">
                  <i className="fa-solid fa-phone-waveform"></i>
                  <div>
                    <p className="mb-0 fw-semibold">Reach Out Now</p>
                    <a href="tel:+919711440630" className="fw-bold text-primary">
                      +91-7302227370
                    </a>
                  </div>
                </div>
                <Link to="/contact"><button className="btn btn-primary mt-3">
                  Contact Us <i className="bi bi-arrow-right ms-1"></i>
                </button></Link>
              </div>
            </div>

          </div>
        </div>
      </div>
     
      {/* Why Choose Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#f8fbff" }}>
        <div className="container text-center">

          {/* Heading */}
          <h2 className="fw-bold mb-3">
            Why Choose Predict Byte Infosoft for Your Full stack Development Needs?
          </h2>
          <p className="text-muted mb-5">
            We stand out in  development by delivering secure, scalable, and custom solutions tailored to your business needs.
          </p>

          {/* Features Grid */}
          <div className="row text-start g-4">

            <div className="col-md-6 d-flex">
              <i className="bi bi-award fs-1 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold">Proven Expertise</h5>
                <p className="text-muted">
                  Our expert team has extensive experience in building backend systems that serve as the backbone of digital platforms across various industries.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-gear-wide-connected fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold">Future-Ready Solutions</h5>
                <p className="text-muted">
                  We prioritize building scalable and secure backend solutions. This ensures application growth alongside the business.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-lightbulb fs-1 text-danger me-3"></i>
              <div>
                <h5 className="fw-bold">Speed & Efficiency</h5>
                <p className="text-muted">
                  Experience faster development cycles and optimized performance with our agile methodologies and expertise.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-box-seam fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold">Client-Centric Approach</h5>
                <p className="text-muted">
                  We deliver custom solutions to each of our clients and focus on meeting their specific goals.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-headset fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold">Comprehensive Support</h5>
                <p className="text-muted">
                  predictbyte delivers end-to-end assistance, from development to maintenance, that too, round-the-clock.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-cpu fs-1 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold">Security First</h5>
                <p className="text-muted">
                  With robust encryption and compliance measures, we safeguard your data against potential threats.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FAQS section */}

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
        <div className="row g-4">

          <div className="col-sm-6">
            <div className="d-flex align-items-start">
              <div
                className="icon-box bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div>
                <h5 className="fw-bold">What is Full Stack Development and why is it important?</h5>
                <p className="text-muted">
                  Full Stack Development covers both frontend (user interface) and backend (server, database, and logic) of an application. It is important because it allows businesses to build complete, scalable, and efficient digital solutions without depending on multiple resources separately.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="d-flex align-items-start">
              <div
                className="icon-box bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div>
                <h5 className="fw-bold">Which technologies do you use for frontend development?</h5>
                <p className="text-muted">
                  For frontend development, we use modern tools like React, Angular, and Vue.js along with HTML, CSS, and JavaScript to create responsive, user-friendly, and visually appealing interfaces that enhance the user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="d-flex align-items-start">
              <div
                className="icon-box bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ width: "50px", height: "50px" }}
              >
               <i class="fa-solid fa-plus"></i>
              </div>
              <div>
                <h5 className="fw-bold">How do you ensure the security of backend systems?</h5>
                <p className="text-muted">
                  We implement secure coding practices, authentication & authorization mechanisms, encryption, and regular testing. Additionally, we use robust frameworks and cloud platforms that meet industry security standards to ensure the safety of data and applications.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="d-flex align-items-start">
              <div
                className="icon-box bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ width: "50px", height: "50px" }}
              >
                <i class="fa-solid fa-plus"></i>
              </div>
              <div>
                <h5 className="fw-bold">How is Gen AI different from other types of AI?</h5>
                <p className="text-muted">
                  At AppSquadz, we provide end-to-end development services with expertise in both frontend and backend. Our team ensures visually engaging UI, secure backend systems, scalability, and performance, delivering solutions that match your business goals and user needs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}
