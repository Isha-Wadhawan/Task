document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const icon = item.querySelector(".faq-icon");

    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== answer) {
        ans.classList.remove("open");
        ans.previousElementSibling.querySelector(".faq-icon").textContent = "+";
        ans.previousElementSibling.querySelector(".faq-icon").classList.remove("rotate");
      }
    });

    if (answer.classList.contains("open")) {
      answer.classList.remove("open");
      icon.textContent = "+";
      icon.classList.remove("rotate");
    } else {
      answer.classList.add("open");
      icon.textContent = "+";
      icon.classList.add("rotate");
    }
  });
});
