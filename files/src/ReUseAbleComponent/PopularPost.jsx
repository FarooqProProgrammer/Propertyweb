import React from "react";
import { Link } from "react-router-dom";
export default function PopularPost({ PostData }) {
  return (
    <div className="widget">
      <h3 className="title" style={{}}>
        Popular Posts
      </h3>
      <div className="body">
        <ul className="no-bullet">
          {PostData.map((item) => {
            return (
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: item.link,
                    },
                  }}
                >
                  {item.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
