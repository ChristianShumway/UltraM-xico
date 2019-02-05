import React from 'react'
import './LayoutHome.css'

const HomeLayout = props => {
  return(
    <div className="Container">
     { props.children }
    </div>
  )
}

export default HomeLayout