import Article from './article';
import './App.css';
import mail from './img/mail.png';

function App() {
  return (
      <div className="App">
        <div className='title_box'>
          <h2 className='title_up_box'>FORTNITE</h2>
          <p className='title_down_box'>
            @2023, Epic Games, Inc.<br/>
            All Rights Reserved.
          </p>
        </div>
        <div className='contents_box'>
          <div className='nav_box'>
            <img className='mail' src={mail} alt='mail'/>
          </div>
          <div className='section_box'>
            <Article />
          </div>
        </div>
      </div>
  );
}

export default App;
