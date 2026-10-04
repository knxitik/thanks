const pages = [
  document.getElementById("page1"),
  document.getElementById("page2"),
  document.getElementById("page3"),
  document.getElementById("page4")
];

const dots = [...document.querySelectorAll(".dot")];
let current = 0;
let locked = false;

function showPage(next) {
  if (locked || next === current || next < 0 || next >= pages.length) return;

  locked = true;

  pages[current].classList.remove("active");
  pages[current].classList.add("exit");

  setTimeout(() => {
    pages[current].classList.remove("exit");
    pages[next].classList.add("active");

    dots.forEach((dot, i) => {
      dot.classList.toggle("active-dot", i === next);
    });

    current = next;
    locked = false;
  }, 450);
}

document.getElementById("openEnvelope").addEventListener("click", () => {
  const envelope = document.querySelector(".envelope");

  envelope.classList.add("opening");

  setTimeout(() => {
    showPage(1);
  }, 1000);
});

document.getElementById("openLetter").addEventListener("click", () => {
  showPage(2);
});

document.getElementById("finishLetter").addEventListener("click", () => {
  showPage(3);
});

document.getElementById("replay").addEventListener("click", () => {
  location.reload();
});

/* Optional keyboard navigation */
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    showPage(current + 1);
  }

  if (event.key === "ArrowLeft") {
    showPage(current - 1);
  }
});
