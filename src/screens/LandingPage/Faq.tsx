import React from "react";

const faqs = [
  {
    question: "What is the duration of the course?",
    answer: "Each course is designed to be completed in just 15 days with intensive live training sessions."
  },
  {
    question: "Are there any prerequisites?",
    answer: "No prior experience is needed. These courses are beginner-friendly and start from the basics."
  },
  {
    question: "Who are the instructors?",
    answer: "Our instructors are industry experts with real-world experience and a passion for teaching."
  },
  {
    question: "Can I interact with other students?",
    answer: "Yes, you’ll have access to peer discussions and collaborative activities during the course."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, you will receive an ISO-certified course completion certificate after successfully completing the training."
  },
  {
    question: "Is this a live or recorded course?",
    answer: "These are live online classes with real-time interaction. Recordings will also be provided for future reference."
  },
  {
    question: "What if I miss a live session?",
    answer: "Don’t worry! All sessions are recorded and will be shared with you for later viewing."
  },
  {
    question: "Will I work on projects during the course?",
    answer: "Yes, you’ll complete hands-on projects to apply what you learn and build a strong portfolio."
  },
  {
    question: "How do I get job support?",
    answer: "We offer dedicated placement assistance, resume reviews, and interview preparation after the course."
  },
  {
    question: "How much does the course cost?",
    answer: "Please visit the pricing page or contact us directly for the latest fee details."
  },
  {
    question: "Is there any refund policy?",
    answer: "Yes, we offer a refund within the first 2 days if you are not satisfied. Terms and conditions apply."
  }
];

const Faq: React.FC = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-blue-900/30 border border-blue-800 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-blue-300 text-lg">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
