import React, { useState } from 'react'
import './style.css';
import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"
import StarlBanner from './StarlBanner';
import PrimedandReady from './PrimedandReady';
import WeAreHereSec from './WeAreHereSec';
import TheStarlightDAOSec from './TheStarlightDAOSec';
import ClimeworksSec from './ClimeworksSec';


const index = () => {
    return (
        <>
          <StarlBanner />
          <PrimedandReady />
          <TheStarlightDAOSec />
          <ClimeworksSec />
          <WeAreHereSec />
        </>
    )
}

export default index
