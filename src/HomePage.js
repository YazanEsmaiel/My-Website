import React from 'react'
import { MyImage } from './Image'
import { MainContent } from './mainContent'

export const HomePage =() => {
  return (
    <div style={{       
        display: "flex",
        alignItems: "center",
        height:"100vh",
        overflow:"hidden",
        background: "linear-gradient(to top right,rgb(71, 0, 97) 30% ,rgb(63, 0, 157) 90% )",
        
        
      }}>
        <MyImage />
        <MainContent />
    </div>
  )
}
