import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButton'
import '../components/carousel.css'

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])

    return (
        <div className="relative">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <img src="/Manga/storyboard_1.jpg" alt="Manga Page 1" className="object-contain h-full" />
                    </div>
                    <div className="embla__slide">
                        <img src="/Manga/storyboard_2.jpg" alt="Manga Page 2" className="object-contain h-full" />
                    </div>
                    <div className="embla__slide">
                        <img src="/Manga/storyboard_3.jpg" alt="Manga Page 3" className="object-contain h-full" />
                    </div>
                    <div className="embla__slide">
                        <img src="/Manga/Lockhart_Manga_Pg1.png" alt="Manga Page 4" className="object-contain h-full" />
                    </div>
                    <div className="embla__slide">
                        <img src="/Manga/Lockhart_Manga_Pg2.png" alt="Manga Page 5" className="object-contain h-full" />
                    </div>
                    <div className="embla__slide">
                        <img src="/Manga/Lockhart_Manga_Pg3.png" alt="Manga Page 6" className="object-contain h-full" />
                    </div>
                </div>
            </div>

            <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    )
}