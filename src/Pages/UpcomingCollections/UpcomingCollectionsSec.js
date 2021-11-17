import React, { useEffect, useState } from 'react'
import Collections1Img from '../../assets/img/custom/collections1.png'
import { useLocation, Link } from "react-router-dom";

const UpcomingCollectionsSec = () => {
return (
        <section className="upcoming-collections-sec">
            <div className="container">
                <div className="upcoming-collections-box">
                    <div className="upcoming-collections-img">
                        <img src={Collections1Img} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UpcomingCollectionsSec