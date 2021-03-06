import React, { useEffect, useState } from 'react'

function CartBg() {
  const cssObjNone = [
    {
      transition: '0s',
      opacity: '1',
      transform: 'translate(-100px, -200px) rotate(40deg) scale(0.01)',
    },
    { transition: '0s', opacity: '0' },
    { transition: '0s', opacity: '0' },
  ]
  const cssObjShow = [
    {
      transition: '3s',
      opacity: '1',
      transform: 'translate(10%, 100px) rotate(-10deg) scale(-1.3,1.3)',
    },
    { transition: '2s', opacity: '1' },
    { transition: '3s', opacity: '1' },
  ]

  const [cssObj, setCssObj] = useState(cssObjNone)

  const handleSetCssObj = async () => {
    setCssObj(cssObjNone)
    setTimeout(() => {
      setCssObj(cssObjShow)
    }, 10)
  }

  // useEffect(() => {
  //   console.log('didmount and didupdate')
  // })
  useEffect(() => {
    handleSetCssObj()
    // console.log('didmount')
  }, [])
  useEffect(() => {
    // console.log(2)
    return () => setCssObj(cssObjNone)
  }, [])

  return (
    <>
      <div style={{}}></div>
      {/* 雙圓背景03 */}
      <div id="poe-cart-bg03" style={cssObj[2]}></div>
      {/* 紅圓背景02 */}
      <div id="poe-cart-bg02" style={cssObj[1]}></div>
      {/* 吉祥物背景01 */}
      <div id="poe-cart-bg01" style={cssObj[0]}></div>
    </>
  )
}

export default CartBg
