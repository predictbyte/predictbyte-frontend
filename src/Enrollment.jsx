import React from 'react'
import { Link } from 'react-router-dom';

export default function Enrollment() {

    // FAQ Toggle
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Calendly Integration
function openDemoModal() {
    if (typeof Calendly !== 'undefined') {
        Calendly.initPopupWidget({url: 'https://calendly.com/d/cnp9-6pt-cqw?hide_gdpr_banner=1&primary_color=ff621a'});
    }
    return false;
}

// Smooth Scroll to Enrollment
function scrollToEnroll() {
    const enrollSection = document.getElementById('enrollment');
    enrollSection.scrollIntoView({ behavior: 'smooth' });
}

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe elements for animation
    document.querySelectorAll('.benefit-card, .step-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimations();
    
    // Add floating animation to pricing card
    const pricingCard = document.querySelector('.pricing-card-float');
    if (pricingCard) {
        let scrollY = 0;
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
            const offset = Math.sin(scrollY * 0.01) * 10;
            pricingCard.style.transform = `translateY(${offset}px)`;
        });
    }
});

// Track CTA button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('CTA clicked:', buttonText);
        // In production, send analytics event
    });
});

    
  return (
    <div>
   
<section className="hero d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center justify-content-center text-center text-lg-start">
      
      {/* Text Content */}
      <div className="col-lg-6 col-md-10 hero-content">
        <h1 className="fw-bold mb-3">
          <span className="highlight">PredictByte LMS</span><br />
          Learning Made Simple, Smart & Scalable
        </h1>

        <p className="hero-subtitle mb-4">
          Empower your institute with a modern learning platform designed for seamless course delivery, student engagement, and real-time progress tracking — all in one place.
        </p>

        <div className="switching-headline mb-4">
          We Make Onboarding Effortless!
        </div>

        <div className="cta-buttons d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
          <Link to="/contact">
            <button className="btn btn-primary">
              <i className="fas fa-graduation-cap"></i> Get Started Today
            </button>
          </Link>

          <Link to="https://cal.com/predictbyte/30min?overlayCalendar=true">
            <button className="btn btn-secondary">
              <i className="fas fa-chalkboard-teacher"></i> Schedule a FREE Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="col-lg-6 col-md-10 mt-5 mt-lg-0 hero-image text-center">
        <img
          src="image-Photoroom (34).png"
          alt="PredictByte LMS"
          className="img-fluid"
        />
      </div>

    </div>
  </div>
</section>


   {/* <!-- Trusted Section --> */}
<section className="trusted-section">
  <div className="container1">
    <h2 className="trusted-headline">
      Trusted by Educators & Institutes Worldwide
    </h2>
    <div className="trusted-content">
      <div className="awards-badges">
        <img
          src="https://48147407.fs1.hubspotusercontent-na1.net/hubfs/48147407/Ontheclock-payroll-awards.png"
          alt="Award-winning Learning Management System - Best LMS Platform 2025, Capterra Ease of Use, G2 Users Love Us, Best Support, Fastest Implementation"
        />
      </div>
      <div className="trusted-separator"></div>
      <div className="customer-quote">
        <i className="fas fa-quote-left"></i>
        <div className="quote-text-content">
          <p>
            "PredictByte LMS transformed how we manage online learning. Our
            students love the interactive interface, and our instructors save
            hours every week managing courses. It’s simple, fast, and built for
            modern education!"
          </p>
          
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- Video Demo Section --> */}
<section className="video-demo">
  <div className="container">
    <div className="video-demo-content">
      <div className="video-text">
        <h2>See PredictByte LMS in Action</h2>
        <p>
          Watch this quick 2-minute demo to explore how Geekonik LMS simplifies
          online learning and course management. From uploading lessons to tracking
          student progress — everything happens in one smart platform.
        </p>
        <ul className="video-features">
          <li>
            <i className="fas fa-check"></i> Effortless course creation and scheduling
          </li>
          <li>
            <i className="fas fa-check"></i> Real-time student progress tracking
          </li>
          <li>
            <i className="fas fa-check"></i> Interactive assessments and auto-grading
          </li>
          <li>
            <i className="fas fa-check"></i> Seamless communication between teachers and learners
          </li>
        </ul>
      </div>
      <div className="video-wrapper">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/lwDEjDIW_pY"
          
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
