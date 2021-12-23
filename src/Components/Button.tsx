import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode

  variant: 'primary' | 'secondary'
}

export const Button = (props: Props) => {
  return <button {...props}></button>
}
