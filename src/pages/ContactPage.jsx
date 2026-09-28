import {
    ArrowRight,
    CheckCircle2,
    Mail,
    MapPin,
    Phone,
    Send,
  } from "lucide-react";
  
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  import "./ContactPage.css";
  
  
  export default function ContactPage() {
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");
  
  
    /* =====================================================
       CONTACT FORM SUBMIT
    ===================================================== */
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      setStatus("sending");
      setMessage("");
  
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  
      if (!accessKey) {
        setStatus("error");
  
        setMessage(
          "Contact form configuration is missing. Please check the Web3Forms environment key."
        );
  
        return;
      }
  
      const form = event.currentTarget;
  
      const formData =
        new FormData(form);
  
      formData.append(
        "access_key",
        accessKey
      );
  
      formData.append(
        "subject",
        "New Contact Message - Serantra Solutions"
      );
  
      formData.append(
        "from_name",
        "Serantra Solutions Website"
      );
  
      try {
        const response =
          await fetch(
            "https://api.web3forms.com/submit",
            {
              method: "POST",
  
              headers: {
                Accept: "application/json",
              },
  
              body: formData,
            }
          );
  
        const result =
          await response.json();
  
        if (
          response.ok &&
          result.success
        ) {
          setStatus("success");
  
          setMessage(
            "Thank you. Your message has been sent successfully. Our team will contact you soon."
          );
  
          form.reset();
        } else {
          throw new Error(
            result.message ||
              "Unable to send message."
          );
        }
      } catch (error) {
        console.error(
          "Contact form error:",
          error
        );
  
        setStatus("error");
  
        setMessage(
          "Your message could not be sent. Please try again or contact us directly."
        );
      }
    };
  
  
    return (
      <>
        {/* ===================================================
            CONTACT HERO
        ==================================================== */}
  
        <section className="contact-page-hero">
          {/* DARK OVERLAY */}
  
          <div
            className="contact-page-hero-overlay"
            aria-hidden="true"
          />
  
  
          {/* GRID */}
  
          <div
            className="contact-page-hero-grid"
            aria-hidden="true"
          />
  
  
          {/* GLOW */}
  
          <div
            className="contact-page-hero-glow contact-page-hero-glow-one"
            aria-hidden="true"
          />
  
          <div
            className="contact-page-hero-glow contact-page-hero-glow-two"
            aria-hidden="true"
          />
  
  
          <div className="contact-page-hero-container">
            {/* BREADCRUMB */}
  
            <div className="contact-page-breadcrumb">
              <Link to="/">
                Home
              </Link>
  
              <span>
                ›
              </span>
  
              <span>
                Contact
              </span>
            </div>
  
  
            {/* TITLE */}
  
            <h1>
              Contact
              <span>
                {" "}Us
              </span>
            </h1>
  
  
            {/* DESCRIPTION */}
  
            <p>
              Let’s discuss your project and bring your
              ideas to life. We’re here to help you build
              modern, reliable and scalable digital
              solutions.
            </p>
  
  
            {/* HERO CONTACT INFO */}
  
            <div className="contact-hero-quick-info">
              <a href="mailto:Serantrasolutions@gmail.com">
                <Mail
                  size={16}
                  strokeWidth={1.8}
                />
  
                <span>
                  Serantrasolutions@gmail.com
                </span>
              </a>
  
  
              <a href="tel:+94771472539">
                <Phone
                  size={16}
                  strokeWidth={1.8}
                />
  
                <span>
                  +94 77 147 2539
                </span>
              </a>
            </div>
          </div>
        </section>
  
  
        {/* ===================================================
            CONTACT SECTION
        ==================================================== */}
  
        <section className="contact-details-section">
          {/* BACKGROUND */}
  
          <div
            className="contact-details-background"
            aria-hidden="true"
          >
            <div className="contact-details-grid-bg" />
  
            <div className="contact-details-glow" />
          </div>
  
  
          <div className="contact-details-container">
            {/* HEADING */}
  
            <div className="contact-details-heading">
              <div className="contact-page-label">
                <span />
  
                GET IN TOUCH
              </div>
  
  
              <h2>
                Got Any
                <span>
                  {" "}Questions?
                </span>
              </h2>
  
  
              <p>
                Tell us about your project, business idea or
                requirements. Complete the form and our team
                will review your message and get back to you.
              </p>
            </div>
  
  
            {/* =================================================
                MAIN LAYOUT
            ================================================== */}
  
            <div className="contact-main-grid">
  
              {/* ===============================================
                  LEFT SIDE
              ================================================ */}
  
              <div className="contact-info-column">
  
                {/* CONTACT IMAGE */}
  
                <div className="contact-sender-image-card">
                  <img
                    src="/images/contact/contact-sender.jpg"
                    alt="Serantra Solutions customer support"
                    className="contact-sender-image"
                  />
  
                  <div
                    className="contact-sender-image-overlay"
                    aria-hidden="true"
                  />
  
                  <div
                    className="contact-sender-image-glow"
                    aria-hidden="true"
                  />
  
  
                  <div className="contact-sender-image-content">
                    <span>
                      LET&apos;S CONNECT
                    </span>
  
                    <h3>
                      Have an idea?
                    </h3>
  
                    <p>
                      Send us your requirements and let’s
                      discuss how we can turn your idea into
                      a modern digital solution.
                    </p>
                  </div>
  
  
                  <div
                    className="contact-sender-bottom-light"
                    aria-hidden="true"
                  >
                    <span />
                  </div>
                </div>
  
  
                {/* LOCATION */}
  
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>
  
  
                  <div>
                    <span>
                      Location
                    </span>
  
                    <h3>
                      Sri Lanka
                    </h3>
  
                    <p>
                      Serving clients locally and
                      internationally.
                    </p>
                  </div>
                </div>
  
  
                {/* PHONE */}
  
                <a
                  href="tel:+94771472539"
                  className="contact-info-item contact-info-link"
                >
                  <div className="contact-info-icon">
                    <Phone
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>
  
  
                  <div>
                    <span>
                      Phone
                    </span>
  
                    <h3>
                      +94 77 147 2539
                    </h3>
  
                    <p>
                      Contact our team to discuss your
                      digital project.
                    </p>
                  </div>
                </a>
  
  
                {/* EMAIL */}
  
                <a
                  href="mailto:Serantrasolutions@gmail.com"
                  className="contact-info-item contact-info-link"
                >
                  <div className="contact-info-icon">
                    <Mail
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>
  
  
                  <div>
                    <span>
                      Email
                    </span>
  
                    <h3>
                      Serantrasolutions@gmail.com
                    </h3>
  
                    <p>
                      Email your requirements directly
                      to our team.
                    </p>
                  </div>
                </a>
  
  
                {/* RESPONSE MESSAGE */}
  
                <div className="contact-response-note">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.8}
                  />
  
                  <p>
                    Send your project requirements and our
                    team will review them and respond as
                    soon as possible.
                  </p>
                </div>
              </div>
  
  
              {/* ===============================================
                  RIGHT SIDE FORM
              ================================================ */}
  
              <div className="contact-form-wrapper">
                <form
                  className="contact-page-form"
                  onSubmit={handleSubmit}
                >
                  {/* BOT CHECK */}
  
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="contact-botcheck"
                    tabIndex="-1"
                    autoComplete="off"
                  />
  
  
                  {/* NAME */}
  
                  <div className="contact-form-group">
                    <label htmlFor="contact-name">
                      Name
                    </label>
  
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
  
  
                  {/* EMAIL */}
  
                  <div className="contact-form-group">
                    <label htmlFor="contact-email">
                      Email
                    </label>
  
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
  
  
                  {/* PHONE */}
  
                  <div className="contact-form-group">
                    <label htmlFor="contact-phone">
                      Phone
                    </label>
  
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                    />
                  </div>
  
  
                  {/* SERVICE */}
  
                  <div className="contact-form-group">
                    <label htmlFor="contact-service">
                      Interested Service
                    </label>
  
                    <select
                      id="contact-service"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select a Service
                      </option>
  
                      <option value="Software Development">
                        Software Development
                      </option>
  
                      <option value="Web Development">
                        Web Development
                      </option>
  
                      <option value="Brand Identity">
                        Brand Identity
                      </option>
  
                      <option value="Creative Designing">
                        Creative Designing
                      </option>
  
                      <option value="UI/UX Design">
                        UI/UX Design
                      </option>
  
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
  
                      <option value="Creative & Copywriting">
                        Creative & Copywriting
                      </option>
  
                      <option value="AI Integration & Automation">
                        AI Integration & Automation
                      </option>
  
                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>
  
  
                  {/* SUBJECT */}
  
                  <div className="contact-form-group contact-form-full">
                    <label htmlFor="contact-subject">
                      Subject
                    </label>
  
                    <input
                      id="contact-subject"
                      type="text"
                      name="project_subject"
                      placeholder="Project Subject"
                      required
                    />
                  </div>
  
  
                  {/* MESSAGE */}
  
                  <div className="contact-form-group contact-form-message">
                    <label htmlFor="contact-message">
                      Message
                    </label>
  
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="7"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
  
  
                  {/* BUTTON */}
  
                  <button
                    type="submit"
                    className="contact-submit-button"
                    disabled={
                      status === "sending"
                    }
                  >
                    {status === "sending"
                      ? "Sending..."
                      : "Send Message"}
  
                    <Send
                      size={16}
                      strokeWidth={2}
                    />
                  </button>
  
  
                  {/* STATUS */}
  
                  {message && (
                    <div
                      className={`contact-form-status ${
                        status === "success"
                          ? "contact-form-status-success"
                          : "contact-form-status-error"
                      }`}
                      role="status"
                    >
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
  
  
        {/* ===================================================
            FINAL CTA
        ==================================================== */}
  
        <section className="contact-project-cta-section">
          <div
            className="contact-project-cta-background"
            aria-hidden="true"
          />
  
  
          <div className="contact-project-cta-container">
            <div className="contact-project-cta-card">
              <div
                className="contact-project-cta-glow"
                aria-hidden="true"
              />
  
  
              <h2>
                Ready to Start Your
                <span>
                  {" "}Project?
                </span>
              </h2>
  
  
              <p>
                Tell us what you’re planning and we’ll
                help you choose the right digital solution
                for your business.
              </p>
  
  
              <div className="contact-project-cta-actions">
                <Link
                  to="/request-quote"
                  className="contact-project-primary-button"
                >
                  Get Free Quote
  
                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                  />
                </Link>
  
  
                <Link
                  to="/services"
                  className="contact-project-secondary-button"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }