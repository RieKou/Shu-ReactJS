import { useState } from 'react'
import './App.css'
import BGM from './assets/Shu-BGM.mp3'
import BGV from './assets/BGV.mp4'
import Card1 from './assets/Card1.jpg'
import Card2 from './assets/Card2.jpg'
import Card3 from './assets/Card3.jpg'
import BG from './assets/BG3.jpg'
import Shu from './assets/Shu.png'
import Sui from './assets/Sui.png'
import NianIcon from './assets/nian-icon.png'
import Gal1 from './assets/Gal1.jpg'
import Gal2 from './assets/Gal2.png'
import Gal3 from './assets/Gal3.jpg' 
import Gal4 from './assets/Gal4.jpg'
import Gal5 from './assets/Gal5.jpg'
import Gal6 from './assets/Gal6.png'

function App() {
  const [count, setCount] = useState(0)
  const [rate, setRate] = useState(5) 

  return (
    <>
      <audio autoPlay loop src={BGM}></audio>
      <div className="content">
        <h1 id='top'>Welcome to Shu's Ricefield!</h1>
        <video
          src={BGV}
          autoPlay
          loop
          muted
          playsInline
          className='bg-video'
        />

        <img 
        src={BG}
        className='bg-pic'
        />

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Satu Klik, Satu Kesuburan = {count}
          </button>
        </div>
      </div>
        
      <h1 id='shu-card'>Shu's Cards</h1>
      <div className="container">
        <div className="cardi">
          <img src={Card1} alt="" />
        </div>
        <div className="cardi">
          <img src={Card2} alt="" />
        </div>
        <div className="cardi">
          <img src={Card3} alt="" />
        </div>
      </div>

      <div className="rate-card" id='shu-rate'>
        <label className='rate-label'>Rate: {rate}/10</label>
        <input
            type="range"
            min="0"
            max="10"
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            className='rate-slider'
          />
      </div>
      <div className='biodata' id='shu-profile'>
        <div className='informasi'>
            <h2>Shu [06/06]</h2>
            <h3>Profile</h3>
            <p>Shu, an Agricultural Tianshi instructor of the Yanese Tianshi Bureaus. 
            A longtime resident of the northern Yanese agriculture
            center of Dahuang, she has produced abundant research results. 
            Currently making a brief visit to Rhodes Island to see relatives.</p>
            <h3>Clinical Analysis</h3>
            <p>Imaging tests reveal clear, normal outlines of internal 
            organs, and no abnormal shadows have been detected. 
            Originium granules have not been detected in the circulatory 
            system and there is no sign of infection. At this time, this 
            operator is believed to be uninfected.</p>
        </div>
        <div className='image'>
            <img src={Shu} alt="Shu" />
        </div>
        <div>
          <img src={Sui} className='sui' />
        </div>
      </div>

      <div className='nian-cont'>
        <img src={NianIcon}/>
        <div className='nian-text'>
          <p>Shu was very cooperative during the physical examination. <br/>Her condition...<br/> may be difficult to judge by regular human standards, 
          <br/>but if you compare her results with her siblings, <br/>she does indeed show signs reminiscent of "aging." <br/>
          We wished to research this further, but I put a stop to it.</p>
        </div>
      </div>

      <h1 className='wkwau' id='gallery'>Shu's Gallery</h1>
      <div className='gallery'>
        <div className='horicard'>
          <img src={Gal1}/>
          <h3 className="caption">布齿鱼</h3>
        </div>
        <div className='horicard'>
          <img src={Gal2}/>
          <h3 className="caption">蒲月@神隠し</h3>
        </div>
        <div className='horicard'>
          <img src={Gal3}/>
          <h3 className="caption">coper</h3>
        </div>
        <div className='horicard'>
          <img src={Gal4}/>
          <h3 className="caption">LonKi</h3>
        </div>
        <div className='horicard'>
          <img src={Gal5}/>
          <h3 className="caption">recieru</h3>
        </div>
        <div className='horicard'>
          <img src={Gal6}/>
          <h3 className="caption">星月海斗</h3>
        </div>
    </div>

    <footer>
      <a href='#top' onClick={e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>Back to Top</a>
    </footer>
    </>
  )
}

export default App