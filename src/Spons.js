import React from 'react'
import './Spons.css'
import img1 from './images/logos/Alianca_Logo_RGB.svg'
import img2 from './images/logos/apm-terminals_pos.svg'
import img3 from './images/logos/HS_logo_tagline_colour_4c_pos.svg'
import img4 from './images/logos/SealandMaersk.svg'
import img5 from './images/logos/svitzer.svg'
import img6 from './images/logos/Twill-Logo_with_Endorsement_Full_Colour_LIGHT_RGB-01.svg'


const Spons = () => {
  return (
    <div className='spot'>
        <h5>SPONSORS:</h5>
        <ul>
            <li><img src={img1} alt="" /></li>
            <li><img src={img2} alt="" /></li>
            <li><img src={img3} alt="" /></li>
            <li><img src={img4} alt="" /></li>
            <li><img src={img5} alt="" /></li>
            <li><img src={img6} alt="" /></li>
        </ul>
    </div>
  )
}

export default Spons