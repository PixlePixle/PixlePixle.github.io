import './App.css'
import homeImage from './assets/main.jpg'

function App() {

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
      <header>
        <a href='#' className='logo'>Peter</a>

        <nav>
          <a href='#' className='active'>Home</a>
          <a href='#'>Experience</a>
          <a href='#'>Projects</a>
          <a href='#'>Contact</a>
        </nav>
      </header>

      <section className='home'>
        {/* <div className='home-img'>
          <img src={homeImage} alt='' />
        </div> */}
        <div className='home-content'>
          <h1>Hi, it's <span>Peter</span></h1>
          <h3 className='typing-text'>I'm a <span></span></h3>
          <p>Irure anim elit occaecat non in aliqua proident cillum veniam culpa nulla.</p>
          <div className="social-icons">
          <a href="#"><i className='fa-brands fa-linkedin'></i></a>
          <a href="#"><i className='fa-brands fa-github'></i></a>
          </div>
          <a href="#" className='btn'>Hire me</a>
        </div>
      </section>
    </>
  )
}

export default App
