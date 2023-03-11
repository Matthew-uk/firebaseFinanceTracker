import axios from 'axios'
import './questionHistory.css'

const questions = [
    { question: "what is a noun" },
    { question: 'Who is the current president of nigeria' },
    { question: 'What is the distance between mars and the sun in meters' },
    { question: "when did america gain it's independence" },
    { question: 'who is goerge washinton' },
    { question: "When did the first coup happen in nigeria " }
]

export default function questionHistory() {
  return (
    <div className='question-history-container'>
        <h3>Question History</h3>
        <div className='question-history-wrapper'>
            { questions && questions.map(question => (
                <div key={question.question} className='question-history-text'>
                    <span>{question.question}</span>
                </div>
            ))  }
        </div>
    </div>
  )
}
