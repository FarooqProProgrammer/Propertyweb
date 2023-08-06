import React from 'react'

export default function NavTab({children}) {
  return (
    <ul  className="nav nav-tabs justify-content-center gap-x-10">
      {children}
    </ul>
  )
}
