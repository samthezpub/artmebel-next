"use client"

import React, {useEffect, useState} from 'react'
import Marquee from "react-fast-marquee";
import Image from "next/image";



export default function RunString({dir, length, width, height}) {
    let partners = Array(length).fill(0).map((_, i) => {});


    return (
        <Marquee className="marquee" pauseOnHover={true}>
            {partners.map((item, index) => (
                <Image key={index} loading={"lazy"} src={`/${dir}/${index}.png`} width={width} height={height} />
            ))}

        </Marquee>
    )
}
