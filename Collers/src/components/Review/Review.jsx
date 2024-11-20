import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import comp1 from "../../assets/Comp1.png"
import comp2 from "../../assets/Comp2.png"
import comp3 from "../../assets/Comp3.png"
import reviewer1 from "../../assets/Reviewer1.png"
import reviewer2 from "../../assets/Reviewer2.png"
import reviewer3 from "../../assets/Reviewer3.png"
import styles from './review.module.css';

import { useState, useEffect } from "react";

export default function Review() {

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

    let carouselCountDisplay = 4;
    if (windowSize.innerWidth <= 730 && windowSize.innerWidth > 0) {
        carouselCountDisplay = 1;
    } else if (windowSize.innerWidth > 730 && windowSize.innerWidth <= 1440) {
        carouselCountDisplay = 3;
    }

    return (
        <Carousel show={carouselCountDisplay}>
            <div className={styles.cardWidth}>
                <div style={{ padding: 8 }}>
                    <Card
                        companyImg={comp1}
                        companyTitle="Zoomerr"
                        review="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                        reviewerImg={reviewer1}
                        reviewerName="Hellen Jummy"
                        reviewerTitle="Team Lead"
                    />
                </div>
            </div>
            <div className={styles.cardWidth}>
                <div style={{ padding: 8 }}>
                    <Card
                        companyImg={comp2}
                        companyTitle="Shells"
                        review="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                        reviewerImg={reviewer2}
                        reviewerName="Hellena John"
                        reviewerTitle="Co-founder"
                    />
                </div>
            </div>
            <div className={styles.cardWidth}>
                <div style={{ padding: 8 }}>
                    <Card
                        companyImg={comp3}
                        companyTitle="ArtVenue"
                        review="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                        reviewerImg={reviewer3}
                        reviewerName="David Oshodi"
                        reviewerTitle="Manager"
                    />
                </div>
            </div>
            <div className={styles.cardWidth}>
                <div style={{ padding: 8 }}>
                    <Card
                        companyImg={comp1}
                        companyTitle="Zoomerr"
                        review="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                        reviewerImg={reviewer1}
                        reviewerName="Hellen Jummy"
                        reviewerTitle="Team Lead"
                    />
                </div>
            </div>
        </Carousel>
    );
}