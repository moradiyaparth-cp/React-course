import React from 'react'
import './Service.css'
import service_1 from '../../assets/Solar_EPC.jpg'
import service_2 from '../../assets/Solar_Residential.jpg'
import service_3 from '../../assets/Solar_Commercial.jpg'

const Service = () => {
  return (
    <div className='programs'>

        <div className="program">
            <img src={service_1} alt="service_1" />
            <div className="caption">
                <p>Solar EPC Projects</p>
            </div>
        </div>

        <div className="program">
            <img src={service_2} alt="service_2" />
            <div className="caption">
                <p>Solar EPC Residential</p>
            </div>
        </div>

        <div className="program">
            <img src={service_3} alt="service_3" />
            <div className="caption">
                <p>Solar EPC Commercial & Industrial</p>
            </div>
        </div>

    </div>
  )
}

export default Service