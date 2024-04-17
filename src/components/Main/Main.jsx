import './Main.css'
import min from '../../assets/min.png'
import React, { useContext } from 'react'
import arrow from '../../assets/arrow.png'
import { Context } from '../../context/Context';
import spin from '../../assets/Spinner-3.gif';
import fig1 from '../../assets/paisaj.png';
import fig2 from '../../assets/edif.png';
import fig3 from '../../assets/equip.png'
import fig4 from '../../assets/cod.png';
import fig5 from '../../assets/airesp.png'
import fig6 from '../../assets/airesp2.png'

const Main = () => {

   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
    <div className='main'>
       <div className='nav'>
        <h1>Gemini</h1>
        <img src={min} alt=''/>
       </div>
    <div className='main-container'>

      {!showResult
      ?<>
         <div className='greet'>
            <p><span>Hello..</span></p>
            <p>How I can help you today</p>
        </div>
        <div className='cards'>
            <div className='card'>
              <p>Suggest beautiful place to see on an upcoming road trip</p>
              <img src={fig1} alt=''/>
            </div>
        <div className='card'>
              <p>Briefly summarize this concept: urban planing</p>
              <img src={fig2} alt=''/>
            </div>
        <div className='card'>
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={fig3} alt=''/>
            </div>
        <div className='card'>
              <p>Improve the reability of the following code</p>
              <img src={fig4} alt=''/>
            </div>
        </div>
      </>
      :<div className='result'>
         <div className="result-title">
         <img src={fig5} alt=''/>
         <p>{recentPrompt}</p>
         </div>
         <div className="result-data">
         <img src={fig6} alt=''/>
         {loading
         ?<div className='loader'>
          <img src={spin} alt='' />
         </div>
         :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
         }

         </div>
      </div>
      }

    <div className='main-bottom'>
        <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here'/>
            <div>
                
                {input?<img onClick={()=>onSent()} src={arrow} alt=''/>:null}
            </div>
        </div>
        <p className='bottom-info'>
          Gemini may display inaccurate info. included about people.
        </p>
    </div>
    </div>
  </div>
  )
}

export default Main