import React from 'react'

export default function Image({ src, className,alt,title,style ,width,height}) {
    return <img src={src} className={className} alt={alt} title={title} width={width} height={height} style={style}/>;
}
