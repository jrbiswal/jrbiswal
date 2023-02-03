import React from 'react'
import { useLocation,useNavigate} from 'react-router-dom'

import './HomeMainbar.css'
import QuestionList from './QuestionList'


const HomeMainbar = () => {
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()
  var questionsList =[{
    _id: 1,
    upVotes: 3,
    downVotes: 2,
    noOfAnswer: 2,
    questionTitle: "What is a function",
    questionBody : "It meant to be",
    questionTags: ["java","node js","react js", "mongo db","express js"],
    userPosted:"mano",
    userId: 1,
    askedOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  },{
    
    _id: 2,
    upVotes: 3,
    downVotes: 2,
    noOfAnswer: 0,
    questionTitle: "What is a function",
    questionBody : "It meant to be",
    questionTags: ["javascript","R","python"],
    userPosted:"mano",
    userId: 1,
    askedOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'kumar',
      answeredOn: "jan 2",
      userId: 2, 
    }]  
  },{
    _id: 3,
    upVotes: 3,
    downVotes: 2,
    noOfAnswer: 0,
    questionTitle: "What is a function",
    questionBody : "It meant to be",
    questionTags: ["javascript","R","python"],
    userPosted:"mano",
    userId: 1,
    askedOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]  
  }]

  const checkAuth = () => {
    if(user===null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button  onClick={checkAuth} className='ask-btn'>Ask question</button>
      </div> 
      <div>
        {
          questionsList === null ?
          <h1>Loading...</h1> :
          <>
              <p>{questionsList.length} questions</p>
              <QuestionList questionList={questionsList} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
