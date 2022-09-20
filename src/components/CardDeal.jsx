
import styles, { layout } from "../style";
import Button from "./Button";
import { img3 } from "../assets";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       
Lo que ofrecemos <br className="sm:block hidden" /> a nuestros Clientes
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      //Empresas que buscan llevar su negocio fuera de línea en línea

      </p>      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

      //Empresas que buscan comprender su mayor potencial de ingresos con embudos y optimización de la tasa de conversión.

      </p>      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

      //Empresas que buscan maximizar sus tasas de conversión y el valor promedio de los pedidos.

      </p>      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

      //Empresas que buscan una agencia confiable que pueda hacer de su empresa una prioridad.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={img3} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
