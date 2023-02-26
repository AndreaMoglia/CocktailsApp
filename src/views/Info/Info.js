import React from "react";
import style from "./Info.module.css"

const Info = () => {
  return (
    <section className={style.aboutSection}>
      <h1 className={style.sectionTitle}>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
    </section>
  );
};

export default Info;
