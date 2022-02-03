import React from 'react'
import './FoodStyles.css'

const Food = (props) => {
    return (
        <div style={{ background: `url('${props.bgImg}') no-repeat center center/cover` }} className='food'>
            <div className="container">
                <div style={{ background: `url('${props.bgImg1}') no-repeat center center/cover` }} className="left"></div>
                <div style={{ background: `url('${props.bgImg2}') no-repeat center center/cover` }} className="right"></div>
            </div>
        </div>
    )
}

export default Food
