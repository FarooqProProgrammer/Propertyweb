import React from 'react'
import Image from './Image'

export default function DisplayComponent({title,Description,img}) {
    return (
        <>
            <h2>
                <strong>{title}</strong>
            </h2>
            <p>
                {Description}
            </p>
            <p>
                <img
                    alt="A decade in the making"
                    className="fr-fin fr-dib fr-draggable "
                    src={img}
                    style={{ width: 1200 }}
                />
            </p>
            <p>
                <br />
            </p>

        </>
    )
}
