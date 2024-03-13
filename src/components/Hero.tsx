import style from './Hero.module.css'

function Hero() {
    return (
    <div className={style.container}>
        <div className={style.imgContainer}>
            <img src='/skyscraper.png' alt='skyscraper' />
        </div>
        <div className={style.text}>
            <h1>I'm a student at the University of Georgia</h1>
            <h2>Currently pursuing a B.S. in Computer Science.</h2>
        </div>
    </div>
    )
}

export default Hero;