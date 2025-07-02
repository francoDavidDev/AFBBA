import React from "react";

const HelpWhatsApp = () => (
  <div className="m-auto flex flex-col justify-center items-center gap-y-5">
    <p>
      Si tenés algún problema o necesitás ayuda para completar el formulario, comunicate a este número por WhatsApp:
    </p>
    <div className="flex justify-center items-center flex-col">
      <p className="text-blue-500 hover:underline m-auto">
        <a href="https://wa.me/541164235336" target="_blank" rel="noopener noreferrer">
          +54 11 6423-5336
        </a>
      </p>
      <p className="italic text-gray-600 text-sm">
        Hacer click en el número para abrir WhatsApp
      </p>
    </div>
  </div>
);

export default HelpWhatsApp;