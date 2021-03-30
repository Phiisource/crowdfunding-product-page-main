import React, { useState } from 'react'

import '../App.css'
import './CardItem.css'

import Button from './Button'
import ThanksComponent from './ThanksComponent'

function CardItem({cardName, minPledge, description, limitNumberEntry}) {
    const [isOpen, setOpen] = useState(false)

    const openThanksComponent = () => {
        setOpen(true)
    }

    const closeThanksComponent = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="card-header">
                <h3>{cardName}</h3>
                <span>Pledge ${minPledge} or more</span>
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
            <div className="card-bottom">
                <div className="numberLeft">
                    <h2>{limitNumberEntry}</h2>
                    <p>left</p>
                </div>
                <Button onClick={openThanksComponent}>Select Reward</Button>
            </div>
            {isOpen && <ThanksComponent onClose={closeThanksComponent}/>}
        </>
    )
}

export default CardItem
