$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
// TODO 1 - Enable the Grid

//toggleGrid();


// TODO 2 - Create Platforms

createPlatform(100, 680, 220, 20, "lime");
createPlatform(380, 580, 180, 20, "hotpink");
createPlatform(200, 480, 160, 20, "orange");
createPlatform(450, 380, 190, 20, "cyan");
createPlatform(720, 280, 170, 20, "magenta");


// TODO 3 - Create Collectables

createCollectable("diamond", 230, 430, 0, 0);
createCollectable("steve", 500, 330, 0.5, 0.5);
createCollectable("grace", 760, 230, 0, 0);


// TODO 4 - Create Cannons
createCannon("top", 200, 700);
createCannon("right", 270, 700);
createCannon("bottom", 550, 1000)

    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
