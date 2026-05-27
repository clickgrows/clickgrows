import React from "react";
import style from "./TopPanel.module.scss";

const TopPanel = () => {
  return (
    <div className={style.topPanel}>
      <div className={style.topPanel__container}>
        <div className={style.topPanel__content}>
          <div className={style.topPanel__contacts}>
            <a href="tel:+7065887777" className={style.topPanel__link}>
              <span className={style.icon}>📞</span>
              +91-7065887777
            </a>
            <span className={style.topPanel__divider}>|</span>
            <a href="mailto:clickgrows1@gmail.com" className={style.topPanel__link}>
              <span className={style.icon}>📧</span>
              clickgrows1@gmail.com
            </a>
            <span className={style.topPanel__divider}>|</span>
            <a
              href="https://wa.me/7065887777"
              target="_blank"
              rel="noopener noreferrer"
              className={style.topPanel__link + " " + style.topPanel__link__whatsapp}
            >
              <img src="/whatsapp.svg" className={style.whatsappIcon} alt="" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
