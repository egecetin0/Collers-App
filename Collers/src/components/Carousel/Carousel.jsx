import React, { useEffect, useState } from 'react'
import styles from './carousel.module.css'

const Carousel = (props) => {
    const { children, show } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className={`${styles.bgColor} d-flex flex-column px-5`}>
            <div className='d-flex'>
                <h1 className='text-dark'>Because they love us</h1>
                <button onClick={prev} className={`${styles.leftArrow} ms-auto bold`}>
                    <i className="bi bi-arrow-left h5"></i>
                </button>

                <button onClick={next} className={`${styles.rightArrow} ms-3`}>
                    <i className="bi bi-arrow-right h5"></i>
                </button>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.carouselWrapper}>
                    <div
                        className={styles.carouselContentWrapper}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        <div
                            className={`${styles.carouselContent}`}
                            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
