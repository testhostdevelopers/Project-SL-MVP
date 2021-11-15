import React, { useEffect, useState } from 'react'
import './assets/css/veriables.css';
import './assets/css/app.css';
import './assets/css/buy.css';
import './assets/css/navbar.css';
import 'antd/dist/antd.css';
import './assets/css/responsive.css';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Buy from './Pages/Buy';
import SignIn from './Pages/SignIn';
import Token from './Pages/Token';
import Cryptoloria from './Pages/Cryptoloria';
import Explore from './Pages/Explore';

import FullScreenImage from './Components/Popup/FullScreenImage';
import CreateCollectibleMultiplePopup from './Components/Popup/CreateCollectibleMultiplePopup';
import FinishedCollectiblePopup from './Components/Popup/FinishedCollectiblePopup';
import PlaceABidPopup from './Components/Popup/PlaceABidPopup';
import PlaceABidFollowPopup from './Components/Popup/PlaceABidFollowPopup';
import CoinConverPopup from './Components/Popup/CoinConverPopup';

import 'swiper/swiper-bundle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Cryptoloria} exact />
                    <Route path="/SignIn" component={SignIn} exact />
                    <Route path="/Token" component={Token} exact />
                    <Route path="/Buy" component={Buy} exact />
                    <Route path="/Explore" component={Explore} exact />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App
