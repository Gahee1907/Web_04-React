import './App.css';
import Article from './article';
import mail from './mail.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';

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
          <Article 
          number='01'
          title= 'BATTLE ROYAL'
          main='The battle is building! Drop into the Battle Royal. Loot, build, explore, and flight in a game of 100 players competing to be the last one standing.'
          img={img1}
          />
          <Article 
          number='02'
          title='ZERO BUILD'
          main='All battle, no building! Zero Build is all the action, loot, and progression of classic Battle Royal, without the Building!'
          img={img2}
          />
          <Article 
          number='03'
          title='ARENA MODES'
          main='Test your skills against the best! During each match, you will earn Hype by either achieving high placements or eliminating opponents.'
          img={img3}
          />
          <Article 
          number='04'
          title='ARENA MODES'
          main='Test your skills against the best! During each match, you will earn Hype by either achieving high placements or eliminating opponents.'
          img={img4}
         />
        </div>
      </div>
    </div>
  );
}

export default App;
