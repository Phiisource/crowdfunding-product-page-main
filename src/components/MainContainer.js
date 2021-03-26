import React from 'react'
import './MainContainer.css'

const STYLES = ['main__container__borderless', 'main__container__lightborder', 'main__container__greyborder']

function MainContainer({children, containerStyle}) {
    const checkButtonStyle = STYLES.includes(containerStyle) ? containerStyle : STYLES[0];

    return (
        <div className={`main__container ${checkButtonStyle}`}>
            {children}
        </div>
    )
}

export default MainContainer
