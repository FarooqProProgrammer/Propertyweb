import React from 'react';

function Text({ children, className, style, varient }) {

    if (varient === 'h2') {
        return (
            <h2 className={`text-base ${className}`} style={style}>
                {children}
            </h2>
        )
    }
    
    else if (varient === 'h3') {
        return (
            <h3 className={`text-base ${className}`} style={style}>
                {children}
            </h3>
        )
    }
    
    else if (varient === 'p') {
        return (
            <p className={`text-base ${className}`} style={style}>
                {children}
            </p>
        )
    }



}

export default Text;
