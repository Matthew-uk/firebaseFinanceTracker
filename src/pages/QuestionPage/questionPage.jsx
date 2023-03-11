import { useState } from 'react'
// Style sheet
import './questionPage.css'
// React icons
import { TiCamera } from 'react-icons/ti'

export default function QuestionPage() {

    const [ question, setQuestion ] = useState('')
    const [ questionError, setQuestionError ] = useState('')
    const [ answer, setAnswer ] = useState('')
    const [ showAnswer, setShowAnswer ] = useState('false')
    const [ showInput, setShowInput ] = useState(false)
    const [ showQuestion, setShowQuestion ] = useState(false)

    
    const handleSubmit = () => {
      setQuestionError('')
      if(!question){
        return setQuestionError('Please input a question')
      } else{
        console.log(question)
        setShowQuestion(true)
        setShowInput(true)
      }
    }

  return (
    <div className='question-page-container page'>
      <div className='question-page-wrapper'>
        <div className='Fun-fact-container'>
          <div className='fun-fact-wrapper'>
            <h2>Did You know?</h2>
            <p>did you know that RSU is the first University of technology in Nigeria</p>
          </div>
        </div>
       {!showQuestion && ( <div className='access-camera-container'>
          <div className='access-camera-wrapper'>
            <TiCamera className='question-page-icon1'/>
            <p>click to Snap question or import question</p>
          </div>
        </div>
)}

        {/* question asked */}
        {showQuestion && (
        <div className='question-content-container'>
          <div className='question-content-wrapper'>
            {question}
          </div>
          {/* <div className='error'>Waiting for answer</div> */}
        </div>
        )}

        {/* Answes */}
        {showQuestion && <div className='answer-container'>
          <div className='answer-wrapper'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>}

        {/* input */}
       {!showInput && <div className='question-main-input-container'>
        { questionError && <div className='error'>{questionError}</div> }
        <div className='question-input-container'>
          <div className='question-input'>
            <input
             type='text'
             placeholder='Ask any question...'
             onChange={(e) => setQuestion(e.target.value)}
             value={question}
            />
          </div>
          <div className='send-question-button'>
            <button
             onClick={() => handleSubmit()}
            >
              Send
            </button>
          </div>
        </div>
        </div>}

      </div>
    </div>
  )
}
