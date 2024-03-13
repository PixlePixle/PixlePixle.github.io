import style from './Header.module.css';

function Header() {
    return <>
        <div className={style.container}>
            <div className={style.text}>
                <p className={style.name}>Peter Jung</p>
                <div className={style.rhside}>
                    <a href='/'>About</a>
                    <a href='/'>Projects</a>
                    <a href='/'>Contact</a>
                </div>
            </div>
        </div>
    </>
}

export default Header;