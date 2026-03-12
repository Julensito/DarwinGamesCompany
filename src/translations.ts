export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      games: 'Nuestros Juegos',
      patches: 'Notas de Parche',
      about: 'Sobre Nosotros',
      careers: 'Trabaja con Nosotros',
      support: 'Soporte (Discord)',
    },
    hero: {
      title1: 'DARWIN',
      title2: '& CO.',
      slogan: 'Stories You Can Play',
      scroll: 'Scroll',
    },
    marquee: {
      partners: ['SONY', 'MICROSOFT', 'NINTENDO', 'STEAM', 'EPIC GAMES', 'UNITY', 'UNREAL ENGINE'],
    },
    games: {
      title: 'Nuestros Proyectos',
      playNow: 'Saber Más',
      back: 'Volver',
      details: {
        updates: 'Actualizaciones Recientes',
        gallery: 'Galería',
        trailer: 'Trailer Oficial',
        specs: 'Especificaciones',
        genre: 'Género',
        platforms: 'Plataformas',
      },
      items: [
        { 
          id: 'alpha',
          title: 'Project Alpha', 
          desc: 'Acción y evolución biológica.',
          longDesc: 'Project Alpha es nuestra obra maestra de evolución biológica. En un mundo donde la adaptación es la única ley, deberás evolucionar tu ADN para sobrevivir a depredadores implacables y entornos hostiles.',
          genre: 'RPG de Acción / Evolución',
          platforms: 'PC, PS5, Xbox Series X',
          specs: 'RTX 3060+, 16GB RAM, 50GB SSD',
          video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-4340-large.mp4',
          updates: [
            { date: '15 OCT 2023', title: 'Update 2.1 - La Era del Viento', desc: 'Introducción de mecánicas de vuelo y el nuevo personaje Zephyr.' },
            { date: '01 SEP 2023', title: 'Hotfix 2.0.5', desc: 'Mejoras en el rendimiento de renderizado de partículas.' }
          ],
          gallery: [
            'https://picsum.photos/seed/alpha1/1200/800',
            'https://picsum.photos/seed/alpha2/1200/800',
            'https://picsum.photos/seed/alpha3/1200/800'
          ]
        },
        { 
          id: 'cyber',
          title: 'Cyber-Darwin', 
          desc: 'Sobrevive en la metrópolis neón.',
          longDesc: 'Sumérgete en una distopía cyberpunk donde la tecnología ha superado a la humanidad. Cyber-Darwin combina sigilo, hackeo y combate visceral en una ciudad que nunca duerme.',
          genre: 'Aventura / Sigilo / Cyberpunk',
          platforms: 'PC, PS5, Xbox Series X, Nintendo Switch',
          specs: 'RTX 2060+, 8GB RAM, 40GB SSD',
          video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-4340-large.mp4',
          updates: [
            { date: '02 OCT 2023', title: 'Hotfix 1.0.4', desc: 'Corrección de errores críticos en el Distrito 7 y balance de armas.' },
            { date: '15 AGO 2023', title: 'Lanzamiento Global', desc: 'El juego ya está disponible en todas las plataformas.' }
          ],
          gallery: [
            'https://picsum.photos/seed/cyber1/1200/800',
            'https://picsum.photos/seed/cyber2/1200/800',
            'https://picsum.photos/seed/cyber3/1200/800'
          ]
        },
        { 
          id: 'void',
          title: 'Void Nexus', 
          desc: 'Estrategia táctica espacial.',
          longDesc: 'Comanda tu flota a través del vacío inexplorado. Void Nexus es un simulador de estrategia profunda donde cada decisión política y militar resuena en toda la galaxia.',
          genre: 'Estrategia / Simulación Espacial',
          platforms: 'PC (Windows / Linux / Mac)',
          specs: 'GTX 1060+, 8GB RAM, 20GB HDD',
          video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-4340-large.mp4',
          updates: [
            { date: '20 SEP 2023', title: 'Expansión: Deep Space', desc: 'Nuevos sistemas estelares y mecánicas de comercio intergaláctico.' },
            { date: '10 JUL 2023', title: 'Update 1.2', desc: 'Rediseño completo de la interfaz de gestión de naves.' }
          ],
          gallery: [
            'https://picsum.photos/seed/void1/1200/800',
            'https://picsum.photos/seed/void2/1200/800',
            'https://picsum.photos/seed/void3/1200/800'
          ]
        },
      ]
    },
    patches: {
      title: 'Notas de Parche',
      readMore: 'Leer Más',
      items: [
        { 
          date: '15 OCT 2023', 
          game: 'Alpha', 
          title: 'Update 2.1 - La Era del Viento', 
          points: ['+ Nuevo personaje: Zephyr', '- Corrección de errores', '+ Optimización'],
          content: 'Esta actualización introduce a Zephyr, el maestro del viento. Hemos rediseñado por completo el sistema de colisiones aéreas y optimizado el uso de memoria en un 15%. Además, se han corregido más de 50 errores reportados por la comunidad relacionados con el spawn de enemigos en zonas de montaña.'
        },
        { 
          date: '02 OCT 2023', 
          game: 'Cyber', 
          title: 'Hotfix 1.0.4', 
          points: ['- Fix: Crash distrito 7', '+ IA mejorada'],
          content: 'Hotfix urgente para solucionar los cierres inesperados que experimentaban algunos jugadores al entrar en el Distrito 7 durante la noche. También hemos ajustado la IA de los drones de seguridad para que sean menos agresivos en niveles de dificultad baja.'
        },
        { 
          date: '20 SEP 2023', 
          game: 'Void', 
          title: 'Expansión: Deep Space', 
          points: ['+ 3 Nuevas naves', '+ Comercio intergaláctico'],
          content: 'Deep Space expande el universo de Void Nexus con tres nuevos sistemas estelares listos para ser explorados. Se han añadido tres naves de clase carguero y un sistema de economía dinámica que fluctúa según la oferta y la demanda de recursos raros entre estaciones.'
        },
      ]
    },
    about: {
      title1: 'Evolución',
      title2: 'Constante',
      desc: 'Darwin & Co. nació en 2018 como un colectivo de visionarios. Hoy, somos un estudio líder dedicado a crear experiencias que desafían los límites de la narrativa y la tecnología.',
      readMore: 'Nuestra Historia',
      back: 'Volver',
      stats: {
        talent: 'Talento',
        awards: 'Premios',
      },
      details: {
        history: {
          title: 'Nuestra Historia',
          content: 'Fundada en 2018 en el corazón de la innovación tecnológica, Darwin & Co. comenzó como un pequeño grupo de tres desarrolladores apasionados por la narrativa interactiva. Lo que empezó en un garaje se transformó rápidamente en un referente de la industria, impulsado por la creencia de que los videojuegos son la forma definitiva de expresión artística y evolución tecnológica.'
        },
        culture: {
          title: 'Cultura',
          content: 'En Darwin, la cultura no es algo que se escribe, es algo que se vive. Fomentamos la curiosidad radical, la honestidad brutal y la colaboración sin fronteras. Creemos en el equilibrio entre la vida y el trabajo, entendiendo que las mejores ideas nacen de mentes descansadas y apasionadas.'
        },
        method: {
          title: 'Método de Trabajo',
          content: 'Adoptamos un enfoque de desarrollo iterativo y orgánico. No seguimos tendencias; las creamos. Nuestro proceso combina la precisión de la ingeniería de vanguardia con la libertad creativa absoluta, permitiendo que cada proyecto evolucione de forma natural desde el concepto hasta la maestría técnica.'
        },
        goals: {
          title: 'Objetivos',
          content: 'Nuestra meta es simple pero ambiciosa: redefinir lo que significa "jugar". Buscamos crear mundos que no solo entretengan, sino que transformen al jugador, dejando una huella duradera a través de la innovación constante y la excelencia narrativa.'
        }
      }
    },
    careers: {
      title1: 'Únete a la',
      title2: 'Evolución',
      desc: 'Buscamos mentes brillantes para construir el futuro del entretenimiento. Envía tu portafolio y sé parte de nuestra historia.',
      form: {
        name: 'Nombre Completo',
        email: 'Email',
        role: 'Rol / Especialidad',
        portfolio: 'Portafolio URL',
        submit: 'Enviar Postulación',
        success: 'Postulación Enviada Correctamente',
      },
      jobs: ['Unity Developer', 'Concept Artist', 'Game Designer', 'QA Engineer'],
    },
    support: {
      title: 'Comunidad',
      desc: 'Únete a nuestro Discord para soporte técnico, reportar errores, y conectar con la comunidad.',
      cta: 'Únete Ahora',
    },
    footer: {
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: '© 2026 Darwin & Co.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      games: 'Our Games',
      patches: 'Patch Notes',
      about: 'About Us',
      careers: 'Careers',
      support: 'Support (Discord)',
    },
    hero: {
      title1: 'DARWIN',
      title2: '& CO.',
      slogan: 'Stories You Can Play',
      scroll: 'Scroll',
    },
    marquee: {
      partners: ['SONY', 'MICROSOFT', 'NINTENDO', 'STEAM', 'EPIC GAMES', 'UNITY', 'UNREAL ENGINE'],
    },
    games: {
      title: 'Our Projects',
      playNow: 'Learn More',
      back: 'Back',
      details: {
        updates: 'Recent Updates',
        gallery: 'Gallery',
        trailer: 'Official Trailer',
        specs: 'Specifications',
        genre: 'Genre',
        platforms: 'Platforms',
      },
      items: [
        { 
          id: 'alpha',
          title: 'Project Alpha', 
          desc: 'Action and biological evolution.',
          longDesc: 'Project Alpha is our biological evolution masterpiece. In a world where adaptation is the only law, you must evolve your DNA to survive relentless predators and hostile environments.',
          genre: 'Action RPG / Evolution',
          platforms: 'PC, PS5, Xbox Series X',
          specs: 'RTX 3060+, 16GB RAM, 50GB SSD',
          video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-4340-large.mp4',
          updates: [
            { date: '15 OCT 2023', title: 'Update 2.1 - The Era of Wind', points: ['+ New character: Zephyr', '- Bug fixes', '+ Optimization'] },
            { date: '01 SEP 2023', title: 'Hotfix 2.0.5', points: ['+ Particle rendering performance improvements'] }
          ],
          gallery: [
            'https://picsum.photos/seed/alpha1/1200/800',
            'https://picsum.photos/seed/alpha2/1200/800',
            'https://picsum.photos/seed/alpha3/1200/800'
          ]
        },
        { 
          id: 'cyber',
          title: 'Cyber-Darwin', 
          desc: 'Survive in the neon metropolis.',
          longDesc: 'Dive into a cyberpunk dystopia where technology has surpassed humanity. Cyber-Darwin combines stealth, hacking, and visceral combat in a city that never sleeps.',
          genre: 'Adventure / Stealth / Cyberpunk',
          platforms: 'PC, PS5, Xbox Series X, Nintendo Switch',
          specs: 'RTX 2060+, 8GB RAM, 40GB SSD',
          video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-4340-large.mp4',
          updates: [
            { date: '02 OCT 2023', title: 'Hotfix 1.0.4', points: ['- Fix: District 7 crash', '+ Improved AI'] },
            { date: '15 AUG 2023', title: 'Global Launch', points: ['+ Game now available on all platforms'] }
          ],
          gallery: [
            'https://picsum.photos/seed/cyber1/1200/800',
            'https://picsum.photos/seed/cyber2/1200/800',
            'https://picsum.photos/seed/cyber3/1200/800'
          ]
        },
        { 
          id: 'void',
          title: 'Void Nexus', 
          desc: 'Tactical space strategy.',
          longDesc: 'Command your fleet through the uncharted void. Void Nexus is a deep strategy simulator where every political and military decision echoes across the galaxy.',
          genre: 'Strategy / Space Simulation',
          platforms: 'PC (Windows / Linux / Mac)',
          specs: 'GTX 1060+, 8GB RAM, 20GB HDD',
          video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-4340-large.mp4',
          updates: [
            { date: '20 SEP 2023', title: 'Expansion: Deep Space', points: ['+ 3 New ships', '+ Intergalactic trade'] },
            { date: '10 JUL 2023', title: 'Update 1.2', points: ['+ Complete UI redesign'] }
          ],
          gallery: [
            'https://picsum.photos/seed/void1/1200/800',
            'https://picsum.photos/seed/void2/1200/800',
            'https://picsum.photos/seed/void3/1200/800'
          ]
        },
      ]
    },
    patches: {
      title: 'Patch Notes',
      readMore: 'Read More',
      items: [
        { 
          date: '15 OCT 2023', 
          game: 'Alpha', 
          title: 'Update 2.1 - The Era of Wind', 
          points: ['+ New character: Zephyr', '- Bug fixes', '+ Optimization'],
          content: 'This update introduces Zephyr, the master of wind. We have completely redesigned the aerial collision system and optimized memory usage by 15%. Additionally, over 50 community-reported bugs related to enemy spawning in mountain zones have been fixed.'
        },
        { 
          date: '02 OCT 2023', 
          game: 'Cyber', 
          title: 'Hotfix 1.0.4', 
          points: ['- Fix: District 7 crash', '+ Improved AI'],
          content: 'Urgent hotfix to address unexpected crashes some players were experiencing when entering District 7 during the night. We have also adjusted the security drone AI to be less aggressive on lower difficulty levels.'
        },
        { 
          date: '20 SEP 2023', 
          game: 'Void', 
          title: 'Expansion: Deep Space', 
          points: ['+ 3 New ships', '+ Intergalactic trade'],
          content: 'Deep Space expands the Void Nexus universe with three new star systems ready to be explored. Three freighter-class ships and a dynamic economy system that fluctuates based on rare resource supply and demand between stations have been added.'
        },
      ]
    },
    about: {
      title1: 'Constant',
      title2: 'Evolution',
      desc: 'Darwin & Co. was born in 2018 as a collective of visionaries. Today, we are a leading studio dedicated to creating experiences that challenge the limits of narrative and technology.',
      readMore: 'Our Story',
      back: 'Back',
      stats: {
        talent: 'Talent',
        awards: 'Awards',
      },
      details: {
        history: {
          title: 'Our Story',
          content: 'Founded in 2018 in the heart of technological innovation, Darwin & Co. began as a small group of three developers passionate about interactive storytelling. What started in a garage quickly transformed into an industry benchmark, driven by the belief that video games are the ultimate form of artistic expression and technological evolution.'
        },
        culture: {
          title: 'Culture',
          content: 'At Darwin, culture is not something written, it is something lived. We encourage radical curiosity, brutal honesty, and borderless collaboration. We believe in work-life balance, understanding that the best ideas are born from rested and passionate minds.'
        },
        method: {
          title: 'Work Method',
          content: 'We adopt an iterative and organic development approach. We do not follow trends; we create them. Our process combines the precision of cutting-edge engineering with absolute creative freedom, allowing each project to evolve naturally from concept to technical mastery.'
        },
        goals: {
          title: 'Goals',
          content: 'Our goal is simple but ambitious: to redefine what "play" means. We seek to create worlds that not only entertain but transform the player, leaving a lasting mark through constant innovation and narrative excellence.'
        }
      }
    },
    careers: {
      title1: 'Join the',
      title2: 'Evolution',
      desc: 'We are looking for brilliant minds to build the future of entertainment. Send your portfolio and be part of our story.',
      form: {
        name: 'Full Name',
        email: 'Email',
        role: 'Role / Specialty',
        portfolio: 'Portfolio URL',
        submit: 'Send Application',
        success: 'Application Sent Successfully',
      },
      jobs: ['Unity Developer', 'Concept Artist', 'Game Designer', 'QA Engineer'],
    },
    support: {
      title: 'Community',
      desc: 'Join our Discord for technical support, bug reporting, and connecting with the community.',
      cta: 'Join Now',
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
      rights: '© 2026 Darwin & Co.',
    }
  }
};

export type Language = 'es' | 'en';
