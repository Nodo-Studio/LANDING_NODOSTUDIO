import { useCountdown } from "../hooks/useCountdown"
import type { CountdownProps } from "../types/reloj.types";

import './reloj.scss';


const Reloj = ({targetDate} : CountdownProps) => {
  
  const { dias, horas, minutos, segundos } = useCountdown(targetDate);

  //Formateando las horas minutos y segundos : 
  const horasFormat = horas.toString().padStart(2, '0');
  const minutosFormat = minutos.toString().padStart(2, '0');
  const segundosFormat = segundos.toString().padStart(2, '0');

  return (
    <> 
      <section className="container-reloj">
        <div>
          <p>Dias</p>
          <span>{dias}</span>
        </div>  
        <p>:</p>
        <div>
          <p>Horas</p>
          <span>{horasFormat}</span>
        </div>
        <p>:</p>
        <div>
          <p>minutos </p>
          <span>{minutosFormat}</span>
        </div>
        <p>:</p>
        <div>
          <p>segundos </p>
          <span>{segundosFormat}</span>
        </div>
      </section>
    </>
  )
}

export default Reloj

