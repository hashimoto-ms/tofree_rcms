// ===================================== //
// アンカーリンク制御                      //
// ===================================== //
document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const headerOffset = 120;

  // アンカーリンクのクリックイベントを設定
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - headerOffset;

        // スムーズスクロールを実行
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// ===================================== //
// FAQアコーディオンメニュー               //
// ===================================== //
document.addEventListener("DOMContentLoaded", () => {
  function change(event) {
    const item = event.currentTarget.closest(".qa__item");
    const currentBtn = event.currentTarget;
    const body = item.querySelector(".qa__body");

    if (body.classList.contains("open")) {
      body.style.height = "0px";
    } else {
      body.style.height = body.scrollHeight + "px";
    }
    body.classList.toggle("open");
    currentBtn.classList.toggle("open");
  }

  document.querySelectorAll(".qa__head").forEach((elm) => {
    elm.addEventListener("click", change);
  });
});

//  ---------------------------------------------- //
//  スクロールアニメーション                         //
//  ---------------------------------------------- //
const fadeAnimation = (() => {
  const fadeInElements = document.querySelectorAll(
    ".fadeIn,.fadeIn-up,.fadeIn-down,.fadeIn-left,.fadeIn-right, .slideIn"
  );
  const option = {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-in");
      }
    });
  }, option);

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
})();
