import React from 'react'
import img1 from './images/sc3_img_export.jpg'
import img2 from './images/istockphoto-1165731864-612x612.jpg'
import './Insight.css'

const Insights = () => {
  return (
    <div>
        <div className='xxc'>
            <h2>
                WE SHIP YOUR GOODS
            </h2>
            <p>As if they were our own</p>
        </div>

        <div className="container" id='lex'>
            <div className="row">
                <div className="col" id='xvv'>
                    <img src={img1} alt="" />
                    <p>Export And Import
                    <br />
                    <br />
                    Our pro-active export services team helps cut red tape, navigate the latest regulations, minimize paperwork, expedite transit, and lower your costs, while prividing truly personalized service. You can be confident that our comprehensive export and import services get your goods and products where they're needed, fast, efficiently and with no stress to you at all.
                    </p>
                </div>
                <div className="col" id='xvi'>
                    <img src={img1} alt="" />
                    <p>
                        Ocean And Air Frieght
                        <br />
                        <br />
                        If you need to ship goods via air or ocean frieght, our experienced team will find you the fastest, safest and best priced carrier. We can give free, guartanteed quotes, coordinate worldwide transport arrangements, consolidate multiple suppliers, and arrange for hazardous and oversized cargo or consolidated weekly shipments around the world.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insights