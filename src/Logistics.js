import React from 'react'
import img1 from './images/transportation-services_illustration.svg'
import img2 from './images/supply-chain-logistics_illustration.svg'
import img3 from './images/financial-services_illustration.svg'
import img4 from './images/digital-solutions_illustration.svg'
import './Logistics.css'

const Logistics = () => {
  return (
    <div>
        <div className='tt'>
            <h2>Logistics Solutions</h2>
            <p>From the farm to your refrigerator, or the factory to your wardrobe, A.P. Moller - Maersk is developing solutions that meet customer needs from one end of the supply chain to the other.</p>
            <button>See all solutions</button>
        </div>
        <div className="container">
            <div className="row" id='roww'>
                <div className="col" id='cola'>
                    <img src={img1} alt="" />
                    <h6>Transportatin Services</h6>
                    <p>Learn more about our shipping services from 300 ports around the world. Maersk can connect your business globally and we make shipping simple.</p>
                </div>
                <div className="col" id='colb'>
                <img src={img2} alt="" />
                    <h6>Supply Chain and Logistics</h6>
                    <p>We focus on solving your supply chaon needs from end to end, taking the complexity out of container shipping for you.</p>
                </div>
                <div className="col" id='colc'>
                <img src={img3} alt="" />
                    <h6>Financial Services</h6>
                    <p>As experts in global integrated logistics, we provide storng financial and compensation solutions to meet your end to end supply chain needs.</p>
                </div>
                <div className="col" id='cold'>
                <img src={img4} alt="" />
                    <h6>Digital Solutions</h6>
                    <p>Our tailored online services take the complexity out of shipping by letting you instantly book, manage and track shipments, submit verified Gross Mass information and much more.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logistics