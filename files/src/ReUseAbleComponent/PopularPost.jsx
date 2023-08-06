import React from 'react'

export default function PopularPost({ PostData }) {
    return (
        <div className="widget">
            <h3 className="title" style={{}}>
                Popular Posts
            </h3>
            <div className="body">
                <ul className="no-bullet">
                    {
                        PostData.map((item) => {
                            return (
                                <li>
                                    <a href={`/${item.link}`}>
                                        {item.link}
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}
