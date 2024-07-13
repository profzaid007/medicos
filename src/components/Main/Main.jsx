import React, { useContext } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

return (
    <div className="main">
        <div className="nav">
            <p>Medicos</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            
            {!showResult
            ?<>
            <div className="greet">
            <p><span>Hello, User.</span></p>
                <p>How can i help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                <p>Briefly summarize this concept: Dermatalogy</p>
                <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                <p>Brainstorm some of the methods to treat liver damage</p>
                <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </> 
            :<div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            </div>
        </div>
    }
        </div>
        <div className="main-bottom">
            <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick= {()=>onSent()} src={assets.send_icon} alt="" />
            </div>
        </div>
        <p className="bottom-info">
        Medicos may display inacurate info including about people, so double-check its response  
        </p>
    </div>
</div>
)
}

export default Main