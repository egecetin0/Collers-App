import windows from "../../assets/Windows.png";
import background from "../../assets/Background.png";
import backgroundMobile from "../../assets/BackgroundMobile.png";
import styles from './collection.module.css'
import { useState, useEffect } from "react";

export default function Collection() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    });

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    let offset = 600 - ((1400 - windowSize.innerWidth) / 1.75);

    let textOffset = {
        paddingTop: `${offset}px`
    };


    return (
        <div className={`${styles.bgColor} d-flex mw-100 flex-wrap align-items-center flex-column px-5`}>

            <div className="z-1 d-none d-sm-flex me-auto flex-column p-5">
                <div className="d-flex flex-column w-100">
                    <h1 className="fw-bold text-dark" style={{ fontSize: "80px" }}>Grow your collection</h1>
                    <p className="text-dark">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
                </div>
                <div className="d-flex">
                    <div className="d-flex flex-column w-25">
                        <button className={`btn w-75 text-start bg-white rounded shadow-sm fw-bold p-3`}><i className="bi bi-search h6"></i>&emsp;Bibendum tellus&emsp;<i className="bi bi-arrow-right h6"></i></button>
                        <button className={`btn w-75 text-start fw-bold p-3`}><i className="bi bi-shield-check"></i>&emsp;Cras eget</button>
                        <button className={`btn w-75 text-start fw-bold p-3`}><i className="bi bi-rocket"></i>&emsp;Dolor pharetra</button>
                        <button className={`btn w-75 text-start fw-bold p-3`}><i className="bi bi-display"></i>&emsp;Amet, fringilla</button>
                        <button className={`btn w-75 text-start fw-bold p-3`}><i className="bi bi-broadcast-pin"></i>&emsp;Amet nibh</button>
                        <button className={`btn w-75 text-start fw-bold p-3`}><i className="bi bi-sliders2-vertical"></i>&emsp;Sed velit</button>
                    </div>
                    <img src={windows} alt="windows" className="z-1 w-75 ms-auto" />
                </div>
                <div className={`d-flex align-self-center text-center`} style={textOffset}>
                    <p style={{fontSize: "80px"}} className="fw-bold">11,658,467<br />Shoes Collected</p>
                </div>
            </div>
            <div className="d-flex d-sm-none flex-column">
                <div className="z-1 d-flex flex-column">
                    <h1 className="fw-bold text-dark" style={{ fontSize: "80px" }}>Grow your collection</h1>
                    <p className="text-dark">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
                </div>
                <div className="z-1 d-flex flex-column">
                    <div className="d-flex w-100">
                        <button className={`btn w-75`}>Bibendum tellus</button>
                        <button className={`btn w-75`}>Cras eget</button>
                        <button className={`btn w-75`}>Dolor pharetra</button>
                        <button className={`btn w-75`}>Amet, fringilla</button>
                        <button className={`btn w-75`}>Amet nibh</button>
                        <button className={`btn w-75`}>Sed velit</button>
                    </div>
                    <img src={windows} alt="windows" className="z-1 w-100" />
                </div>
                <div className={`z-1 d-flex align-self-center`} style={{ paddingTop: "10px" }}>
                    <p className="text-dark">11,658,467<br />Shoes Collected</p>
                </div>
            </div>
            <div className={`z-0 position-absolute w-100 ${styles.bgPos} ${styles.bgColor} d-none d-sm-flex`}>
                <img src={background} alt="background" className="w-100" style={{ bottom: "0" }} />
            </div>
            
        </div>
    );
}