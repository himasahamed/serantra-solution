import { ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";


/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    number: "01",

    question:
      "What services does Serantra Solution provide?",

    answer:
      "Serantra Solution provides website development, web application development, custom software development, UI/UX design, SaaS development, maintenance and technical support. Every solution is planned around your actual business requirements.",
  },

  {
    number: "02",

    question:
      "How long does a project usually take?",

    answer:
      "Project timelines depend on the size, complexity and requirements of the solution. After understanding your requirements, we provide a clear project scope, timeline and development plan before work begins.",
  },

  {
    number: "03",

    question:
      "What does your process look like?",

    answer:
      "Six stages: discovery and planning, UI/UX design, development, testing and QA, launch, then post-launch support. It runs on an agile cadence with a demo at the end of each cycle, so you review real work rather than status reports.",
  },

  {
    number: "04",

    question:
      "Do you provide support after launch?",

    answer:
      "Yes. We provide maintenance and technical support after launch to help keep your website, application or software secure, reliable and up to date.",
  },

  {
    number: "05",

    question:
      "Can Serantra work with an existing system?",

    answer:
      "Yes. We can review existing websites, applications and software systems, identify areas for improvement and help with redesigns, upgrades, integrations or new features.",
  },

  {
    number: "06",

    question:
      "How can I start a project with Serantra?",

    answer:
      "You can contact us or submit your project requirements through our website. We will review your requirements and contact you to discuss the right solution for your project.",
  },
];


/* =========================================================
   FAQ COMPONENT
========================================================= */

export default function FAQ() {
  /*
    QUESTION 01 ALWAYS STAYS OPEN
  */

  const [openItems, setOpenItems] =
    useState([0]);


  /* =======================================================
     FAQ TOGGLE
  ======================================================= */

  const toggleFAQ = (index) => {
    /*
      DO NOT CLOSE QUESTION 01
    */

    if (index === 0) {
      return;
    }

    setOpenItems((currentItems) => {
      if (currentItems.includes(index)) {
        return currentItems.filter(
          (item) => item !== index
        );
      }

      return [
        ...currentItems,
        index,
      ];
    });
  };


  return (
    <section className="faq-section">
      {/* ===================================================
          BACKGROUND
      ==================================================== */}

      <div
        className="faq-background"
        aria-hidden="true"
      >
        <div className="faq-bg-grid" />

        <div className="faq-bg-glow faq-bg-glow-one" />

        <div className="faq-bg-glow faq-bg-glow-two" />
      </div>


      {/* ===================================================
          MAIN CONTAINER
      ==================================================== */}

      <div className="faq-shell">
        {/* =================================================
            NEW FAQ INTRO
        ================================================== */}

        <div className="faq-intro-layout">
          {/* ===============================================
              LEFT SIDE
          ================================================ */}

          <div className="faq-intro-left">
            <div className="faq-kicker">
              <span />

              QUESTIONS
            </div>


            <h2 className="faq-main-title">
              Everything

              <span>
                You’re Probably
              </span>

              <span className="faq-heading-gradient">
                About To Ask
              </span>
            </h2>
          </div>


          {/* ===============================================
              RIGHT SIDE
          ================================================ */}

          <div className="faq-intro-right">
            <div className="faq-intro-line" />

            <p>
              Still unclear on something? A short call usually
              settles it faster than another page of copy.
            </p>

            <Link
              to="/contact"
              className="faq-contact-button"
            >
              ASK US DIRECTLY

              <ArrowRight
                size={16}
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>


        {/* =================================================
            FAQ LIST
        ================================================== */}

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen =
              openItems.includes(index);

            return (
              <div
                key={faq.number}
                className={`faq-video-border ${
                  isOpen
                    ? "faq-video-border-active"
                    : ""
                }`}
              >
                <div
                  className={`faq-video-card ${
                    isOpen
                      ? "faq-video-card-open"
                      : ""
                  }`}
                >
                  {/* =====================================
                      QUESTION
                  ====================================== */}

                  <button
                    type="button"
                    className="faq-question-button"
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className="faq-number">
                      {faq.number}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>

                    <span
                      className={`faq-toggle-button ${
                        isOpen
                          ? "faq-toggle-button-open"
                          : ""
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus
                          size={18}
                          strokeWidth={2}
                        />
                      ) : (
                        <Plus
                          size={18}
                          strokeWidth={2}
                        />
                      )}
                    </span>
                  </button>


                  {/* =====================================
                      ANSWER
                  ====================================== */}

                  <div
                    className={`faq-answer-grid ${
                      isOpen
                        ? "faq-answer-grid-open"
                        : ""
                    }`}
                  >
                    <div className="faq-answer-overflow">
                      <div className="faq-answer-inner">
                        <p
                          className={`faq-answer-text ${
                            isOpen
                              ? "faq-answer-text-open"
                              : ""
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}