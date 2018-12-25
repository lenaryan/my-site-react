import React from "react";

const Me = () => {
    return (
        <div className="container me">
            <h1 className="center">Hey, I'm Lena!</h1>
            <div className="text-me">
                <img class="materialboxed right z-depth-3" alt="Lena Ryan" src={require('../../images/me.jpg')} />
                <p>My full name is Elena Nichutina, Lena Ryan is a nickname for my art, music and everything at all.</p>
                <p>I love frontend. I breathe music, especially metal music.</p>
                <p>At the moment I'm working for a web studio as a web dev on different CMS in Apatity, Murmansk region, Russia.</p>
                <p>I want to become a frontend React dev so I learn React in my spare time.</p>
                <p>Also I:</p>
                <ul>
                    <li><i class="material-icons light-green-text text-accent-2 left">arrow_forward</i>create CSS-images on Codepen: codepen.io/lenaryan/</li>
                    <li><i class="material-icons light-green-text text-accent-2 left">arrow_forward</i>can speak Polish (had been living in Warsaw for 15 months)</li>
                    <li><i class="material-icons light-green-text text-accent-2 left">arrow_forward</i>squat 12x30kg (the number is growing)</li>
                    <li><i class="material-icons light-green-text text-accent-2 left">arrow_forward</i>growl like a male death metal vocalist</li>
                    <li><i class="material-icons light-green-text text-accent-2 left">arrow_forward</i>adore watching YouTube tutorials and conference talks</li>
                    <li><i class="material-icons light-green-text text-accent-2 left">arrow_forward</i>got all my frontend knowledge on YouTube</li>
                    <li><i class="material-icons light-green-text text-accent-2 left">arrow_forward</i>ride a mini-cruiser in summer and a snowboard in winter</li>
                    <li><i class="material-icons light-green-text text-accent-2 left">arrow_forward</i>want a corgi puppy</li>
                </ul>
            </div>
        </div>
    )
}

export default Me;