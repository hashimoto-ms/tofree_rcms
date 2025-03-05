// ====================================//
// ヘッダー制御
// ====================================//
const header = document.querySelector(".header");
const trigger = document.querySelector(".header-show-trigger");

window.addEventListener("scroll", () => {
  const triggerPosition = trigger.getBoundingClientRect();

  if (triggerPosition.top <= 0) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

// ====================================//
// アバウトエリアSPクリック制御
// ====================================//
window.addEventListener("DOMContentLoaded", () => {
  let mapNums = document.querySelectorAll(".top-about__num");
  let btns = document.querySelectorAll(".top-about__link");

  mapNums.forEach((mapNum) => {
    mapNum.addEventListener("click", (event) => {
      let dataNum = event.currentTarget.getAttribute("data-num");
      let currentEle = document.querySelector(`.topAboutNum${dataNum}`);

      btns.forEach((btn) => {
        btn.classList.remove("is-active");
      });
      currentEle.classList.add("is-active");
    });
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((btnItem) => btnItem.classList.remove("is-active"));
    });
  });
});

// ====================================//
// スライダー制御
// ====================================//
new Splide(".topSlider", {
  type: "loop",
  perMove: 1,
  fixedWidth: "20rem",
  gap: 30,
  focus: "center",
  autoplay: true,
  rewind: true,
  interval: 6000,
  speed: 1000,
  pauseOnHover: false,
  arrows: false,
  dot: true,
  breakpoints: {
    599: {
      fixedWidth: false,
      perPage: 1.5,
    },
  },
}).mount();

new Splide(".top-case__slider", {
  type: "loop",
  perMove: 1,
  fixedWidth: "370px",
  gap: 15,
  focus: "center",
  autoplay: true,
  rewind: true,
  interval: 6000,
  speed: 1000,
  pauseOnHover: false,
  updateOnMove: true,
  arrows: false,
  dot: true,
  breakpoints: {
    599: {
      fixedWidth: "80%",
      perPage: 1.5,
    },
  },
}).mount();

/* ------------------------------------
アバウトマップアニメーション
------------------------------------ */
(function () {
  function initAnimations() {
    const slideElements = document.querySelectorAll(
      ".top-about__img-slideItem"
    );
    const linkWrap = document.querySelector(".top-about__link-wrap");
    const numWrap = document.querySelector(".top-about__num-wrap");

    let elementsCompleted = 0;
    const totalElements = slideElements.length;

    // アニメーション実行
    slideElements.forEach((el) => {
      if (!el.classList.contains("started")) {
        el.style.animationPlayState = "running";
        el.classList.add("started");

        el.addEventListener(
          "animationend",
          function () {
            elementsCompleted++;
            // アニメーション終了時にリンクにクラスを付与
            if (elementsCompleted === totalElements) {
              linkWrap.classList.add("active");
              numWrap.classList.add("active");
            }
          },
          { once: true }
        );
      }
    });
  }

  const targetElement = document.querySelector(".top-about__img");

  // クラス取得監視する
  if (targetElement.classList.contains("scroll-in")) {
    initAnimations();
  } else {
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          targetElement.classList.contains("scroll-in")
        ) {
          mutationObserver.disconnect(); // 監視終了
          initAnimations();
        }
      });
    });
    mutationObserver.observe(targetElement, { attributes: true });
  }
})();
