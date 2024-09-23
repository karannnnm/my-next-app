import {ReactNode} from 'react'

export default function PhotoFeedLayout({
    children,
    modal,
}:{
    children:ReactNode,modal:ReactNode})
 {
  return (
    <div>
      {modal}
      {children}
    </div>
  )
}
