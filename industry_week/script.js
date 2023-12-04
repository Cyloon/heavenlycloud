const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
};

const formattedText1 = `
<div class="question">
    <p class="question-text">What areas and jobs are there within front-end?</p>
    <p>Front-end development encompasses diverse roles shaping user interfaces and experiences. Web developers use HTML, CSS, and JavaScript to create interactive website elements.</p>
    <p>UX designers ensure seamless user journeys through research and collaboration, while UI designers focus on aesthetics and usability.</p>
    <p>Interaction designers craft engaging animations, and front-end engineers bring designs to life.</p>
    <p>Responsive design specialists ensure interfaces adapt to different devices.</p>
    <p>Performance experts optimize code for speed, while accessibility advocates design inclusive interfaces.</p>
    <p>Front-end architects structure codebases and front-end developers streamline workflows using tools and automation.</p>
    <p>Front-end offers varied career paths for those passionate about user-centric digital experiences. With evolving technology and design trends, this field remains engaging and rewarding.</p>
</div>
`;

const formattedText2 = `
<div class="question">
    <p class="question-text">How will the jobs change over time?</p>
    <p>Front-end jobs will likely undergo significant changes over time due to technological advancements and evolving user expectations. With the rise of artificial intelligence and machine learning, front-end developers might need to integrate more dynamic and personalized user experiences. The growth of virtual and augmented reality could demand expertise in creating immersive interfaces. As devices diversify, like wearable tech, front-end specialists may need to optimize for even smaller screens.</p>
    <p>Moreover, the emphasis on accessibility and inclusivity will continue to reshape roles, requiring professionals to design for a wider range of user needs. With a shift towards remote work and collaboration, strong communication and teamwork skills will become more vital. The rapid pace of technological evolution ensures that front-end jobs will remain dynamic, requiring adaptability and a willingness to embrace new tools and trends.</p>
</div>
`;

const formattedText3 = `
<div class="question">
    <p class="question-text">What future or up-and-coming technologies will impact this industry, and how?</p>
    <p>The front-end development industry will be significantly influenced by emerging technologies. Extended Reality (XR), encompassing virtual and augmented reality, will demand immersive interface design. Progressive Web Apps (PWAs) will merge web and mobile app features, necessitating expertise in service workers and responsive design.</p>
    <p>Voice User Interfaces (VUIs) will thrive with AI, requiring user-friendly voice-responsive designs. Internet of Things (IoT) expansion will call for optimized interfaces across diverse devices. Blockchain will impact interface security for cryptocurrencies and decentralized apps. Data privacy concerns will reshape user-centric designs. Staying current will require adapting to trends like WebAssembly and new JavaScript libraries. The industry's future hinges on XR, PWAs, VUIs, IoT, and ongoing innovations, compelling front-end developers to embrace these changes for consistently exceptional user experiences.</p>
</div>
`;

const formattedText4 = `
<div class="question">
    <p class="question-text">What do you need to know or have learned to get a junior job?</p>
    <p>To secure a junior front-end development job, several key skills and knowledge areas are crucial. Proficiency in HTML, CSS, and JavaScript forms the foundation, including understanding their syntax, structure, and interaction. Familiarity with version control systems like Git is important for collaboration.</p>
    <p>You should grasp responsive design principles to ensure seamless experiences across devices. Basic knowledge of UI/UX concepts aids in creating user-friendly interfaces. Learning to use front-end libraries and frameworks, such as React or Angular, is beneficial.</p>
    <p>Understanding browser developer tools for debugging and optimizing code is essential. Basic knowledge of HTTP, APIs, and asynchronous programming helps interface with backend systems.</p>
    <p>Gaining practical experience through personal projects or internships showcases your abilities. Building a portfolio that demonstrates your skills and problem-solving capabilities is valuable.</p>
    <p>Effective communication and teamwork skills are vital for collaborating with designers and backend developers.</p>
    <p>Overall, a combination of technical proficiency, practical experience, and the ability to work well in a team will position you well for a junior front-end development role.</p>
</div>
`;

