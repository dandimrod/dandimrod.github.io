
    var canvas;
    function distance(x1, y1, x2, y2) {
        const xdist = x2 - x1;
        const ydist = y2 - y1;
        return Math.sqrt(Math.pow(xdist, 2) + Math.pow(ydist, 2));
    }
    function getRandomInt(ranNum, max, min){
        return Math.floor(Math.floor(ranNum * (max - min+1) ) + min);
    }
    function Circle() {
        var circle = {};
        let colors = ["#c5e9ed","#d8f0f3","#9dd9e1","#8ad2db"];

        function init() {
            generateShape();
            circle.velocity = {};
            circle.velocity.x = (Math.random()* (0.1 +0.1) ) - 0.1;
            circle.velocity.y = (Math.random()* (0.1 +0.1) ) -0.1;
            circle.colorFill = colors[Math.floor(Math.random()*colors.length)];
            circle.colorStroke = circle.colorFill;
        };
        function generateShape() {
            circle.r = getRandomInt(Math.random(),15,5);
            circle.x = getRandomInt(Math.random(),canvas.width,0);
            circle.y = getRandomInt(Math.random(),canvas.height,(canvas.height*3)/4);
            for (let index = 0; index < circles.length; index++) {
                const element = circles[index];
                if(circle!==element.circle){
                    if (distance(circle.x, circle.y, element.circle.x, element.circle.y) < (circle.r + element.circle.r)) {
                        generateShape();
                        break;
                    }
                }
            }
        }

        function update() {
            if(controllerState.mouse.left){
                if(distance(circle.x,circle.y,controllerState.mouse.x,controllerState.mouse.y)<60){
                    if(circle.x>controllerState.mouse.x){
                        circle.velocity.x=Math.abs(circle.velocity.x);
                    }else{
                        circle.velocity.x=-Math.abs(circle.velocity.x)
                    }
                    if(circle.y>controllerState.mouse.y){
                        circle.velocity.y=Math.abs(circle.velocity.y);
                    }else{
                        circle.velocity.y=-Math.abs(circle.velocity.y)
                    }
                }
            }

            if(circle.x>canvas.width+50||circle.x < -50||circle.y>canvas.height+50||circle.y < (((canvas.height*3)/4)-50)){
                generateShape();
            }
            if (circle.x > canvas.width - circle.r || circle.x < 0 + circle.r) {
                circle.velocity.x = -circle.velocity.x;
            }

            if (circle.y > canvas.height - circle.r || circle.y < (canvas.height*3)/4 + circle.r) {
                circle.velocity.y = -circle.velocity.y;
            }
            circle.x += circle.velocity.x;
            circle.y += circle.velocity.y;

            draw();
        }

        function draw() {

            c.beginPath();
            c.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
            c.fillStyle = circle.colorFill;
            c.fill();
            c.strokeStyle = circle.colorStroke;
            c.stroke();
        }

        return {
            circle,
            init,
            update
        };
    }

    function Background(){
        let background={};
        background.color="#63c2cf";
        background.speed=5;
        background.current=0;
        background.update=function(){
            this.draw();
        }
        background.draw=function(){
            c.fillStyle = this.color;
            c.fillRect(0, 0, canvas.width, canvas.height);
        }
        return background;
    }

    var background;
    var circles = [];
    var mist;
    
    function gameLogic() {
        drawingPile.push(background);
        for (let index = 0; index < circles.length; index++) {
            const element = circles[index];
            drawingPile.push(element);
        }
    };
    window.onload=function(){
        start();
    };
    function start(){
        canvas = document.getElementById("bg");
        canvas.style.zIndex=-99999999;
        canvas.style.position="absolute";
        canvas.style.top="0px";
        canvas.style.left="0px";
        canvas.style.height = "100%";
        canvas.style.width = "100%";
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        c = canvas.getContext("2d");
        background=new Background();
        for (let index = 0; index < 20; index++) {
            let circle = new Circle();
            circle.init();
            circles.push(circle);
        };
        // Canvas resizing
        window.addEventListener("resize", function (event) {
            canvas.style.height = "100%";
            canvas.style.width = "100%";
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        });
        // Controller handling
        window.addEventListener("mousemove", function (event) {
            controllerState.mouse.x = event.x;
            controllerState.mouse.y = event.y;
        });
        window.addEventListener("mousedown", function (event) {
            switch (event.button) {
                case 0:
                    controllerState.mouse.left = true;
                    controllerState.mouse.leftClick = +1;
                    break;

                case 1:
                    controllerState.mouse.central = true;
                    controllerState.mouse.centralClick = +1;
                    break;

                case 2:
                    controllerState.mouse.right = true;
                    controllerState.mouse.rightClick = +1;
                    break;

                default:
                    break;
            }
        });
        window.addEventListener("mouseup", function (event) {
            switch (event.button) {
                case 0:
                    controllerState.mouse.left = false;
                    break;

                case 1:
                    controllerState.mouse.central = false;
                    break;

                case 2:
                    controllerState.mouse.right = false;
                    break;

                default:
                    break;
            }
        });
        running=true;
        gameLoop();
    }
    var c;
    var running = false;
    var drawingPile = [];

    // Current controller state each iteration
    var controllerState = {
        mouse: {
            x: 0,
            y: 0,
            right: false,
            left: false,
            central: false,
            wheel: 0,
            rightClick: 0,
            leftClick: 0,
            centralClick: 0
        },
    };
    var input={
        save:"",
        count:0
    };
    
    //Resetting some assets after every loop finishes
    function loopReset() {
        controllerState.mouse.wheel = false;
        controllerState.mouse.rightClick = 0;
        controllerState.mouse.centralClick = 0;
        controllerState.mouse.leftClick = 0;

        controllerState.keyboard = [];

        drawingPile = [];
    }

    function gameLoop() {
        if (running) {
            requestAnimationFrame(gameLoop);
        }
        gameLogic();
        c.fillStyle = "#FFFFFF";
        c.fillRect(0, 0, canvas.width, canvas.height);
        for (let index = 0; index < drawingPile.length; index++) {
            drawingPile[index].update();
        }
        loopReset();

    }
    Array.contains = function (array, search) {
        var res = false;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element === search) {
                res = true;
                break;
            }
        }
        return res;
    }

