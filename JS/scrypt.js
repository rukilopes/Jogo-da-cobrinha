let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box); //x e y, altura e largura do cenário-quadrado
}

function criarCobrinha(){
    for(i=0; i < snake.length ; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right")snakeX += box;
    if(direction = "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop(); //retirar o último elemento do array

    let newhead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newhead);
}

let jogo = setInterval(iniciarJogo,100);//100 milisegundos para reiniciar o jogo


