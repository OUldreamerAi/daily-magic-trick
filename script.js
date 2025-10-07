// wait for the page to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // stars in the background
    const starsContainer = document.getElementById('stars'); //Finds element whose id is stars
    for (let i = 0; i < 50; i++) { //Loop that runs 50 times
        const star = document.createElement('div'); //Create a new div elementnot visible yet
        star.className = 'star'; //Assigns the class star to the new ellement
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }

    // magic tricks 
    const magicTricks = [
        {
            name: "The Vanishing Coin",
            performance: "https://www.youtube.com/watch?v=gaYjZ8IBvds",
            tutorial: "https://www.youtube.com/watch?v=example1",
            description: `
                <h3>What You'll Need:</h3>
                <ul>
                    <li>A coin (quarter works best)</li>
                    <li>Your hands and practice</li>
                </ul>
                
                <h3>The Secret:</h3>
                <p>This classic trick uses a technique called the French Drop. The coin appears to transfer from one hand to the other, but it secretly stays in the original hand.</p>
                
                <h3>Steps:</h3>
                <ul>
                    <li>Hold the coin between your thumb and fingers of your left hand</li>
                    <li>Bring your right hand over to "take" the coin</li>
                    <li>As your right hand closes, let the coin drop into your left palm</li>
                    <li>Move your right hand away as if holding the coin</li>
                    <li>Keep your left hand natural and relaxed</li>
                    <li>Open your right hand to reveal the coin has vanished</li>
                </ul>
                
                <h3>Tips:</h3>
                <ul>
                    <li>Practice in front of a mirror</li>
                    <li>Keep your eyes on your right hand (where the coin should be)</li>
                    <li>The secret is misdirection - make your audience believe the coin moved</li>
                </ul>
            `
        },
        {
            name: "Mind Reading Card Trick",
            performance: "https://www.youtube.com/watch?v=example2",
            tutorial: "https://www.youtube.com/watch?v=example2tutorial",
            description: `
                <h3>What You'll Need:</h3>
                <ul>
                    <li>A standard deck of cards</li>
                    <li>A volunteer</li>
                </ul>
                
                <h3>The Secret:</h3>
                <p>This trick uses a mathematical principle and subtle card control to predict your volunteer's card.</p>
                
                <h3>Steps:</h3>
                <ul>
                    <li>Secretly glimpse the bottom card of the deck</li>
                    <li>Have a spectator pick any card and remember it</li>
                    <li>Ask them to place it on top of the deck</li>
                    <li>Cut the deck, bringing your key card next to theirs</li>
                    <li>Spread through the cards - their card is right after your key card</li>
                    <li>Reveal their card with flair</li>
                </ul>
                
                <h3>Tips:</h3>
                <ul>
                    <li>Make the peek subtle</li>
                    <li>Build suspense before the reveal</li>
                    <li>Practice your presentation</li>
                </ul>
            `
        },
        {
            name: "The Floating Card",
            performance: "https://www.youtube.com/watch?v=example3",
            tutorial: "https://www.youtube.com/watch?v=example3tutorial",
            description: `
                <h3>What You'll Need:</h3>
                <ul>
                    <li>A playing card</li>
                    <li>Invisible thread or a thin strand of hair</li>
                    <li>A small piece of wax or adhesive</li>
                </ul>
                
                <h3>The Secret:</h3>
                <p>The card is secretly attached to invisible thread, allowing you to control its movement.</p>
                
                <h3>Steps:</h3>
                <ul>
                    <li>Attach invisible thread to the card with a tiny bit of wax</li>
                    <li>Secure the other end to your button or shirt</li>
                    <li>Hold the card and slowly lean back to create tension</li>
                    <li>The card will appear to float as you move</li>
                    <li>Control the height by leaning forward or backward</li>
                </ul>
                
                <h3>Tips:</h3>
                <ul>
                    <li>Perform in dim lighting to hide the thread</li>
                    <li>Practice smooth movements</li>
                    <li>Keep your audience at the right angle</li>
                </ul>
            `
        },
        {
            name: "The Rubber Pencil",
            performance: "https://www.youtube.com/watch?v=example4",
            tutorial: "https://www.youtube.com/watch?v=example4tutorial",
            description: `
                <h3>What You'll Need:</h3>
                <ul>
                    <li>A regular pencil</li>
                    <li>Just your hands</li>
                </ul>
                
                <h3>The Secret:</h3>
                <p>This is an optical illusion - the pencil appears to bend when you shake it at just the right frequency.</p>
                
                <h3>Steps:</h3>
                <ul>
                    <li>Hold the pencil loosely between your thumb and index finger</li>
                    <li>Grip it near the eraser end</li>
                    <li>Shake it up and down at a medium speed</li>
                    <li>Keep your grip loose so the pencil wobbles</li>
                    <li>The pencil will appear to bend like rubber</li>
                </ul>
                
                <h3>Tips:</h3>
                <ul>
                    <li>Find the right shaking speed</li>
                    <li>Keep your grip loose and relaxed</li>
                    <li>This works with pens and other rigid objects too</li>
                </ul>
            `
        },
        {
            name: "The Levitating Ring",
            performance: "https://www.youtube.com/watch?v=example5",
            tutorial: "https://www.youtube.com/watch?v=example5tutorial",
            description: `
                <h3>What You'll Need:</h3>
                <ul>
                    <li>A ring (borrowed from the audience works great)</li>
                    <li>A rubber band hidden on your wrist</li>
                </ul>
                
                <h3>The Secret:</h3>
                <p>The ring is secretly threaded onto a rubber band that runs up your sleeve, allowing you to make it float.</p>
                
                <h3>Steps:</h3>
                <ul>
                    <li>Secretly loop the rubber band around your thumb</li>
                    <li>Thread the ring onto the band</li>
                    <li>Stretch your hands apart to create tension</li>
                    <li>The ring will stay suspended in mid-air</li>
                    <li>Wave your other hand around it to prove it's floating</li>
                    <li>Carefully remove and return the ring</li>
                </ul>
                
                <h3>Tips:</h3>
                <ul>
                    <li>Use a flesh-colored rubber band</li>
                    <li>Keep your hands moving to hide the band</li>
                    <li>Practice the setup until it's smooth</li>
                </ul>
            `
        }
    ];

    // figure out which day it is
    function getDayOfYear() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    // show today's date
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = today.toLocaleDateString('en-US', options);

    // pick today's trick
    const dayOfYear = getDayOfYear();
    const trickIndex = dayOfYear % magicTricks.length;
    const todaysTrick = magicTricks[trickIndex];

    // update the page
    document.getElementById('trickName').textContent = todaysTrick.name;
    document.getElementById('performanceLink').href = todaysTrick.performance;
    document.getElementById('tutorialLink').href = todaysTrick.tutorial;
    document.getElementById('tutorialContent').innerHTML = todaysTrick.description;
    
});


