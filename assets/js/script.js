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

    // Slide doors into view
    door1.style.left = "0";
    door2.style.right = "0";

    // After 5 seconds, slide doors back to initial position
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
