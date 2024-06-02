"use client"
import SlideItems from '@/components/SlideItems';
import { slide_items } from '@/data/constData';
import React from 'react'
import Slider from "react-slick";

export default function ShopHero() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='container'>
            <div className='max-w-full bg-primary/5 rounded-lg p-3'>
                <Slider {...settings}>
                    {slide_items.map((c, i) => <SlideItems key={i} description={c.description} image={c.image} title={c.title} btnText={c.btnText} smallText={c.smallText} url={c.url} infoText={c.infoText} />)}
                </Slider>
            </div>
        </div>
    )
}
