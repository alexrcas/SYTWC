var WIDTH = 1200;
var HEIGHT = 600;
var camera = new THREE.PerspectiveCamera(100, WIDTH / HEIGHT, 0.01, 1000);
var renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#webgl'),
  antialias: true,
});
renderer.setClearColor(0x4189B8);
renderer.setSize(WIDTH, HEIGHT);
var scene = new THREE.Scene();

var ambient = new THREE.AmbientLight( 0x999999 );
scene.add( ambient );
var light = new THREE.PointLight(0xffffff);
light.position.set(20, 50, 10);
scene.add(light);


var interaction = new THREE.Interaction(renderer, scene, camera);


let shapes = []
let winnerShapes = []
let emptyShapes = []
let winnerIndex = []
var counterForWin = 0
let score = 0
let level = 0
let time = parseInt($('#time').html())
let numberOfShapes = parseInt($('#shapes-num').html())
console.log($('#shapes-num'))


let cubeConstructor = (color) => {
    return new THREE.Mesh(
        new THREE.CubeGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({ color: color})
      );
}


let cylinderConstructor = (color) => {
    return new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({ color: color})
      );
}


let sphereConstructor = (color) => {
    return new THREE.Mesh(
        new THREE.SphereGeometry(1, 8, 8),
        new THREE.MeshPhongMaterial({ color: color})
      );
}


let getRandomNumer = (min, max) => {
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}

let rotate = (shape) => {
    shape.rotation.x += 0.05;
}

let shrink = (shape) => {
    shape.position.z = -15;
}

let stall = (shape) => {
    return null;
}


let names = ['cubos', 'cilindros', 'esferas']
let colors = [{'color': 'red', 'label': 'rojo'}, {'color': 'blue', 'label': 'azul'}, {'color': 'green', 'label': 'verde'}]
let constructors = [cubeConstructor, cylinderConstructor, sphereConstructor]
let movements = [{'f': rotate, 'label': 'giran'}, {'f': stall, 'label': 'no se mueven'}, {'f': shrink, 'label': 'han encogido'}]

let selectionShapesIndex = 0
let selectionColorsIndex = 0
let selectionMovIndex = 0



let checkWin = () => {
    if (counterForWin == 2) {
        $('#modalTitle').html('¡Perfecto!')
        $('#winnerModal').modal()
        $('#winnerModal').attr('result', true)
        counterForWin = 0;
    }

}

let endGame = () => {
    $('#winnerModal').modal()
    $('#modalTitle').html('¡Qué pena!')
    $('#winnerModal').attr('result', false)

}


let createEmptyShapes = () => {
    for (let i = 0; i < numberOfShapes; i++) {
        let fIndex = getRandomNumer(0, 2)
        fIndex = getRandomNumer(0, 2)
        let shape = constructors[fIndex](colors[getRandomNumer(0, 2)].color)
        shape.position.y = getRandomNumer(-10, 10);
        shape.position.x = getRandomNumer(-10, 10);
        shape.position.z = -10;
        shape.name = 'shape';
        shape.on('click', () => {
            endGame()
        })
        shapes.push(shape);
        emptyShapes.push(shape);
        scene.add(shape);
    }
}

let createWinnerShapes = () => {
    selectionShapesIndex = getRandomNumer(0, 2)
    selectionColorsIndex = getRandomNumer(0, 2)
    for (let i = 0; i < 2; i++) {
        let shape = constructors[selectionShapesIndex](colors[selectionColorsIndex].color)
        shape.position.y = getRandomNumer(-10, 10);
        shape.position.x = getRandomNumer(-10, 10);
        shape.position.z = -10;
        shape.name = 'shape';
        shape.on('click', () => {
            counterForWin++;
            scene.remove(shape);
            checkWin();
        })
        shapes.push(shape);
        winnerShapes.push(shape);
        scene.add(shape);
    }
}

let loadLevel = () => {

    names = ['cubos', 'cilindros', 'esferas']
    colors = [{'color': 'red', 'label': 'rojo'}, {'color': 'blue', 'label': 'azul'}, {'color': 'green', 'label': 'verde'}]
    constructors = [cubeConstructor, cylinderConstructor, sphereConstructor]
    movements = [{'f': rotate, 'label': 'giran'}, {'f': stall, 'label': 'no se mueven'}, {'f': shrink, 'label': 'han encogido'}]

    selectionShapesIndex = 0
    selectionColorsIndex = 0
    selectionMovIndex = 0

    createWinnerShapes()
    createEmptyShapes();

    selectionMovIndex = getRandomNumer(0, movements.length - 1);
    movFunction = movements[selectionMovIndex].f

    selectionEmptyMovIndex = getRandomNumer(0, movements.length - 1)
    while (selectionEmptyMovIndex == selectionMovIndex)
        selectionEmptyMovIndex = getRandomNumer(0, movements.length - 1)
    emptyMovFunction = movements[selectionEmptyMovIndex].f


    $('#score').html(score)
    $('#level').html(level)
    $('#time').html(time)
    $('#mission').html(`El reto es encontrar ${names[selectionShapesIndex]} de color ${colors[selectionColorsIndex].label} que ${movements[selectionMovIndex].label}`)
}

let destroyLevel = () => {
    shapes.map(shape => {scene.remove(shape)})
}


$('#next-level-btn').on('click', () => {
    $('#winnerModal').modal('hide')
    if ($('#winnerModal').attr('result') == 'true') {
        score += 10;
    }
    level++;
    if (level > 5) {
        window.location.replace(`/scores/${score}`)
    }
    destroyLevel();
    loadLevel();
})


loadLevel()

setInterval(() => {
    $('#time').html(parseInt($('#time').html() - 1))
    if ($('#time').html() == '0')
        endGame()
}, 1000)

function render() {
    renderer.render(scene, camera);

    winnerShapes.map(shape => {movFunction(shape)})
    emptyShapes.map(shape => {emptyMovFunction(shape)})

    requestAnimationFrame(render);
  }


  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }


render();