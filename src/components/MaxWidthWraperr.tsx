import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWraperr = ({className,children}:{
    className?:String,
    children:ReactNode
}) => {
  return (
    <div className={cn("h-full max-w-screen-xl px-2.5 md:px-20 w-full mx-auto",className)}>
      {children}
    </div>
  )
}

export default MaxWidthWraperr
