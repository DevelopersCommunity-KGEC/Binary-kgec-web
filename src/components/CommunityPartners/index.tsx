import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { communityPartnersItems } from '@/constants/communityPartners'
import Image from 'next/image'
import PageSection from '@/hooks/PageSection'
import BinaryText from '../Animations/BinaryText'
import styled from 'styled-components'
import { CustomNextArrow, CustomPrevArrow } from '../Mentors';

import { StaticImageData } from 'next/image';

interface MemberComponentProps {
    url: string
    imageUrl: string | StaticImageData
}

// Custom media query hook implementation
const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const media = window.matchMedia(query)
            const updateMatch = () => setMatches(media.matches)

            // Set initial value
            updateMatch()

            // Listen for changes
            media.addEventListener('change', updateMatch)

            // Clean up
            return () => {
                media.removeEventListener('change', updateMatch)
            }
        }

        return undefined
    }, [query])

    return matches
}

const Section = styled.section<{ theme: { body: string } }>`
  min-height: fit-content;
  width: full;
  background-color: ${(props) => props.theme.body};
  position: relative;
`

const MemberComponent: React.FC<MemberComponentProps> = ({
    url = '',
    imageUrl = '',
}) => {
    return (
        <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className='flex justify-center items-center'
        >
            <Image
                src={imageUrl}
                alt='Community Partner'
                width={150}
                height={150}
                className='w-24 h-24 sm:w-28 sm:h-28 object-contain'
            />
        </a>
    )
}

const CommunityPartners = () => {
    const isMobile = useMediaQuery("(max-width: 767px)")

    const sliderSettings = {
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,

        responsive: [
            {
                breakpoint: 2224,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <PageSection id="community-partners" className={isMobile ? `min-h-fit` : ''}>
            <Section>
                <div className="mt-[96px] md:mt-[116px]">
                    <BinaryText
                        className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem]"
                        reveal
                    >
                        <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
                            <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
                                <span className="flex-none pl-1 font-bold tracking-wider text-green-500 opacity-85">
                                    08.
                                </span>
                                <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
                                    Community Partners
                                </span>

                                <div className="item-center flex flex-col justify-center">
                                    <div className="right-full ml-4 mt-[10px] h-[4px] w-[70vh] transform bg-green-500"></div>
                                </div>
                            </h2>
                        </div>
                        <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
                            <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
                                <span className="flex-none pl-4 font-bold tracking-wider text-green-500 opacity-85">
                                    08.
                                </span>
                                <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
                                    Community Partners
                                </span>

                                <div className="item-center flex flex-col justify-center">
                                    <div className="right-full top-[55%] ml-4 mt-[25px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
                                </div>
                            </h2>
                        </div>
                    </BinaryText>
                </div>

                {isMobile ? (
                    <div className="mx-auto mt-20 md:mt-10">
                        <Slider
                            {...sliderSettings}
                            className="ml-8 mr-8 flex items-center justify-center lg:ml-[4%] lg:mr-[4%]"
                        >
                            {communityPartnersItems.map((item, index) => (
                                <MemberComponent url={item.url} imageUrl={item.imageUrl} />

                            ))}

                        </Slider>
                    </div>
                ) : (
                    <div className='grid grid-cols-12 gap-6'>
                        {communityPartnersItems.map((item, index) => {
                            const lastRow = communityPartnersItems.length % 4;
                            if (lastRow === 0 || index < (communityPartnersItems.length - lastRow)) {
                                return (
                                    <span className='col-span-3' key={index}>
                                        <MemberComponent
                                            url={item.url}
                                            imageUrl={item.imageUrl} />
                                    </span>
                                )
                            }
                            else if (index >= (communityPartnersItems.length - lastRow)) {
                                if (lastRow === 1) {
                                    return (
                                        <span className='col-span-12' key={index}>
                                            <MemberComponent
                                                url={item.url}
                                                imageUrl={item.imageUrl} />
                                        </span>
                                    )
                                }
                                else if (lastRow === 2) {
                                    return (
                                        <span className='col-span-6' key={index}>
                                            <MemberComponent
                                                url={item.url}
                                                imageUrl={item.imageUrl} />
                                        </span>
                                    )
                                }
                                else if (lastRow === 3) {
                                    return (
                                        <span className='col-span-4' key={index}>
                                            <MemberComponent
                                                url={item.url}
                                                imageUrl={item.imageUrl} />
                                        </span>
                                    )
                                }
                            }
                        }
                        )}
                    </div>
                )}
            </Section>
        </PageSection>
    )
}

export default CommunityPartners