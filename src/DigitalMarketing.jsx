import React from "react";

export default function DigitalMarketing() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="container-fluid py-5 bg-light">
        <div
          className="row align-items-center"
          style={{
            background: "linear-gradient(135deg, #f8fbff, #eaf3ff)",
          }}
        >
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold display-5">
              Maximize Your Online Potential with
              <span className="text-primary">
                Digital Marketing Solutions
              </span>{" "}
              <br />
            </h1>
            <p className="text-muted mt-3">
              Build your online brand presence in today's competitive digital
              landscape and generate revenue through effective digital marketing
              services.
            </p>
            <button className="btn btn-primary btn-lg mt-3">
              Consult Now →
            </button>

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
                <div></div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/297/142/non_2x/illustration-of-digital-marketing-in-social-media-platform-free-png.png"
              alt="AI Robot"
              className="img-fluid"
            />
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* CTA Section */}
      <section className="pricing py-5" id="pricing">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Text Section */}
            <div className="col-md-6 text-center text-md-start">
              <div className="pricing-content">
                <h2 className="section-title fw-bold mb-3">
                  One brilliant idea for every client
                </h2>

                <p className="section-text text-muted mb-4">
                  We understand each client's unique needs, challenges, and
                  aspirations by crafting a strategy that sparks innovation and
                  delivers exceptional results.
                </p>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <figure className="pricing-banner">
                <img
                  src="https://i.postimg.cc/FKNQpNZ1/pricing-banner.png"
                  alt="Pricing Illustration"
                  className="img-fluid"
                  style={{ maxWidth: "90%", height: "auto" }}
                />
              </figure>
            </div>

            {/* Service Cards Section */}
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-sm-4">
                <div className="service-card p-4 h-100 bg-light rounded shadow-sm text-center d-flex flex-column justify-content-center align-items-center">
                  <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
                    Search Engine Optimization (SEO)
                  </h5>
                  <p className="text-muted mb-0">
                    Achieve top rankings on search engines and increase organic
                    traffic with advanced on-page, off-page, and technical SEO
                    solutions tailored to your industry.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-sm-4">
                <div className="service-card p-4 h-100 bg-light rounded shadow-sm text-center d-flex flex-column justify-content-center align-items-center">
                  <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
                    Pay-Per-Click Management Services
                  </h5>
                  <p className="text-muted mb-0">
                    Get instant results with our pay-per-click (PPC)
                    advertising. We optimize campaigns across platforms like
                    Google Ads, Bing Ads, LinkedIn, Quora, and X to deliver
                    maximum ROI.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-sm-4">
                <div className="service-card p-4 h-100 bg-light rounded shadow-sm text-center d-flex flex-column justify-content-center align-items-center">
                  <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
                    Social Media Marketing
                  </h5>
                  <p className="text-muted mb-0">
                    Businesses should utilize the power of social media
                    platforms to build brand awareness, foster engagement, and
                    create a loyal customer base.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-sm-4">
                <div className="service-card p-4 h-100 bg-light rounded shadow-sm text-center d-flex flex-column justify-content-center align-items-center">
                  <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
                    Content Marketing Services
                  </h5>
                  <p className="text-muted mb-0">
                    Tell your story with compelling content. We create blogs,
                    videos, infographics, and more to attract, educate, and
                    convert your audience.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-sm-4">
                <div className="service-card p-4 h-100 bg-light rounded shadow-sm text-center d-flex flex-column justify-content-center align-items-center">
                  <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
                    Brand Reputation Management
                  </h5>
                  <p className="text-muted mb-0">
                    Protect and enhance your brand image with proactive
                    reputation management strategies. We monitor online
                    sentiment and address concerns to maintain positivity.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-sm-4">
                <div className="service-card p-4 h-100 bg-light rounded shadow-sm text-center d-flex flex-column justify-content-center align-items-center">
                  <h5 className="fw-bold mb-3" style={{ color: "#000" }}>
                    360° Performance Management
                  </h5>
                  <p className="text-muted mb-0">
                    Optimize your overall digital marketing efforts with a
                    holistic approach, analyzing and refining strategies for
                    sustained growth, enhanced performance, and measurable
                    outcomes across all channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f8fbff" }}
      >
        <div className="container text-center">
          {/* Heading */}
          <h2 className="fw-bold mb-3">
            Why Predict Byte Infosoft Should be your Ultimate Choice for Digital
            Marketing Services?
          </h2>
          <p className="text-muted mb-5">
            We deliver customized, innovative, and result-driven digital
            marketing solutions, backed by expertise, transparency, and
            cutting-edge technologies.
          </p>

          {/* Features Grid */}
          <div className="row text-start g-4">
            <div className="col-md-6 d-flex">
              <i className="bi bi-award fs-1 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold">Proven Expertise</h5>
                <p className="text-muted">
                  We have a team of certified and experienced digital marketers
                  to utilize the tools and technologies for enhancing your brand
                  and generating leads.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-gear-wide-connected fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold">Transparency</h5>
                <p className="text-muted">
                  We believe in being completely transparent with our clients
                  and share detailed reporting and regular updates for clarity.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-lightbulb fs-1 text-danger me-3"></i>
              <div>
                <h5 className="fw-bold">Value-Based Pricing</h5>
                <p className="text-muted">
                  We offer flexible packages based on specific requirements and
                  service needs, which are designed to maximize your marketing
                  investment.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-box-seam fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold">Tailored Strategies</h5>
                <p className="text-muted">
                  Our experts focus on creating tailored strategies for your
                  business goals to enhance your performance in a limited time
                  period.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-headset fs-1 text-warning me-3"></i>
              <div>
                <h5 className="fw-bold">Innovative Tools</h5>
                <p className="text-muted">
                  Our team has hands-on experience with the latest technologies
                  and tools for maximum efficiency in digital marketing
                  services.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <i className="bi bi-cpu fs-1 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold">Dedicated Success Partnership</h5>
                <p className="text-muted">
                  We not only just deliver the services, but we become an
                  extension of your team, committed to your long-term growth and
                  success.
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
                <h5 className="fw-bold">
                  Does each industry need digital marketing services to ace?
                </h5>
                <p className="text-muted">
                  It is not necessary for every industry to invest in digital
                  marketing services. It entirely depends on the target audience
                  of a business. You can consult our experts for service
                  assessment and identify your needs.
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
                <h5 className="fw-bold">
                  What is the cost of digital marketing services?
                </h5>
                <p className="text-muted">
                  Digital marketing service costs vary largely as they depend on
                  the scope and the services required. You can reach out to our
                  team to get a detailed quote.
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
                <h5 className="fw-bold">
                  Does AppSquadz offer customized digital marketing packages?
                </h5>
                <p className="text-muted">
                  Yes, we have designed a range of digital marketing packages
                  based on your specific requirements and objectives.
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
                <h5 className="fw-bold">
                  How do you measure success in campaigns?
                </h5>
                <p className="text-muted">
                  The campaign success can be measured by tracking Key
                  Performance Indicators (KPIs) such as website traffic,
                  conversions, lead generation, and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
