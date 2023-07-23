import React from 'react'
import Headers from './Component/headers/Headers'
import '../Layout/Layout.css'


export default function Layout(props) {
  return (
    <div id="main-layout" className='ii'>
      <Headers/>

        <main className='inti' >
          {props.children}
        </main>

    
    </div>
  )
}
