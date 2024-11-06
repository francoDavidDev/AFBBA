import informacion_pdf from '../pdf/campeonato_nacional/informacion_campeonato_nacional.pdf'
import image from '../imgs/tournaments/nationals/flyers/CAMPEONATO_NACIONAL.jpg'


export const CAMPEONATO_NACIONAL =[
    {
        provincia: 'ROSARIO',
        localidad:null,
        fecha: '30 de noviembre y 1 de diciembre',
        descripcion:'CAMPEONATO NACIONAL',
        inscripcion:'Sabado de 17:00hs a 19:00hs - Asamblea FAMF de 19:00hs a 20:00hs',
        inicio_evento: 'Domingo 10hs',
        contacto:[
            {organizador: 'Organizador privado', numero:'+54 9 11-5886-1674'},
            {secretaria:'Secretaria Maria Mernes', numero:'+54 9 11-2872-9216'}
        ],
        redes_sociales:'https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        lugar_de_competencia:'PREDIO FERIAL PARQUE INDEPENDENCIA',
        descripcion_lugar_competencia:'PAB. A-B EX SOC. RURAL. BV OROÑO 2493, ROSARIO, ARGENTINA',
   
        inscripciones:[
            {atleta:'INSCRIPCION',precio:'$40.000',info:'' },
            {atleta:'CARNET AFILIACION FAMF',precio:'15.000',info:'' },
            {atleta:'CATEGORIA ADICIONAL',precio:'15.000',info:'' },
            {informacion:[
                {dato: 'Hospedaje Provincial s/cargo para atletas cupo 60 pax c/ reserva.'},
                {dato: 'Para abrir categorías debe haber tres atletas.'},
                {dato: 'Todos los atletas deben presentar DNI'},
                {dato: 'Durante el pesaje, cada atleta debe presentar un USB que contenga la música de competencia en formato MP3, con el tiempo establecido en el reglamento. El uso de lenguaje profano, vulgar y ofensivo está estrictamente prohibido para la música de posar.'},
                {dato: 'Todos los medios de comunicación deben tener acreditación de prensa para el mismo, otorgada por la comisión organizadora del torneo.'},
                {dato: 'El atleta utiliza la pintura autorizada por IFBB. NO esta autorizadas las pinturas tipo crema ya queno se fijan en la piel y pueden manchar con facilidad.'},
                {dato: 'El acceso al área de calentamiento y vestidores estará controlado por pulseras/precintos y a acargo de un oficial de IFBB.'}                
            ]}
        ],
      
      
        
    image:image,
    pdf:informacion_pdf
    },

]