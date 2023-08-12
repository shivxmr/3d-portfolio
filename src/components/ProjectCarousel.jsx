import { Carousel } from 'flowbite-react';

export default function ProjectCarousel() {
    return (
        <Carousel slideInterval={5000}>
            <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
            <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            />
            <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            />
            <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            />
            <img
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            />
        </Carousel>
    )
}