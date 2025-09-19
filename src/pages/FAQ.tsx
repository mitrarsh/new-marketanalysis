import React from "react"
import HomeChild from "../components/homepage/children/homeChild"

type FAQItem = {
  question: string
  answer: string
}
const faqData: FAQItem[] = [
  {
    question: "What is NEW?",
    answer:
      "NEW is a novel AI model that uses cutting-edge machine learning techniques to predict Iron ore prices and analyze the market. It helps track market trends and manage workflows across business systems by continuously analyzing market data relevant to every business.",
  },
  {
    question: "How can I be a member?",
    answer: "Sign in to become a member and enjoy your free trial.",
  },
  {
    question: "Can I withdraw my payment?",
    answer: "No, payment withdrawal is not possible.",
  },
  {
    question: "How can we cooperate?",
    answer:
      "We believe in the circulation of information and cooperation. Therefore, we welcome any suggestion of cooperation. Please do not hesitate to contact us.",
  },
]

const FAQ: React.FC = () => {
  return (
    <HomeChild>
      <div>
        {faqData.map((item, index) => (
          <div key={index} className="queston">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </HomeChild>
  )
}

export default FAQ
