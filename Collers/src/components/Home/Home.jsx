import styles from './home.module.css';
import sneaker from "../../assets/Col.png";
import cup from "../../assets/Cup.png";
import hamburger from "../../assets/Hamburger.png";
import tv from "../../assets/TV.png";


export default function Home() {
    return (
        <div className={`${styles.bgColor} d-flex p-5 mw-100 flex-wrap align-items-center`}>
            <div className="d-none d-sm-flex w-50 me-auto">
                <div className="d-flex flex-column w-100">
                    <h1 className="fw-bold text-dark" style={{fontSize: "80px"}}>Collectible Sneakers</h1>
                    <p className="text-dark">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                    <div className="d-flex flex-row">
                        <button className={`btn ${styles.textColor} ${styles.border} fw-bold px-4`}>Sign up now</button>
                        <button className={`btn ${styles.textColor} fw-bold px-4`}>Watch Demo</button>
                    </div>
                </div>
            </div>
            <div className="d-block d-sm-none">
                <div className="d-flex flex-column w-100">
                    <h1 className="fw-bold text-dark" style={{fontSize: "48px"}}>Collectible Sneakers</h1>
                    <p className="text-dark">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                    <div className="d-flex flex-row">
                        <button className={`btn ${styles.textColor} ${styles.border} fw-bold px-4`}>Sign up now</button>
                        <button className={`btn ${styles.textColor} fw-bold px-4`}>Watch Demo</button>
                    </div>
                </div>
            </div>
            <img src={sneaker} alt="sneaker" className="w-25 d-none d-sm-block m-5" />
            <img src={sneaker} alt="sneaker" className="w-100 d-block d-sm-none" />
            <div className="d-none d-sm-block">
                <div className="d-flex flex-row w-100">
                    <div className="d-flex flex-column me-auto w-25">
                        <img src={cup} alt="cup" className={`${styles.cup}`} />
                        <h1 className="fw-bold text-dark">Nibh viverra</h1>
                        <p className="text-dark">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                    </div>
                    <div className="d-flex flex-column me-auto w-25">
                        <img src={hamburger} alt="hamburger" className={`${styles.hamburger}`} />
                        <h1 className="fw-bold text-dark">Cursus amet</h1>
                        <p className="text-dark">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                    </div>
                    <div className="d-flex flex-column me-auto w-25">
                        <img src={tv} alt="tv" className={`${styles.tv}`} />
                        <h1 className="fw-bold text-dark">Ipsum fermentum</h1>
                        <p className="text-dark">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                    </div>
                </div>
            </div>
            <div className="w-100 d-block d-sm-none">
                <div className="d-flex flex-column justify-content-center">
                    <img src={cup} alt="cup" className={`${styles.cup} align-self-center`} />
                    <h1 className="align-self-center fw-bold text-dark">Nibh viverra</h1>
                    <p className="align-self-center text-dark text-center">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img src={hamburger} alt="hamburger" className={`${styles.hamburger} align-self-center`} />
                    <h1 className="align-self-center fw-bold text-dark">Cursus amet</h1>
                    <p className="align-self-center text-dark text-center">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img src={tv} alt="tv" className={`${styles.tv} align-self-center`} />
                    <h1 className="align-self-center fw-bold text-dark">Ipsum fermentum</h1>
                    <p className="align-self-center text-dark text-center">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                </div>
            </div>
        </div>
    )
}