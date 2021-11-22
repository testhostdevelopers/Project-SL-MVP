import React from 'react'
import { motion } from "framer-motion"

const ShareThisNFTPopup = (props) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    let { setSingleCollectionPopup } = props;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants} className="place-a-bid-popup-container">
            <div className="border-radius bg-white popup-width">
                <div className="justify-content-between d-flex cursor-pointer mb-3">
                    <h3 className="">Share this NFT</h3>
                    <div className="popup-close-btn-outline cursor-pointer" onClick={() => { setSingleCollectionPopup(false); document.body.style.overflow = "scroll"; }}>
                        <i class="fas fa-times"></i>
                    </div>
                </div>

                <div className="nft-share-icons">
                    <ul>
                        <li>
                            <a href="#0">
                                <span>
                                    <i class="fab fa-twitter"></i>
                                </span>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>
                                    <i class="fab fa-facebook-f"></i>
                                </span>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>
                                    <i class="fab fa-telegram-plane"></i>
                                </span>
                                Telegram
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>
                                    <i class="fas fa-envelope"></i>
                                </span>
                                Email
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </motion.div>
    )
}

export default ShareThisNFTPopup
