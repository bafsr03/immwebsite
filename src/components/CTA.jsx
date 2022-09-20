import styles from "../style";
import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';

const CTA = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ns8ncle', 'template_v3w2tum', form.current, 'tYrv4AINebq011QW0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }


  return (
    <section name='cta' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div  className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Hable con Nuestro Equipo hoy!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Todo lo que necesitas para que tu empresa tenga una presencia en línea y puedas maximizar sus presupuestos de marketing digital.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex-1 flex flex-col">
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Tu nombre</p>
            <input type="text" className="form-control rounded-[5px] bg-slate-100 border-1 p-1" placeholder=" " name="nombre" />
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Su correo electrónico</p>
            <input type="email" className="form-control rounded-[5px] bg-slate-100 border-1 p-1" placeholder=" " name="correo" />
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Su teléfono</p>
            <input type="text" className="form-control rounded-[5px] bg-slate-100 border-1 p-1" placeholder=" " name="telefono" />
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Su Empresa</p>
            <input type="text" className="form-control rounded-[5px] bg-slate-100 border-1 p-1 w-60" placeholder=" " name="empresa" />
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Presupuesto mensual</p>
            <input type="text" className="form-control rounded-[5px] bg-slate-100 w-60 border-1 p-1" placeholder=" " name="presupuesto" />
            <input type="submit" className={` mt-5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} value="Enviar Mensaje" ></input>
          </div>
        </form>
      </div>
      <div>
      </div>
    </section>
  );
}

export default CTA;
