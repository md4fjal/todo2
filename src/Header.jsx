import React from 'react'

function Header() {
    const nav = {
        width: "100vw",
        height: "30px",
        color: "red",
        background: "blue",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
  return (
    <div style={{...nav}}>
      Header
    </div>
  )
}

export default Header
