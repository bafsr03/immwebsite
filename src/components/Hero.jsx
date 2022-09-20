import styles from "../style";
import { discount, img1 } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Descuento por{" "}
            <span className="text-white">3 Meses</span>  de Servicios
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
            Ideal Mind Media es<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Marketing y Creatividad</span>{" "}
          </h1>

        </div>

        <h1 className="font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          para tu negocio.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Creamos una presencia web integrada que genera ROI para usted. Obtenemos más tráfico a su sitio web al expandir
          su presencia en línea y luego convertir efectivamente ese tráfico en sus nuevos clientes potenciales y ventas.

          Nos aseguramos de que su contenido se distribuya en toda su presencia en la web, lo que incluye propiedades web como
          Facebook, Youtube, LinkedIn,y otras propiedades web donde se puede publicar y encontrar su contenido.
          Más de su contenido en más lugares generará más clientes para usted y mayores ventas para un éxito de marketing en línea sostenido.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={img1} alt="growth" className="w-[100%] h-[75%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;
