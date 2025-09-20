const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Draw rectangle
function drawRect(x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

drawRect(0, 0, canvas.width, canvas.height, 'black');
drawRect(100, 100, 50, 50, 'white');

function drawText(text, x, y, color) {
    context.fillStyle = color;
    context.font = '75px Eurostile';
    context.fillText(text, x, y);
}

// User paddle
const user = {
    x: 0,
    y: canvas.height / 2 - 50,
    width: 15,
    height: 100,
    color: 'white',
    score: 0 
}

// AI paddle
const com = {
    x: canvas.width - 10,
    y: canvas.height / 2 - 50,
    width: 15,
    height: 100,
    color: 'white',
    score: 0 
}

// Net
const net = {
    x: canvas.width / 2 - 2,
    y: 0,
    width: 2,
    height: 10,
    color: 'white',
}

function drawNet() {
    for (let i = 0; i < canvas.height; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// Ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 15,
    height: 15,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: 'white',
}

// Controls
canvas.addEventListener('mousemove', movePaddle);
function movePaddle(event) {
    let rect = canvas.getBoundingClientRect();
    if (user.y > canvas.height / 2) {
        user.y = Math.min(event.clientY - rect.top - user.height / 2, canvas.height - user.height);
    } else {
        user.y = Math.max(event.clientY - rect.top - user.height / 2, 0);
    }
}

// Collision detection
function collision(b, p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.height;
    b.bottom = b.y + b.height;
    b.left = b.x - b.width;
    b.right = b.x + b.width;

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;
}

// Render game
function render() {
    // Clear canvas
    drawRect(0, 0, canvas.width, canvas.height, 'black');
    
    // Draw score
    drawText(user.score, canvas.width / 4, canvas.height / 5, 'white'); // User score
    drawText(com.score, 3 * canvas.width / 4, canvas.height / 5, 'white'); // AI score
    
    drawNet();
    
    // Draw paddles
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);
    
    // Draw ball
    drawRect(ball.x, ball.y, ball.width, ball.height, ball.color);
}

function update() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    let computerLevel = 0.1;
    com.y += (ball.y - (com.y + com.height / 2)) * computerLevel;

    if (ball.y + ball.height > canvas.height || ball.y - ball.height < 0) {
        ball.velocityY = -ball.velocityY; // Reverse y direction
    }

    let player = (ball.x < canvas.width / 2) ? user : com;
    if (collision(ball, player)) {
        let collidePoint = ball.y - (player.y + player.height / 2);
        collidePoint = collidePoint / (player.height / 2);
        let angleRad = collidePoint * Math.PI / 4;
        
        let direction = (ball.x < canvas.width / 2) ? 1 : -1;
        
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = direction * ball.speed * Math.sin(angleRad);
        ball.speed += 2;
    }

    // Update score
    if (ball.x - ball.width < 0) {
        com.score++;
        resetBall();
    } else if (ball.x + ball.width > canvas.width) {
        user.score++;
        resetBall();
    }
}

// Reset ball to center
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speed = 5;
    ball.velocityX = -ball.velocityX;
}

// Game function
function game() {
    update(); // Movements, collision, score, etc.
    render();
}

// Game loop
let fps = 50;
let loop = setInterval(game, 1000 / fps);