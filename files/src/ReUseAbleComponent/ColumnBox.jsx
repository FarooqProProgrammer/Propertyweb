import React from 'react'

export default function ColumnBox({children,className,onClick,id}) {
  return (
    <div className={className} onClick={onClick} id={id}>
      {children}
    </div>
  )
}
