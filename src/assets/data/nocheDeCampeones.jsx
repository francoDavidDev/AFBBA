import informacion_pdf from '../pdf/noche_de_campeones/informacion_nochde_de_campeones.pdf'
import image from '../imgs/internationals/flyers/image1.jpg'

export const NOCHE_CAMPEONES_INFO =[
    {
        provincia: 'Cordoba',
        localidad:'Carlos Paz',
        fecha: '2 y 3 de Noviembre',
        descripcion:'FISICOCULTURISMO Y FITNESS',
        inscripcion:'Sabado de 12:30hs a 15:00hs',
        inicio_evento: 'Domingo 10hs',
        contacto:[
            {organizador: 'Claudio Nieto (Organizador)', numero:'3515 10-4601'},
            {secretaria:'Secretaria', numero:'+541121736846'}
        ],
        redes_sociales:'https://www.instagram.com/famf_argentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        lugar_de_competencia:'HOTEL MONACO',
        descripcion_lugar_competencia:'AV. SAN MARTIN 1887, VILLA CARLOS PAZ, CORDOBA, ARGENTINA',
        hospedaje:[
            {lugar:'HOTEL MONACO', telefono:'03541 42-1242', direccion:'AV. SAN MARTIN 1887'},
            {lugar:'HOTEL COSTANERA', telefono:'431792 / 3541 671871', direccion:'AV. ILLIA 713'},
            {lugar:'HOTEL EL FARO', telefono:'421426 / 3541610510', direccion:'BV. SARMIENTO 1110 '},
            {lugar:'HOTEL RIVIERA', telefono:'432300 / 3541 645901', direccion:'AV. SAN MARTIN Y LINCOLN'},
            {lugar:'HOTEL AMERIAN', telefono:'0810-810-2637', direccion:'ALVEAR 50'},
            {lugar:'HOTEL LOS SAUCES', telefono:'421807 / 421887', direccion:'AV. SAN MARTIN 510'},
            {lugar:'HOTEL ALTOS DEL VALLE', telefono:'486347 / 486410', direccion:'SARMIENTO Y HOLBEIN'},
            {lugar:'HOTEL CATEDRAL', telefono:'425190 / 3541 396889', direccion:'FLORIDA 377'},

        ],
        inscripciones:[
            {atleta:'NACIONAL',precio:'U$D 40',info:'Categoria extra: U$D 10 (EN PESOS ARG A VALOR DEL DOLAR BLUE)' },
            {atleta:'INTERNACIONAL',precio:'U$D 50',info:'Categoria extra: U$D 10' },
            {informacion:[
                {dato: 'Para abrir categorías debe haber tres atletas.'},
                {dato: 'Todos los atletas deben presentar DNI, Pasaporte o Documentación de su país.'},
                {dato: 'Durante el pesaje, cada atleta debe presentar un USB que contenga la música de competencia en formato MP3, con el tiempo establecido en el reglamento. El uso de lenguaje profano, vulgar y ofensivo está estrictamente prohibido para la música de posar.'},
                {dato: 'Todos los medios de comunicación deben tener acreditación de prensa para el mismo, otorgada por la comisión organizadora del torneo.'},
                {dato: 'El acceso al área de calentamiento y vestidores estará controlado por pulseras/precintos.'}                
            ]}
        ],
        categorias_novatos:[
            {categoria:'CHALLENGER - NOVATOS',descripcion:'Atletas que no han competivo a nivel internacional o que no se ubicaron en el top 10 en un evento internacional'},
            {categoria:'FISICOCULTURISMO',descripcion:'Senior (Hasta 80kg , Mas de 80kg) - Master + 40 años (Categoria unica)'  },
            {categoria:'CLASSIC PHYSIQUE',descripcion:'Open (Categoria Unica)'  },
            {categoria:'CULTURISMO CLASICO',descripcion:'Open (Categoria Unica)'  },
            {categoria:'BODY FITNESS',descripcion:'Open (Categoria Unica)'  },
            {categoria:'WELLNESS',descripcion:'Senior (Hasta 158cm , Mas de 158cm)'  },
            {categoria:'BIKINI',descripcion:'Senior (Hasta 164cm , Mas de 164cm)'  },

        ],
        categorias_clasificados:[
            {categoria:'FISICOCULTURISMO',descripcion:'Categoria Unica'  },
            {categoria:'SENIOR',descripcion:'Hasta 65kg - Hasta 70kg - Hasta 75kg - Hasta 80kg - Hasta 85kg - Hasta 90kg - Hasta 100kg - Mas de 100kg'  },
            {categoria:'MASTER 40-49 años',descripcion:'Categoria Unica'  },
            {categoria:'MASTER 50-59 años',descripcion:'Categoria Unica'  },
            {categoria:'MASTER +60 años',descripcion:'Categoria Unica'  },

          
            {categoria:'CLASSIC PHYSIQUE',descripcion:'Open (Hasta 171cm , Mas de 171cm)'  },
            {categoria:'CULTURISMO CLASICO',descripcion:'Senior (Hasta 175cm , Mas de 175cm) - Master +40 años (Categoria Unica)'  },
            {categoria:'GAMES CLASSIC BODUBUILDING',descripcion:'Open (Categoria Unica)'  },
            {categoria:'MUSCULAR MEN´S PHYSIQUE',descripcion:'Open (Categoria Unica)'  },
            {categoria:'MEN´S PHYSIQUE',descripcion:'Junior (Categoria Unica) - Senior (Hasta 170cm , Hasta 176cm , Mas de 176cm) - Master +40 años (Categoria Unica)'  },

            {categoria:'WOMEN´S PHYSIQUE',descripcion:'Open (Categoria Unica)'  },
            {categoria:'BODY FITNESS',descripcion:'Junior (Categoria Unica) - Senior (Hasta 163cm , Mas de 163cm) - Master +35 años (Categoria Unica) - Master +45 años (Categoria Unica)'  },
            {categoria:'FITNESS COREOGRAFICO FEMENINO',descripcion:'Open (Categoria Unica)'  },
            {categoria:'WELNESS',descripcion:'Junior (Categoria Unica) - Senior (Hasta 168cm , Hasta de 163cm , Mas de 163cm) - Master +35 años (Categoria Unica)'  },
            {categoria:'BIKINI',descripcion:'Junior (Categoria Unica) - Senior (Hasta 160cm , Hasta de 164cm , Mas de 164cm) - Master +35 años (Categoria Unica) - Master +40 años (Categoria Unica) - Master +50 años (Categoria Unica)'  },
            {categoria:'FIT MODEL FEMENINO',descripcion:'Open (Categoria Unica)'  },
            {categoria:'PAREJAS FITNESS',descripcion:'Open (Categoria Unica)'  },

        ],
        absolutas:[
            'FISICOCULTURISMO SENIOR', 'FISICOCULTURISMO MASTER','CLASSIC PHYSIQUE', 'CULTURISMO CLASICO', 'MENS´S PHYSIQUE','BODY FITNESS SENIOR','BODY FITNESS MASTER','WELNESS','BIKINI SENIOR','BIKINI MASTER'
            
        ],
        
    image:image,
    pdf:informacion_pdf
    },

]