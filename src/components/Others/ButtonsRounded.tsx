import React from 'react'

export default function ButtonsRounded({children, onClick, invert=false}: {children: React.ReactNode, onClick?: () => void, invert?: boolean}) {
  return (
    <button className={`border border-transparent py-2 px-4 rounded-full min-w-26 ${invert ? "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white" : "bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary"}`} onClick={onClick}>
      {children}
    </button>
  )
}
