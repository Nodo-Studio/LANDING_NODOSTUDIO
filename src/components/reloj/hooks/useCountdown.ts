import { useEffect, useState } from "react";
import type { TimeLeft } from "../types/reloj.types";

export const useCountdown = (targetDate: string): TimeLeft => {
  const [ timeLeft, setTimeLeft ] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    console.log('Fecha objetivo recibida : ', targetDate);
    const target = new Date(targetDate).getTime();
    console.log('Fecha Parseada (en ms)', target);

    const interval = setInterval(()=>{
      const now = new Date().getTime();
      const difference = target - now;

      console.log('Diferencia de tiempo: ', difference);

      if (difference > 0 ) {
        const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
        const horas = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((difference / 1000 / 60) % 60);
        const segundos  = Math.floor((difference / 1000) % 60);
        setTimeLeft({dias, horas, minutos, segundos})
      } else {
        //Cuando la cuenta llega a cero : 
        setTimeLeft({dias: 0, horas: 0, minutos: 0, segundos: 0})
        clearInterval(interval)
      }
    }, 1000);
      
    //Limpieza : se ejecuta cuando el componente se desmonta 
    return () => clearInterval(interval);
    
    },[ targetDate ]);

  return timeLeft;

}
