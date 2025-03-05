import React, { useState } from 'react'
import Chatboticon from './components/Chatboticon'
import ChatForm from './components/ChatForm'
import ChatMessage from './components/ChatMessage'

const App = () => {

  const [chatHistory, setChatHistory] = useState([])

  const generateBotResponse = async (history) => {

    // format chat history for api request
    history = history.map(({role, text}) => ({role, parts: [{text}]}))

    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history})
    }

    try{
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions)
      const data = await response.json()
    }
    catch(error){

    }
  }


  return (
    <div className='container'>
      <div className="chatbot-popup">
        {/* Chatbot Header  */}
        <div className="chat-header">
          <div className="header-info">
            <Chatboticon />
            <h2 className="logo-text">Chatbot</h2>
          </div>

          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

         {/* Chatbot Body  */}
        <div className="chat-body">
          <div className="message bot-message">
          <Chatboticon />
          <p className="message-text">
            Hey there 👋<br /> How can I help you today?
          </p>
          </div>

          {/* render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
          
        </div>

        {/* Chatbot Footer  */}
        <div className="chat-footer">
         <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  )
}

export default App