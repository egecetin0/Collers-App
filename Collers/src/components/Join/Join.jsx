import video from "../../assets/Video.png";
import styles from './join.module.css';


export default function Join() {
    return (
        <div className={`${styles.bgColor} d-none d-sm-flex p-5 mw-100 flex-wrap justify-content-center `}>
            <div className={`card ${styles.cardBorder} w-75`} style={{padding: "4.5% 0"}}>
                <div className={`card-body ${styles.cardBorder} d-flex flex-row align-items-center w-100`}>
                    <div className="d-flex flex-column ms-5" style={{width: "35%"}}>
                        <h1 className="fw-bold text-dark">Why join us</h1>
                        <ul>
                            <li>&emsp;Est et in pharetra magna adipiscing ornare aliquam.</li>
                            <li>&emsp;Tellus arcu sed consequat ac velit ut eu blandit.</li>
                            <li>&emsp;Ullamcorper ornare in et egestas dolor orci.</li>
                        </ul>
                        <button className={`btn ${styles.textColor} ${styles.border} fw-bold px-4`} style={{width: "40%"}}>Sign up now</button>
                    </div>
                    <div className={`z-3 position-absolute w-25 ${styles.imgPos}`}>
                        <img src={video} alt="video" className="d-none d-sm-block m-5"/>
                    </div>
                </div>


            </div>

        </div>
    );
}