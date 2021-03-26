import React from 'react'
import Header from '../Header.js'
import Button from '../Button.js'
import '../../App.css'
import MainContainer from '../MainContainer'
import './Home.css'

function Home() {
    return (
        <>
            <Header />
            <div className="content">
                <div className="content__wrapper">
                    <MainContainer containerStyle="main__container__lightborder">
                        <div className="presentation__content">
                            <div className="logo">LOGO</div>
                            <h2>Mastercraft Bamboo Monitor Riser</h2>
                            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                            <div className="buttons__container">
                                <Button buttonStyle="btn--primary">Back this project</Button>
                                <Button buttonStyle="btn--disabled">Bookmark TO EDIT</Button>
                            </div>
                        </div>
                    </MainContainer>
                    <MainContainer containerStyle="main__container__lightborder">
                        <h1>$89,914</h1>
                        <p>of $100,000 backed
                        5,007 total backers
                        56 days left
                        </p>
                    </MainContainer>
                    <MainContainer containerStyle="main__container__lightborder">
                        <h3>About this project</h3>

                        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.

                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                        to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                        <MainContainer containerStyle="main__container__greyborder">
                            <h1>Bamboo Stand</h1>
                            <p>Pledge $25 or more
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.
                            101 left
                            Select Reward</p>
                        </MainContainer>
                        <MainContainer containerStyle="main__container__greyborder">
                            <h1>Black Edition Stand</h1>
                            <p>Pledge $75 or more
                            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                            64 left
                            Select Reward
                            </p>
                        </MainContainer>
                        <MainContainer containerStyle="main__container__greyborder">
                            <h1>Mahogany Special Edition</h1>
                            <p>Pledge $200 or more
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.
                            0 left
                        Out of Stock</p>
                        </MainContainer>
                    </MainContainer>
                </div>
            </div>
        </>
    )
}

export default Home