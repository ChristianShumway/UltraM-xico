import React from 'react'
import './LayoutNosotros.css'

const HomeLayout = props => {
  return(
    <div className="ContainerNosotros">
     { props.children }
    </div>
  )
}

export default HomeLayout