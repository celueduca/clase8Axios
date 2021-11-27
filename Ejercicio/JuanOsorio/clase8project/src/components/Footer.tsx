import React from 'react'

interface Props {
    text: string;
    year: number;
}

export const Footer = (props: Props) => {
    return (
        <>
            <h5>{props.text + " " + props.year}</h5>
        </>
    )
}

export default Footer
