const Header = () => {
  const [state, setState] = React.useState(false);
  const classToggle = () => {
    setState((prev) => !prev);
  };

  return (
    <div style={{ display: "contents" }}>
      <div className="header__inner">
        <a href="/food/" className="header__logo-wrap">
          <img
            src="/files/user/food/img/common/tofree_logo.svg"
            width="156"
            className="header__logo"
            alt="TOFREE"
          />
        </a>
        <div className="header__right-area">
          <a
            href="https://form.glory.co.jp/webapp/form/20383_zdeb_168/index.do"
            className="header__btn contact-btn"
          >
            お問い合わせ
          </a>
          <button
            className={`header__hamburger-btn ${state ? "open" : ""}`}
            onClick={classToggle}
          >
            <span></span>
            <span></span>
            <span></span>
            <span className="poppins f-light">MENU</span>
          </button>
        </div>
        <div className={`header__menu ${state ? "open" : ""}`}>
          <nav className="header__menu-inner">
            <div className="header__menu-logo-area flex-column">
              <a href="/food/">
                <img
                  src="/files/user/food/img/common/tofree_logo.svg"
                  width="156"
                  alt="TOFREE"
                />
              </a>
              <a href="/">
                <img
                  src="/files/user/food/img/common/glory_logo.svg"
                  width="111"
                  alt="GLORY"
                />
              </a>
            </div>
            <ul className="header__menu-link-list">
              <li className="header__menu-link-item relative">
                <a href="/food/">TOP</a>
              </li>
              <li className="header__menu-link-item">
                <a href="/food/kiosk/">FGK-100 シリーズ</a>
              </li>
              <li className="header__menu-link-item">
                <a href="/food/odertogo/">O:der ToGo</a>
              </li>
              <li className="header__menu-link-item">
                <a href="/food/odertable/">O:der Table</a>
              </li>
              <li className="header__menu-link-item">
                <a href="/food/drivethrough/">ドライブスルー</a>
              </li>
              <li className="header__menu-link-item">
                <a href="/food/tls/">テーブルロケーター</a>
              </li>
              <li className="header__menu-link-item">
                <a href="/food/bopis/">BOPISロッカー</a>
              </li>
            </ul>
            <ul className="header__menu-link-list">
              <li className="header__menu-link-item relative">
                <a href="/food/case/">導入事例一覧</a>
              </li>
              <li className="header__menu-link-item">
                <a href="/food/column/">お役立ち情報一覧</a>
              </li>
            </ul>
            <div className="header__menu-btn-wrap">
              <a
                href="https://form.glory.co.jp/webapp/form/20383_zdeb_168/index.do"
                className="header__menu-btn contact-btn circle"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.querySelector(".header")).render(<Header />);

const Footer = () => {
  const [bottomOffset, setBottomOffset] = React.useState(0);
  const [buttonStyle, setButtonStyle] = React.useState({
    position: "fixed",
    bottom: `${10 + bottomOffset}px`,
    right: "50px",
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      // フッターの高さを取得
      const footer = document.querySelector(".footer");
      const footerHeight = footer ? footer.offsetHeight : 0;
      // フッターまでの距離を計算
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      // ボタン位置調整
      setBottomOffset(
        distanceFromBottom < footerHeight
          ? footerHeight - distanceFromBottom
          : 0
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const updateButtonStyle = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setButtonStyle({
          position: "fixed",
          bottom: `${10 + bottomOffset}px`,
          right: "10px",
        });
      } else {
        setButtonStyle({
          position: "fixed",
          bottom: `${20 + bottomOffset}px`,
          right: "20px",
        });
      }
    };

    updateButtonStyle();
    window.addEventListener("resize", updateButtonStyle);
    return () => window.removeEventListener("resize", updateButtonStyle);
  }, [bottomOffset]);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ display: "contents" }}>
      <div className="footer__top-area">
        <div className="footer__inner">
          <div className="footer__logo-area flex-column">
            <a href="/food/">
              <img
                src="/files/user/food/img/common/tofree_logo.svg"
                width="156"
                alt="TOFREE"
              />
            </a>
            <a href="/">
              <img
                src="/files/user/food/img/common/glory_logo.svg"
                width="111"
                alt="GLORY"
              />
            </a>
          </div>
          <div className="footer__right-nav">
            <ul className="footer__link-list">
              <li className="footer__link-item is-deco">
                <a href="/food/">TOP</a>
              </li>
              <li className="footer__link-item">
                <a href="/food/kiosk/">FGK-100 シリーズ</a>
              </li>
              <li className="footer__link-item">
                <a href="/food/odertogo/">O:der ToGo</a>
              </li>
              <li className="footer__link-item">
                <a href="/food/odertable/">O:der Table</a>
              </li>
              <li className="footer__link-item">
                <a href="/food/drivethrough/">ドライブスルー</a>
              </li>
              <li className="footer__link-item">
                <a href="/food/tls/">テーブルロケーター</a>
              </li>
              <li className="footer__link-item">
                <a href="/food/bopis/">BOPISロッカー</a>
              </li>
            </ul>
            <ul className="footer__link-list">
              <li className="footer__link-item">
                <a href="/food/case/">導入事例一覧</a>
              </li>
              <li className="footer__link-item">
                <a href="/food/column/">お役立ち情報一覧</a>
              </li>
            </ul>
            <div className="footer__btn-wrap">
              <a
                href="https://form.glory.co.jp/webapp/form/20383_zdeb_168/index.do"
                className="footer__btn contact-btn circle"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__annotation txt-r">
        ※GLORY／TOFREE は、グローリー株式会社の登録商標です。
        <br />
        ※テーブルオーダー／QRオーダー®／O:der Table®／O:der
        ToGo®／BOPIS®は、株式会社Showcase Gigの登録商標です。
      </p>
      <div className="footer__copy-wrap">
        <p className="footer__copy txt-c f-white">
          <small>© 2000-2024 GLORY LTD.</small>
        </p>
      </div>
      <button
        className="footer__topback txt-c poppins f-light f-white"
        onClick={returnTop}
        style={buttonStyle}
      >
        PAGE
        <br />
        TOP
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.querySelector(".footer")).render(<Footer />);
