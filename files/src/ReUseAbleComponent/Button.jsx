import React, { Children } from "react";

export default function Button({
  id,
  className,
  width,
  height,
  onClick,
  type,
}) {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      style={{ width: width, height: height }}
      className={className}
    >
      {Children}
    </button>
  );
}
