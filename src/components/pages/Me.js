import React from "react";

const Me = () => {
    return (
        <main className="container me">
            <h1 className="center">Hey, I'm Lena!</h1>
            <div className="text-me">
                <img class="right z-depth-3" alt="Lena Ryan" src={require('../../images/me.jpg')} />
                <p>My full name is Elena Nichutina, Lena Ryan is a nickname for my art, music and everything at all.</p>
                <p>I love frontend. I breathe music, especially metal music.</p>
                <p>At the moment I'm working for a web studio as a web dev on different CMS in Apatity, Murmansk region, Russia.</p>
                <p>I want to become a frontend React dev so I learn React in my spare time.</p>
                <p>Also I:</p>
                <ul>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>create CSS-images and stuff on Codepen as <a href="https://codepen.io/lenaryan/" target="_blank" rel="noopener noreferrer" className="light-green-text text-accent-2">Lena Ryan</a></li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>can speak Polish (had been living in Warsaw for 15 months)</li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>squat 12x35kg (the number is growing)</li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>play guitar, drums and growl like a male death metal vocalist</li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>adore watching YouTube tutorials and conference talks</li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>collect guitar picks</li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>got all my frontend knowledge on YouTube</li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>ride a mini-cruiser in summer and a snowboard in winter</li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>have the only bad habit - I love eating</li>
                    <li><span class="material-icons light-green-text text-accent-2 left">arrow_forward</span>want a corgi puppy</li>
                </ul>
            </div>
        </main>
    )
}

export default Me;