import React, { useEffect, useRef, useState } from 'react'
import Chatboticon from './components/Chatboticon'
import ChatForm from './components/ChatForm'
import ChatMessage from './components/ChatMessage'

const App = () => {
  const [chatHistory, setChatHistory] = useState([])
  const [showChatbot, setShowChatbot] = useState(false)
  const chatBodyRef = useRef()

  const generateBotResponse = async (history) => {

     // helper function to update chat history
  const updateHistory = (text, isError = false) => {
    setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model", text, isError}])
  };

    // format chat history for api request
    history = history.map(({role, text}) => ({role, parts: [{text}]}))

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history})
    }

    try{

      // make the api call to get the bot's response
      const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyAPfa_-Qz-lvXW5v2_E85apY4pf8fDKegM", requestOptions)
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Something went wrong!");

      // clean and update chat history with bot's response
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()
      updateHistory(apiResponseText)
    }
    catch(error){
        updateHistory(error.message, true)
    }
  };

  useEffect(() => {
    // auto-scroll whenever chat history updates
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"});
  }, [chatHistory])


  return (
    <div className={`container ${ showChatbot ? 'show-chatbot' : ""}`}>

        <button onClick={() => setShowChatbot(prev => !prev)} id='chatbot-toggler'>
            <span className='material-symbols-rounded'>mode_comment</span>
            <span className='material-symbols-rounded'>close</span>
        </button>

      <div className="chatbot-popup">
        {/* Chatbot Header  */}
        <div className="chat-header">
          <div className="header-info">
            <Chatboticon />
            <h2 className="logo-text">Chatbot</h2>
          </div>

          <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

         {/* Chatbot Body  */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
          <Chatboticon />
          <p className="message-text">
            Hey Parth 👋<br /> How can I help you today?
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