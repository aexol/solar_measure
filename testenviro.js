var world, camera, flap, gamePaused, jump, boxes, lastObstacle, lights;
var unitsToMeters = 0.66
var pause = function () {
  gamePaused = !gamePaused
}
window.setup = function () {
  setGL("agl");
  gamePaused = false
  var agl = new aexolGL();
  world = new Scene();
  camera = new Camera(0.1,100,176)
  PATH = ''
  niebo = basicShader({})
  shad = basicShader({useLights: true})
  lights = new Light([
  {
    lightPosition: new Vector(20.0, 20.0, 10.0),
    attenuation: 20.0,
    intensity: 1.5,
    color: [1.0, 0.9, 0.9]
  },
  {
    intensity: 0.2,
    lightType: 2.0,
    color: [0.8, 0.8, 0.8]
  }
  ])
  lastObstacle = 10000.0
  mats = new Material({
    color: [0.4, 1.0, 0.1]
  })
  meshPlane = Mesh.plane().rotate(90,0,0).scaleUniform(300.0)
  ground = new GameObject(world,{
    mesh:meshPlane,
    shader:shad,
    material:new Material({
      color:[0.6,0.6,0.65]
    }),
    light:lights
  })
  materialB = new Material({color:[1.0,0.7,0.7]})
  for(i=0;i<10;i++){
    for (var j = 0; j < 10; j++) {
      var scaleY = Math.floor(Math.random()*8)
      var moveY = scaleY/2.0
      var moveX = 2*i+Math.random()
      var moveZ = 2*j+Math.random()
      var bud = new GameObject(world,{
        mesh:Mesh.cube().scale(1.0,scaleY,1.0),
        material:materialB,
        light:lights,
        shader:shad
      })
      bud.move(moveX,moveY,moveZ)
    }
  }
  camera.setOrthoPerspective()
  camera.setLookAt(new Vector(10, 10, 10), new Vector(0, 10, 10), new Vector(0, 1, 0))
  function insideBuilding(){

  }
  function saveToFile(){
    
  }
  agl.init();
}
window.logic = function () {
  // obstacle logic
}
window.draw = function () {
  if (!gamePaused) {
    world.draw(camera)
  }
}
glStart(window.setup);
