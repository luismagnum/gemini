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
            <p><span>Hola..</span></p>
            <p>Como puedo ayudarte hoy..</p>
        </div>
        <div className='cards'>
            <div className='card'>
              <p>Sugerir un hermoso lugar para tus proximas vacaciones</p>
              <img src={fig1} alt=''/>
            </div>
        <div className='card'>
              <p>Resumir brevemente un concepto: Planificacion urbana</p>
              <img src={fig2} alt=''/>
            </div>
        <div className='card'>
              <p>Alguna actividad que puede realizar luego de mi retiro de trabajo</p>
              <img src={fig3} alt=''/>
            </div>
        <div className='card'>
              <p>Mejorar la confiabilidad del siguiente codigo</p>
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
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Ingrese un mensaje...'/>
            <div>
                
                {input?<img onClick={()=>onSent()} src={arrow} alt=''/>:null}
            </div>
        </div>
        <p className='bottom-info'>
          Gemini puede mostrar informacion inexacta, incluso sobre personas.
        </p>
    </div>
    </div>
  </div>
  )
}

export default Main