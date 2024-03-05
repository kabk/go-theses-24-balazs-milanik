// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function () {
  const dotElements = document.querySelectorAll(".dot");
  
  dotElements.forEach((dot) => {
    dot.addEventListener("click", function() {
      resetActiveDots();
      dot.classList.add("active");
      slideDoors(); // Call the sliding doors function
    });
  });
  
  function resetActiveDots() {
    dotElements.forEach((dot) => {
      dot.classList.remove("active");
    });
  }
  
  function slideDoors() {
    const door1 = document.getElementById("door_1");
    const door2 = document.getElementById("door_2");

    door1.style.left = "0";
    door2.style.right = "0";

    setTimeout(() => {
      door1.style.left = "-50vw";
      door2.style.right = "-50vw";
      map.style.display = "none"; // Ensure this line works correctly
    }, 2500);
  }
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
  // Function to load SVG files into a side div as images
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
      for (let i = 0; i < 5; i++) {
          const index = startIndex + i;
          if (index >= svgFiles.length) break;

          const svgPath = directoryPath + svgFiles[index];

          // Check if the SVG file has already been loaded into this side
          if (loadedSVGs.includes(svgFiles[index])) {
              console.log(`SVG file ${svgFiles[index]} already loaded into side ${sideIndex}. Skipping.`);
              continue;
          }

          // Create an img element to embed the SVG
          const svgImage = document.createElement('img');
          svgImage.src = svgPath;

          // Apply styles to the img element
          svgImage.style.height = '15vh';
          svgImage.style.width = '15vw';
          svgImage.style.position = 'sticky';
          svgImage.style.top = '0';

          // Append the img element to the side div
          sideDiv.appendChild(svgImage);

          // Add the loaded SVG filename to the loadedSVGs array
          loadedSVGs.push(svgFiles[index]);
      }
  }

  // Get all "side" divs
  const sideDivs = document.querySelectorAll('.side');

  // Array to hold the names of SVG files
  const svgFiles = [];
  for (let i = 500; i <= 1200; i++) {
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
