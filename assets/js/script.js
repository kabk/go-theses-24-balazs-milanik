// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function () {
  let seconds = 0;
  let clockElement = document.querySelector(".clock");

  function updateClock() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
    clockElement.textContent = formattedTime;

    seconds++;
  }

  // $(".slider").on("click", function () {
  //   $("#map").slideToggle("slow", function () {
  //     let map = document.getElementById("#map");
  //     map.style.
  //     setTimeout(() => {
  //     }, 2500);
  //   });
  // });

  const dotElements = document.querySelectorAll(".dot");
  dotElements.forEach((dot) => {
    dot.addEventListener("click", resetClock);
  });

  function resetClock() {
    slideDoors();
    setTimeout(() => {
      seconds = 0;
      updateClock();
    }, 2500);
  }

  function slideDoors() {
    const door1 = document.getElementById("door_1");
    const door2 = document.getElementById("door_2");

    door1.style.left = "0";
    door2.style.right = "0";

    setTimeout(() => {
      door1.style.left = "-50vw";
      door2.style.right = "-50vw";
      map.style.display = "none";
    }, 2500);
  }

  // const visualElements = document.querySelectorAll('.visual');
  // visualElements.forEach((visual) => {
  //     visual.addEventListener('click', reveal);
  // });

  // function reveal() {
  // }

  // $(".visual").click(function(){
  //     $('figure').slideToggle();
  //   });

  // Update the clock every second
  setInterval(updateClock, 1000);
});

function scrollToSection(sectionIndex) {
  const sections = document.querySelectorAll(".wrapper li");
  const targetSection = sections[sectionIndex];
  setTimeout(() => {
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1500);
}

function togglediv() {
  var div = document.getElementById("map");
  div.style.display = div.style.display == "block" ? "none" : "block";
}

function toggleDescription(index) {
    var descriptions = document.querySelectorAll('.main .description');
    var description = descriptions[index - 1];
    description.classList.toggle("reveal");
}

document.addEventListener('DOMContentLoaded', function() {
  // Function to load SVG files into a side div
  function loadSVGsIntoSide(sideDiv, svgFiles) {
      // Directory path for the SVG files
      const directoryPath = "assets/graphics/Assets/";

      // Get the side index from the data-side-index attribute
      const sideIndex = parseInt(sideDiv.dataset.sideIndex);

      // Check if sideIndex is a number
      if (isNaN(sideIndex)) {
          console.error('Invalid data-side-index attribute:', sideDiv.dataset.sideIndex);
          return;
      }

      // Calculate the start index for SVG files
      const startIndex = sideIndex * 5;

      // Array to hold loaded SVG filenames for this side
      const loadedSVGs = [];

      // Load each SVG file into the side div
      for (let i = 0; i < 10; i++) {
          const index = startIndex + i;
          if (index >= svgFiles.length) break;

          const svgPath = directoryPath + svgFiles[index];

          // Check if the SVG file has already been loaded into this side
          if (loadedSVGs.includes(svgFiles[index])) {
              console.log(`SVG file ${svgFiles[index]} already loaded into side ${sideIndex}. Skipping.`);
              continue;
          }

          // Create an object element to embed the SVG
          const svgObject = document.createElement('object');
          svgObject.type = 'image/svg+xml';
          svgObject.data = svgPath;

          // Apply styles to the SVG object
          svgObject.style.maxHeight = '15vh';
          svgObject.style.width = '20vw';
          svgObject.style.position = 'sticky';
          svgObject.style.top = '0';

          // Append the SVG object to the side div
          sideDiv.appendChild(svgObject);

          // Add the loaded SVG filename to the loadedSVGs array
          loadedSVGs.push(svgFiles[index]);
      }
  }

  // Get all "side" divs
  const sideDivs = document.querySelectorAll('.side');

  // Array to hold the names of SVG files
  const svgFiles = [];
  for (let i = 1; i <= 1200; i++) {
      svgFiles.push(`a${i}.svg`);
  }

  // Load SVG files into each side div
  sideDivs.forEach((sideDiv, index) => {
      // Set the data-side-index attribute for each side div
      sideDiv.dataset.sideIndex = index;
      // Load SVGs into the side div
      loadSVGsIntoSide(sideDiv, svgFiles);
  });

  // Create a temporary div for SVGs within .site
  const siteGraphicsDiv = document.createElement('div');
  siteGraphicsDiv.classList.add('side_graphics');

  // Get the height of the sibling .main div
  const mainDivHeight = document.querySelector('.main').clientHeight;
  siteGraphicsDiv.style.height = mainDivHeight + 'px';

  // Append the temporary div to .site
  document.querySelector('.site').appendChild(siteGraphicsDiv);
});


// $(document).ready(function() {

//   var side = $('.side');
//   var main = $('.main');

//   side.height(main.height());

// });
