import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {

    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_8yil0qf",    // pon tu Service ID aquí
                "template_wb52614",   // pon tu Template ID aquí
                form.current,
                "31cIsDnyktjYc1-Zq"     // pon tu Public Key aquí
            )
            .then(
                (result) => {
                    alert("Correo enviado con éxito.");
                    form.current?.reset();
                    console.log(result)
                },
                (error) => {
                    alert("Error al enviar el correo.");


                    console.error(error.text);
                }


            );


    };

    return (
        <div className="contacto w-full">
            <h1 className="text-4xl text-white font-bold mb-4">CONTACTA CON NOSOTROS</h1>
            <div className="flex flex-wrap justify-center">
                <div className="formulario-contacto">
                    <form action="" ref={form} onSubmit={sendEmail} >
                        <label htmlFor="from_email">Correo electrónico</label>
                        <input type="text" placeholder="ejemplo@ejemplo.com" name="from_email" />
                        <label htmlFor="phone">Número de telefono</label>
                        <input type="text" placeholder="666 11 22 33" name="phone" />
                        <label htmlFor="message">¿Qué necesitas?</label>
                        <textarea style={{ height: "230px", resize: "none" }} placeholder="¿Qué necesitas?" name="message"></textarea>
                        <div className="boton">
                            <button type='submit'>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="redes-sociales-contacto"></div>
            </div>
        </div>
    )
}