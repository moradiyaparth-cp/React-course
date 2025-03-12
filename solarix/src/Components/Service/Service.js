import React from 'react'
import './Service.css'
import service_1 from '../../assets/Solar_EPC.jpg'
import service_2 from '../../assets/Solar_Residential.jpg'
import service_3 from '../../assets/Solar_Commercial.jpg'
// import program_icon_1 from '../../assets/program-icon-1.png'
// import program_icon_2 from '../../assets/program-icon-2.png'
// import program_icon_3 from '../../assets/program-icon-3.png'

const Service = () => {
  return (
    <div className='programs'>

        <div className="program">
            <img src={service_1} alt="" />
            <div className="caption">
                {/* <img src={program_icon_1} alt="" /> */}
                <p>Solar EPC Projects</p>
            </div>
        </div>

        <div className="program">
            <img src={service_2} alt="" />
            <div className="caption">
                {/* <img src={program_icon_2} alt="" /> */}
                <p>Solar EPC Residential</p>
            </div>
        </div>

        <div className="program">
            <img src={service_3} alt="" />
            <div className="caption">
                {/* <img src={program_icon_3} alt="" /> */}
                <p>Solar EPC Commercial & Industrial</p>
            </div>
        </div>

    </div>
  )
}

export default Service