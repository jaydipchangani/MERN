import React, { useEffect, useState } from 'react'

function Window() {
    const[width,setWidth] = useState(window.innerWidth)
    const[heigth,setHeight] = useState(window.innerHeight)

    const[scrollY,setScrollY] = useState(window.scrollY)

    const[pressKey,setPressKey] =useState('')
    useEffect(()=>{
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize',handleResize);

        const handleHeight = () => setHeight(window.innerHeight)
        window.addEventListener('resize',handleHeight)

        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll',handleScroll)

        const handleKeyPress =(e) =>setPressKey(e.key)
        window.addEventListener('keydown',handleKeyPress)

        return () => {window.removeEventListener('resize',handleResize);
                      window.removeEventListener('resize',handleHeight)
                      window.removeEventListener('scroll',handleScroll)
                      window.removeEventListener('keydown',handleKeyPress)
        }
    },[])
  return (
    <div>
      Window width: {width} px & Height: {heigth} px

      <div style={{position: 'fixed'}}>Scroll Position : {scrollY} px</div>
      <div style={{ height: '1000px', backgroundColor: 'red' }}> Hello</div>
       Key Press :{pressKey}
    </div>
  )
}

export default Window
