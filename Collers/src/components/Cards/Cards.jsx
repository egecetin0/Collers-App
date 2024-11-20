import card1 from "../../assets/Card1.png";
import card2 from "../../assets/Card2.png";
import card3 from "../../assets/Card3.png";
import styles from './cards.module.css';
import backlight1 from "../../assets/Backlight1.png";
import backlight2 from "../../assets/Backlight2.png";
import backlight3 from "../../assets/Backlight3.png";
import backlight4 from "../../assets/Backlight4.png";
import backlight5 from "../../assets/Backlight5.png";


export default function Cards() {
    return (
        <div className={`${styles.bgColor} d-none d-sm-flex`}>
            <div className="z-0 position-absolute align-self-end">
                    <img src={backlight1} alt="backlight" style={{ width: "30%", marginBottom: "7.5%" }} />
            </div>
            <div className="z-0 position-absolute w-50">
                    <img src={backlight2} alt="backlight" style={{ width: "10%", marginLeft: "75%", marginTop: "15%" }} />
            </div>
            <div className="z-0 position-absolute align-self-end w-100">
                    <img src={backlight3} alt="backlight" style={{ width: "10%", marginLeft: "55%", marginBottom: "5%" }} />
            </div>
            <div className="z-0 position-absolute align-self-end w-100">
                    <img src={backlight4} alt="backlight" style={{ width: "14%", marginLeft: "70%", marginBottom: "1.5%" }} />
            </div>
            <div className="z-0 position-absolute align-self-end w-100">
                    <img src={backlight5} alt="backlight" style={{ width: "16%", marginLeft: "82%", marginBottom: "5%" }} />
            </div>
            <div className="d-flex flex-column w-100">
                <div className={`${styles.title} d-flex`}>
                    <h1 className="fw-bold text-white me-auto" style={{ fontSize: "60px" }}>The best of the best</h1>
                    <button className={`btn ${styles.textColor} ${styles.border} fw-bold align-self-center px-4`} style={{width: "10%", height: "65%"}}>Sign up now</button>
                </div>
                <div className={`${styles.cards} d-flex justify-content-between`}>
                    <div className={`card ${styles.card}`} style={{ width: "21rem" }}>
                        <img className="card-img-top" src={card1} alt="Card image cap" />
                        <div className={`card-body ${styles.card}`}>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button href="#" className="btn fw-bold text-white border border-white w-100"><i className="bi bi-cart"></i>&emsp;Buy Now</button>
                        </div>
                    </div>
                    <div className={`card ${styles.card}`} style={{ width: "21rem" }}>
                        <img className="card-img-top" src={card2} alt="Card image cap" />
                        <div className={`card-body ${styles.card}`}>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button href="#" className="btn fw-bold text-white border border-white w-100"><i className="bi bi-cart"></i>&emsp;Buy Now</button>
                        </div>
                    </div>
                    <div className={`card ${styles.card}`} style={{ width: "21rem" }}>
                        <img className="card-img-top" src={card3} alt="Card image cap" />
                        <div className={`card-body ${styles.card}`}>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button href="#" className="btn fw-bold text-white border border-white w-100"><i className="bi bi-cart"></i>&emsp;Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}