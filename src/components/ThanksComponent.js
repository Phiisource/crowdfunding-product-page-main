import React from 'react'

import './ThanksComponent.css'

import MainContainer from './MainContainer'
import Button from './Button'

function ThanksComponent({onClose}) {

    return (
        <div className='thanks__container'>
            <MainContainer containerStyle='main__container__borderless' centeredContent>
                <div className="i__container">
                    <i className="fas fa-check"></i>
                </div>
                <h3>Thanks for your support!</h3>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campain is completed</p>
                <Button onClick={onClose}>Got it!</Button>
            </MainContainer>
        </div>
    )
}

export default ThanksComponent
