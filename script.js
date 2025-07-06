
// Rolagem suave ao clicar nos links
document.querySelectorAll('area[href^="#"]').forEach(area => {
  area.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
