import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";
import './style.css';

const Gsap = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.clear();

        const buttons = {
            prev: document.querySelector(".btn--left"),
            next: document.querySelector(".btn--right"),
        };

        const cardsContainerEl = document.querySelector(".cards__wrapper");
        const appBgContainerEl = document.querySelector(".app__bg");
        const cardInfosContainerEl = document.querySelector(".info__wrapper");

        const cardElements = cardsContainerEl.children;
        const infoElements = cardInfosContainerEl.children;

        buttons.next.addEventListener("click", () => swapCards("right"));
        buttons.prev.addEventListener("click", () => swapCards("left"));

        function swapCards(direction) {
            const newIndex = direction === "right" ? (cardIndex + 1) % 3 : (cardIndex + 2) % 3;
            setCardIndex(newIndex);

            const currentCardEl = cardElements[newIndex];
            const previousCardEl = cardElements[(newIndex + 2) % 3];
            const nextCardEl = cardElements[(newIndex + 1) % 3];

            const currentBgImageEl = appBgContainerEl.children[newIndex];
            const previousBgImageEl = appBgContainerEl.children[(newIndex + 2) % 3];
            const nextBgImageEl = appBgContainerEl.children[(newIndex + 1) % 3];

            changeInfo(direction);
            swapCardsClass();

            removeCardEvents(currentCardEl);

            function swapCardsClass() {
                // ... (same as the original code)
            }
        }

        // ... (continue with the remaining JavaScript code)

        return () => {
            // Cleanup or remove any event listeners when the component unmounts
        };
    }, [cardIndex]);

    useEffect(() => {
        const images = document.querySelectorAll("img");
        const totalImages = images.length;
        let loadedImages = 0;

        images.forEach((image) => {
            imagesLoaded(image, (instance) => {
                if (instance.isComplete) {
                    loadedImages++;
                    let loadProgress = loadedImages / totalImages;
                    // Update the loading progress using React state here
                    // ...
                }
            });
        });

        if (loadedImages === totalImages) {
            setIsLoading(false);
        }
    }, []);

    return (
        <>
            <div className="app">

                <div className="cardList">
                    <button className="cardList__btn btn btn--left">
                        <div className="icon">
                            <svg>
                                <use xlink: href="#arrow-left"></use>
                            </svg>
                        </div>
                    </button>

                    <div className="cards__wrapper">
                        <div className="card current--card">
                            <div className="card__image">
                                <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
                            </div>
                        </div>

                        <div className="card next--card">
                            <div className="card__image">
                                <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
                            </div>
                        </div>

                        <div className="card previous--card">
                            <div className="card__image">
                                <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
                            </div>
                        </div>
                    </div>

                    <button className="cardList__btn btn btn--right">
                        <div className="icon">
                            <svg>
                                <use xlink: href="#arrow-right"></use>
                            </svg>
                        </div>
                    </button>
                </div>

                <div className="infoList">
                    <div className="info__wrapper">
                        <div className="info current--info">
                            <h1 className="text name">Highlands</h1>
                            <h4 className="text location">Scotland</h4>
                            <p className="text description">The mountains are calling</p>
                        </div>

                        <div className="info next--info">
                            <h1 className="text name">Machu Pichu</h1>
                            <h4 className="text location">Peru</h4>
                            <p className="text description">Adventure is never far away</p>
                        </div>

                        <div className="info previous--info">
                            <h1 className="text name">Chamonix</h1>
                            <h4 className="text location">France</h4>
                            <p className="text description">Let your dreams come true</p>
                        </div>
                    </div>
                </div>


                <div className="app__bg">
                    <div className="app__bg__image current--image">
                        <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
                    </div>
                    <div className="app__bg__image next--image">
                        <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
                    </div>
                    <div className="app__bg__image previous--image">
                        <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
                    </div>
                </div>
            </div>

            {isLoading && (
                <div className="loading__wrapper">
                    <div className="loader--text">Loading...</div>
                    <div className="loader">
                        <span></span>
                    </div>
                </div>
            )}


            <svg className="icons" style="display: none;">
                <symbol id="arrow-left" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <polyline points='328 112 184 256 328 400'
                        style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px' />
                </symbol>
                <symbol id="arrow-right" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <polyline points='184 112 328 256 184 400'
                        style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px' />
                </symbol>
            </svg>


            <div className="support">
                <a href="https://twitter.com/DevLoop01" target="_blank"><i className="fab fa-twitter-square"></i></a>
                <a href="https://dribbble.com/devloop01" target="_blank"><i className="fab fa-dribbble"></i></a>
            </div>
        </>
    );
};

export default Gsap;