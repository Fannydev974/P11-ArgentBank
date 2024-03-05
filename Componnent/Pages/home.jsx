import React from 'react'
import "./Home.css"
import img_chat from "./img/icon-chat_1.avif";
import img_money from "./img/icon-money_1.avif";
import img_security from "./img/icon-security_1.avif";

import Features from '../Features/features.jsx';

function home() {
    return (
        <main className='main_home'>

            <div className='Features'>
                <Features
                    image={img_chat}
                    alt="icône chat"
                    title="You are our #1 priority"
                    content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />

                <Features
                    image={img_money} alt="icône de billet" title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!" />

                <Features
                    image={img_security} alt="icône d'un bouclier de sécurité" title="Security you can trust" content="We use top of the line encryption to make sure your data and money is always safe." />
            </div>
        </main>
    )
}

export default home