/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

/*function preload() {
  treeModel = loadAsset("albero.glb");
}

function setup() {
  createCanvas3D(windowWidth, windowHeight);
  
  //Change background color of the scene
  background3D("#333333");
  
  hideGrid();
  
  var tree = clone(treeModel,0,0,0);

  align(BOTTOM);
  diffuse("grey");
  box(0, 0, 0, 6, 0.5, 6);
}

function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}*/

function setup() {
  createCanvas3D(windowWidth, windowHeight);
  /*createCanvas3D(600, 400);
  /*background3D("#00A0F0");*/
  /*enviroment(NEON);*/
   environment(STARS);
  
  var quercia = beginGroup();
  diffuse("#76c893");
  sphere(0, 2.7, 0, 1.6);
  capsule(0, 2.7, 0, 1.2, 1);
  sphere(1, 3.2, 0, 1.4);
  diffuse("#184e77");
  align(TOP);
  cylinder(0, 0, 0, 0.3, 2.4);
  endGroup();
  
  var lato = 70;
  var numeroAlberi = 90;
  for (var i=0; i<numeroAlberi; i++)
    {
      var x = random(-lato/2, lato/2);
      var y = 0;
      var z = random(-lato/2, lato/2);

      clone(quercia, x, y, z);
      
      var nuovoAlbero = clone(quercia, x, y, z);
      nuovoAlbero.setScale(random(0.5, 1.6));
    }
 align(BOTTOM);
 diffuse("#34a0a4");
 box(0, 0, 0, lato, 2, lato, 2);
 pushFX(BLOOM, 0.18);
 
}

function draw() {
  
}