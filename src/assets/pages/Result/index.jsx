import React from 'react';
import { useParams } from 'react-router-dom';
import { TOURNAMENTS_DATA } from '../../data/tournaments'; // Ajusta la ruta según tu estructura
import "../../../styles/resutlCards/index.css";

const TournamentDetails = () => {
  const { title } = useParams(); // Usa el título en lugar del id
  const tournament = TOURNAMENTS_DATA.find(t => t.title === decodeURIComponent(title));

  if (!tournament) {
    return <div>Torneo no encontrado</div>;
  }

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-y-10">
      {/* Sección de encabezado */}
      <div className="w-full h-[100vh] text-center flex justify-start pt-36 items-center flex-col">
        <h2 className="xl:text-[140px] lg:text-[100px] md:text-[80px] text-[50px] w-full h-auto">
          {tournament.title.toUpperCase()}
        </h2>
        <p className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] text-primary-400">
          {tournament.subtitle || "Información del Torneo"}
        </p>
      </div>

      {/* Sección de detalles del torneo */}
      <div className="w-full h-auto px-20">
        <div className="container">
          <div className="card__container">
            <article className="card__article">
              <img
                src={tournament.flyer}
                alt={tournament.title}
                className="card__img"
              />
              <div className="card__data">
                <p><strong>Dirección:</strong> {tournament.address}</p>
                <p><strong>Localidad:</strong> {tournament.locality}</p>
                <p><strong>Fecha:</strong> {tournament.date}</p>
                <p><strong>Horario de Inscripción:</strong> {tournament.hour_inscription}</p>
                <p><strong>Inicio de Competencia:</strong> {tournament.start_competition}</p>
                {tournament.more_info && (
                  <div>
                    <h2>Más Información</h2>
                    {tournament.more_info.map((info, index) => (
                      <p key={index}><strong>{info.name}:</strong> {info.contact}</p>
                    ))}
                  </div>
                )}
                {tournament.social_networks && (
                  <div>
                    <h2>Redes Sociales</h2>
                    {tournament.social_networks.map((network, index) => (
                      <div key={index}>
                        {network.facebook && (
                          <a href={network.facebook.href} target="_blank" rel="noopener noreferrer">
                            {network.facebook.name}
                          </a>
                        )}
                        {network.instagram && (
                          <a href={network.instagram.href} target="_blank" rel="noopener noreferrer">
                            {network.instagram.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Sección de calendario */}
      <div
        className="w-full text-center h-[300px] flex flex-col justify-end items-center py-8 mt-8 bg-cover bg-none bg-top"
        style={{ backgroundImage: `url('${bannerCalendar}')` }}
      >
        <div>
          <h2 className="text-primary-300 font-bold">CALENDARIO</h2>
          <p className="text-primary-400">NO TE QUEDES AFUERA</p>
        </div>
        <Link
          to="/calendar"
          className="mt-4 inline-block bg-primary-300 text-primary-500 px-6 py-5 rounded-md font-semibold"
        >
          Ir al calendario
        </Link>
      </div>
    </section>
  );
};

export default TournamentDetails;
