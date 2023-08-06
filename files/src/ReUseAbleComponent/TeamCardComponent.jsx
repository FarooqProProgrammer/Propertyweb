import React from 'react'

export default function TeamCardComponent(props) {
    return (
        <div>
            <p>
                <img
                    alt="Oxana Cankat"
                    className="fr-fir fr-dib fr-draggable"
                    src={props.img}
                    title="Oxana Cankat"
                    style={{ width: 200 }}
                />
            </p>
            <h2>{props.name}</h2>
            <p>
                <strong>
                    <em>{props.desgination}</em>
                </strong>
            </p>
            <p>
                {props.descriptionOne}
            </p>
            <p>
            {props.descriptionTwo}
            </p>
            <p>
            {props.descriptionThree}
            </p>
        </div>
    )
}
