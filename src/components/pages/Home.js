import React from 'react'
import Header from '../Header.js'
import Button from '../Button.js'
import MainContainer from '../MainContainer'
import CardItem from '../CardItem'
import '../../App.css'
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
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

                        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                        to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                        <MainContainer containerStyle="main__container__greyborder">
                            <CardItem
                                cardName="Bamboo Stand"
                                minPledge={25}
                                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                                you’ll be added to a special Backer member list."
                                limitNumberEntry={101}/>
                        </MainContainer>
                        <MainContainer containerStyle="main__container__greyborder">
                            <CardItem
                                cardName="Black Edition Stand"
                                minPledge={75}
                                description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                                member list. Shipping is included."
                                limitNumberEntry={64}/>
                        </MainContainer>
                        <MainContainer containerStyle="main__container__greyborder">
                            <CardItem
                                cardName="Mahogany Special Edition"
                                minPledge={200}
                                description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                                to our Backer member list. Shipping is included."
                                limitNumberEntry={0}/>
                        </MainContainer>
                    </MainContainer>
                </div>
            </div>
        </>
    )
}

export default Home