const formattedText5 = `
<div class="question">
    <p class="question-text">How do you get a job or get a promotion?</p>
    <p>To secure a job in front-end development, start by building a strong portfolio showcasing personal projects and demonstrating your skills. Network by attending tech events, online forums, and social media groups to connect with professionals in the field. Tailor your resume to highlight your relevant skills and experiences.</p>
    <p>During interviews, exhibit your technical knowledge and problem-solving abilities. Communication skills are equally crucial to convey your passion and enthusiasm for the role.</p>
    <p>To secure a promotion, consistently deliver high-quality work and show a willingness to learn and adapt to new technologies. Take on additional responsibilities and contribute ideas that improve processes or enhance user experiences. Seek feedback and actively work on areas of improvement. Demonstrating leadership qualities and a proactive attitude can set you apart for advancement opportunities.</p>
    <p>Doing upskills certificates can also help you to achieve a promotion. Obtaining training certificates on languages, security, scrum are examples of these upskills.</p>
    <p>Remember, continuous learning and staying updated on industry trends will contribute to your success in both obtaining a job and progressing in your career.</p>
</div>
`;

const formattedText6 = `
<div class="question">
    <p class="question-text">What range of salaries can be expected within front-end development?</p>
    <p>Here's an approximate range of monthly front-end development salaries in Swedish kronor (SEK) and US dollars (USD) for different experience levels and locations:</p>
    <ul class="salary-list">
        <li>Junior Front-End Developer:</li>
        <ul>
            <li>Sweden: 25,000 - 33,000 SEK ($2,900 - $3,800 USD)</li>
            <li>USA: $4,500 - $6,000 USD</li>
        </ul>
        <li>Mid-Level Front-End Developer:</li>
        <ul>
            <li>Sweden: 33,000 - 50,000 SEK ($3,800 - $5,700 USD)</li>
            <li>USA: $6,000 - $9,000 USD</li>
        </ul>
        <li>Senior Front-End Developer:</li>
        <ul>
            <li>Sweden: 50,000 - 66,000 SEK ($5,700 - $7,600 USD)</li>
            <li>USA: $9,000 - $12,000 USD</li>
        </ul>
    </ul>
    <p>These figures provide a general idea of monthly salaries across different experience levels and countries. Remember that salaries can vary based on numerous factors, including location, company size, industry, and individual negotiations. Additionally, exchange rates can fluctuate, affecting the conversion between SEK and USD. Always research specific job opportunities and industry trends for the most accurate salary expectations.</p>
</div>
`;

const formattedText7 = `
<div class="question">
    <p class="question-text">How do the salaries differ between different areas of front-end (or software development in general)?</p>
    <p>Salaries within different areas of front-end development, and software development in general, can vary based on the specific skills required, the demand for those skills, and the complexity of the tasks involved.</p>
    <p>Specialized roles, such as UI/UX designers, may command competitive salaries due to their crucial role in crafting user experiences. Front-end engineers skilled in advanced JavaScript frameworks might earn higher salaries due to their expertise in creating dynamic and interactive interfaces. Performance optimization specialists could also earn well, given their ability to improve user experiences by optimizing website speed and responsiveness.</p>
    <p>In contrast, more common skills like HTML and CSS proficiency might result in relatively lower salaries for junior positions. Backend development roles might have similar salary ranges, but with a focus on server-side technologies and database management.</p>
    <p>Software development areas that involve machine learning, AI, or blockchain may have higher earning potential due to the scarcity of specialized talent in these domains.</p>
    <p>Ultimately, the demand and complexity of skills play a significant role in determining salary differences across various areas of front-end and software development.</p>
</div>
`;

const formattedText8 = `
<div class="question">
    <p class="question-text">How does one negotiate a salary?</p>
    <p>Armed with a refined CV, ensure you're prepared with alternative job offers. This not only boosts your negotiating power but also offers a fallback. Engage in discussions grounded in mutual benefits, focusing on shared goals rather than sticking to a single stance. Understand the company's priorities and highlight your distinct value, aiming for a mutually advantageous agreement.</p>
    <p>Navigating salary discussions demands a tactical approach. Begin with in-depth research about industry standards and the company's pay norms. Once presented with a job offer, that's your cue to initiate negotiations. Instead of asking for a fixed amount, suggest a salary trajectory that escalates over time, showcasing your commitment to professional growth.</p>
    <p>Combine these tactics: foster a spirit of collaboration, explore shared growth trajectories, confidently underline your skills, and strive for aligned outcomes. This comprehensive approach enhances your negotiation position and encourages positive interactions.</p>
</div>
`;


