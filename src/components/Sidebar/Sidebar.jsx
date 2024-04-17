import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import menu from '../../assets/menu.png';
import { Context } from '../../context/Context';
import plus from '../../assets/plus.png'


const Sidebar = () => {

  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat }  = useContext(Context);

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
        <div className="top">
        
        <div onClick={()=>newChat()}className="new-chat">
        <img src={plus} alt=''/>
        {extended?<p>New Chat</p>:null}
        </div>
        {extended
          ?<div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
              return(
                <div onClick={()=>loadPrompt(item)}className="recent-entry">
                    <IoChatboxEllipsesOutline />
                <p>{item.slice(0,18)} ...</p>
            </div> 
            )
          })}
          
          </div>
          : null
        }
        </div>
        
        
    </div>
  )
}

export default Sidebar