import React from 'react';
import { useState,useEffect } from 'react';

export default function Timer(props) {
    useEffect(() => {
        setStart(true)
        
    })

    const [second,setSecond] = useState(0);
    const [start,setStart] = useState(false)

    const timer = (seconds) => {
        for (let i = 0; i<=seconds; i++) {
            setSecond(seconds += 1)
        }
    }

    if (start) {
        timer(3)
    }

    return (
        <div>
            {second}
        </div>
    )
}
