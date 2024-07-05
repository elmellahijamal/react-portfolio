import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <footer>
        <p>Hope You Liked it , All right reserved <FontAwesomeIcon icon={faCopyright} /> 2024 </p>
    </footer>
  )
}

export default Footer