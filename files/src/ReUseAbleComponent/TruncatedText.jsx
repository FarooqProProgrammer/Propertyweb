import React from 'react'

export default function TruncatedText({ text, maxLength }) {
    const words = text.split(' ');

    if (words.length <= maxLength) {
        return <span>{text}</span>;
    }

    const truncatedWords = words.slice(0, maxLength);
    const truncatedText = truncatedWords.join(' ');

    return (
        <span>
            <div dangerouslySetInnerHTML={{ __html: truncatedText }} />
        </span>
    )
}
