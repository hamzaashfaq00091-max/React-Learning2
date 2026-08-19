"use client";

import { useState } from "react";

export default function AddToCart(){
    const [Added,Setadded]= useState(false)

    return(

        <button onClick={()=>Setadded(true)}>
            {Added? "Added to card":"Add to cart"}
        </button>
    )
}