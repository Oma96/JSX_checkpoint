import logo from './logo.svg';
import './style.css';
import myImage from './imageInSrc.jpg'

function App() {
  return (
    <>
       <div className="App" style={{border:'solid 1px black', maxWidth:'100vw'}}> 
          <h1 className="titleRed">That doesn't make sense... I know hahaha</h1>
          <br></br>
          <img className='image' src= {myImage} alt='myimage'></img>
          <br></br>
          <img className='image'src='/imageInPublic.jpg' alt='myimage' ></img> 
          <br></br>
          <video className='video'>
            <source src='/myvideo.mp4' type="video/mp4"></source>
          </video>  
 
        </div>
     </>
  );
}

export default App;
