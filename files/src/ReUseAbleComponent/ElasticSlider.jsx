import React, { useState } from 'react'
import Item from './Item'
import Carousel, { consts } from "react-elastic-carousel";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"


export default function ElasticSlider({ children, ItemShop }) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2 },
        { width: 768, itemsToShow: ItemShop },
        { width: 1200, itemsToShow: ItemShop }
    ];
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <BiChevronLeft size={28} /> : <BiChevronRight size={28} />
        return (
            <button className="carousel-btn" onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }
    return (
        <div className="w-full ml-0 mr-[100px]">
            <Carousel pagination={false} breakPoints={breakPoints} renderArrow={myArrow}>
                {children}
            </Carousel>
        </div>

    )
}
