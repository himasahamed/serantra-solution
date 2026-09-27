import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "What services does Serantra Solution provide?",
    answer:
      "Serantra Solution provides website development, web application development, custom software development, UI/UX design, SaaS development, maintenance and technical support. Every solution is planned around your actual business requirements.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines depend on the complexity, features and overall scope. A standard business website may take a few weeks, while larger web applications or custom software solutions may require several months. We provide a clear estimated timeline after reviewing your requirements.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process starts by understanding your requirements, followed by planning, UI/UX design, development, testing and deployment. We maintain clear communication throughout the project so the final solution remains aligned with your business goals.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes. Serantra Solution provides post-launch support including bug fixes, performance improvements, security updates, content changes, maintenance and future feature enhancements when required.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "Project pricing depends on the scope, complexity, required features and development time. We first discuss your requirements and then provide a clear project proposal and quotation with transparent pricing.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-background" aria-hidden="true">
        <div className="faq-bg-glow faq-bg-glow-one" />
        <div className="faq-bg-glow faq-bg-glow-two" />
        <div className="faq-bg-grid" />
      </div>

      <div className="faq-shell">
        <div className="faq-heading">
          <div className="faq-kicker motion-reveal"><span />Got Questions?</div>
          <h2 className="motion-reveal">
            Frequently Asked
            <span className="faq-heading-gradient">Questions</span>
          </h2>
          <p className="motion-reveal">
            Find answers to common questions about our services, projects and how Serantra Solution can help bring your digital ideas to life.
          </p>
        </div>

        <div className="faq-list motion-stagger">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`faq-video-border ${isOpen ? "faq-video-border-active" : ""}`}
              >
                <article className={`faq-video-card ${isOpen ? "faq-video-card-open" : ""}`}>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="faq-question-button"
                  >
                    <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-question-text">{faq.question}</span>
                    <span className={`faq-toggle-button ${isOpen ? "faq-toggle-button-open" : ""}`}>
                      {isOpen ? <Minus size={19} strokeWidth={2.2} /> : <Plus size={19} strokeWidth={2.2} />}
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={`faq-answer-grid ${isOpen ? "faq-answer-grid-open" : ""}`}
                  >
                    <div className="faq-answer-overflow">
                      <div className="faq-answer-inner">
                        <p className={`faq-answer-text ${isOpen ? "faq-answer-text-open" : ""}`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-motion-line" aria-hidden="true" />
    </section>
  );
}