const boxes = [
    { x: 40, y: 50, width: 50, height: 50, isVisible: true, isTouching: false, message: formattedText1, imageSrc: "box.png" },
    { x: 115, y: 150, width: 50, height: 50, isVisible: true, isTouching: false, message: formattedText2, imageSrc: "box.png" },
    { x: 230, y: 20, width: 50, height: 50, isVisible: true, isTouching: false, message: formattedText3, imageSrc: "box.png" },
    { x: 320, y: 50, width: 50, height: 50, isVisible: true, isTouching: false, message: formattedText4, imageSrc: "box.png" },
    { x: 50, y: 300, width: 50, height: 50, isVisible: true, isTouching: false, message: formattedText5, imageSrc: "box.png" },
    { x: 200, y: 250, width: 50, height: 50, isVisible: true, isTouching: false, message: formattedText6, imageSrc: "box.png" },
    { x: 250, y: 180, width: 50, height: 50, isVisible: true, isTouching: false, message: formattedText7, imageSrc: "box.png" },
    { x: 320, y: 350, width: 50, height: 50, isVisible: true, isTouching: false, message: formattedText8, imageSrc: "box.png" },
];

const arrowKeys = { left: false, up: false, right: false, down: false };

// Handle arrow key presses
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') arrowKeys.left = true;
    if (event.key === 'ArrowUp') arrowKeys.up = true;
    if (event.key === 'ArrowRight') arrowKeys.right = true;
    if (event.key === 'ArrowDown') arrowKeys.down = true;
});

// Handle arrow key releases
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') arrowKeys.left = false;
    if (event.key === 'ArrowUp') arrowKeys.up = false;
    if (event.key === 'ArrowRight') arrowKeys.right = false;
    if (event.key === 'ArrowDown') arrowKeys.down = false;
});

// Handle arrow button clicks on both mouse clicks and touch events
const arrowButtons = document.querySelectorAll('.arrowButton');

arrowButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
        handleArrowButtonClick(button.id, true);
    });
    button.addEventListener('touchstart', () => {
        handleArrowButtonClick(button.id, true);
    });

    button.addEventListener('mouseup', () => {
        handleArrowButtonClick(button.id, false);
    });
    button.addEventListener('touchend', () => {
        handleArrowButtonClick(button.id, false);
    });
});

function handleArrowButtonClick(buttonId, isPressed) {
    switch (buttonId) {
        case 'upButton':
            arrowKeys.up = isPressed;
            break;
        case 'leftButton':
            arrowKeys.left = isPressed;
            break;
        case 'downButton':
            arrowKeys.down = isPressed;
            break;
        case 'rightButton':
            arrowKeys.right = isPressed;
            break;
    }
}

function movePlayer() {
    if (arrowKeys.left && player.x > player.radius) player.x -= 2;
    if (arrowKeys.up && player.y > player.radius) player.y -= 2;
    if (arrowKeys.right && player.x < canvas.width - player.radius) player.x += 2;
    if (arrowKeys.down && player.y < canvas.height - player.radius) player.y += 2;
}

function checkCollision() {
    for (const box of boxes) {
        const touching = isCircleTouchingBox(player.x, player.y, player.radius, box);

        if (touching && !box.isTouching) {
            box.isTouching = true;
            displayMessage(box.message);
        } else if (!touching && box.isTouching) {
            box.isTouching = false;
        }
    }
}

function isCircleTouchingBox(circleX, circleY, circleRadius, box) {
    const closestX = Math.max(box.x, Math.min(circleX, box.x + box.width));
    const closestY = Math.max(box.y, Math.min(circleY, box.y + box.height));

    const distanceX = circleX - closestX;
    const distanceY = circleY - closestY;
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    return distanceSquared < (circleRadius * circleRadius);
}

function displayMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.innerHTML = message;
    messageContainer.appendChild(messageBox);
    messageContainer.scrollTop = 0; // Scroll to the top
    
    const hideMessage = () => {
        if (!isAnyBoxTouchingCircle()) {
            messageBox.remove();
            window.removeEventListener('scroll', hideMessage);
        }
    };
    
    window.addEventListener('scroll', hideMessage);
    
    const checkCollisionInterval = setInterval(() => {
        if (!isAnyBoxTouchingCircle()) {
            clearInterval(checkCollisionInterval);
            messageBox.remove();
        }
    }, 100); // Check collision every 100ms
}

function isAnyBoxTouchingCircle() {
    return boxes.some(box => box.isTouching);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (const box of boxes) {
        if (box.isVisible) {
            const image = new Image();
            image.src = box.imageSrc;
            context.drawImage(image, box.x, box.y, box.width, box.height);

            if (box.isTouching) {
                context.fillStyle = 'green';
                context.fillRect(box.x, box.y, box.width, box.height);
            }
        }
    }

    // Draw the circle as the last element in the canvas
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    context.fill();

    checkCollision();
    movePlayer(); // Move the player based on arrow keys
    requestAnimationFrame(draw);
}

const messageContainer = document.getElementById('messageContainer');

draw();
