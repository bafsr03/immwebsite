
import styles, { layout } from "../style";
import { img2 } from "../assets";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={img2} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Esta es<br className="sm:block hidden" />nuestra filosofía
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Si desea una agencia en la que, con dos clics, pueda obtener un desglose claro de cuánto se gastó, cuánto se ganó y cuál fue su beneficio neto, somos para usted.
      </p>      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Le ofrecemos consejos sobre el mejor entorno para sus anuncios, redactamos textos impactantes, creamos imágenes impactantes y brindamos tráfico de una variedad de audiencias utilizando su propia información demográfica como guía.
      </p>
    </div>
  </section>
);

export default Billing;
