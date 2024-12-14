import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';

function Article () {
    return(
        <>
            <div className="article_box">
                <div className="item">
                    <div className="text">
                        <h1 className="number">01</h1>
                        <p className="title">BATTLE ROYAL</p>
                        <p className="main">The battle is building! Drop into the Battle Royal. Loot, build, explore, and flight in a game of 100 players competing to be the last one standing.</p>
                    </div>
                    <img className="img" src={img1}/>
                </div>
            </div>
                
            <div className='article_box'>
                <div className="item">
                    <div className="text">
                        <h1 className="number">02</h1>
                        <p className="title">ZERO BUILD</p>
                        <p className="main">
                            All battle, no building! Zero Build is all the action, loot, and progression of classic Battle Royal, without the Building!
                        </p>
                    </div>
                    <img className="img" src={img2} />
                </div>
            </div>  

            <div className='article_box'>
                <div className="item">
                    <div className="text">
                        <h1 className="number">03</h1>
                        <p className="title">ARENA MODES</p>
                        <p className="main">
                            Test your skills against the best! During each match, you will earn Hype by either achieving high placements or eliminating opponents.
                        </p>
                    </div>
                    <img className="img" src={img3} />
                    </div>
            </div>

            <div className='article_box'>
                <div className="item">
                    <div className="text">
                        <h1 className="number">04</h1>
                        <p className="title">ARENA MODES</p>
                        <p className="main">
                            Test your skills against the best! During each match, you will earn Hype by either achieving high placements or eliminating opponents.
                        </p>
                    </div>
                    <img className="img" src={img4} />
                </div>
            </div>
         </>     
    )
}

export default Article;