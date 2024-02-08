import style from './Loading.module.css';

function Loading() {
    return <>
    <div className={style.container}>
        <div className={style.background}>
            <h1 className={style.text}>Loading...</h1>
        </div>
    </div>
    </>
}

export default Loading