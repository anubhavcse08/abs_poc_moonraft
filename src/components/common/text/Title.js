import React from 'react'

const Title = ({value, type}) => {
    return (
        <>
        {type === "heading" && <h1 className="font-bold text-lg md:text-2xl md:mt-2">{value}</h1> }
        </>
    )
}

export default Title;