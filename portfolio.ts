import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Mi nombre es ',
  title: "Hola,Soy Jose Gosne",
  description:
    "Soy un programador web junior con experiencia en front-end y back-end. Aprendí a programar en DigitalHouse utilizando JavaScript, Node.js y React. También tengo conocimientos en bases de datos MySQL y uso de Git. Recientemente, trabajé en un proyecto de ecommerce aplicando el patrón MVC, donde aprendí a realizar operaciones CRUD y crear vistas dinámicas con React y EJS. Busco mi primer trabajo como programador y estoy dispuesto a seguir aprendiendo y contribuir al equipo. ¡Si tienes alguna oportunidad o deseas conectarte, envíame un mensaje!",
  resumeLink:
    'https://www.canva.com/design/DAFX7NYK08k/iAZCg9FS5cOytLz_2-q70Q/edit?utm_content=DAFX7NYK08k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
};

export const openSource = {
  githubUserName: 'Gosnejose',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/Gosnejose',
  linkedin: 'https://www.linkedin.com/in/jose-gosne-24b892255/',
  github: 'https://github.com/Gosnejose',
  instagram: 'https://www.instagram.com/josegosne_gudy/',
  facebook: 'https://www.facebook.com/gudy.gosne',
  twitter: 'https://twitter.com/home',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Creación de aplicaciones de una sola página (SPA) y PWA con capacidad de respuesta en React.js'),
        
        emoji('⚡ Creación de sitios web estáticos receptivos usando Next.js'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        

        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    
  ]
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Digital House',
    subHeader: 'programador full stack',
    duration: 'Marzo 5 2020 a noviembre 15 2020',
    desc: '',
    grade: 'Grade A',
    descBullets: [
      'Curso de desarrollo full stack acelerado con muy buenas referencias',
      'Se busco ampliar todos los conocimientos de 0 a 100',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Digital House',
    companyLogo: '/img/icons/common/dhimagen.png',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'backend o a experto',
    company: 'Digital House',
    companyLogo: '/img/icons/common/dhimagen.png',
    date: 'marzo 2020 – diciembre 2020 ',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack Developer',
    company: 'udemy',
    companyLogo: '/img/icons/common/descarga.png',
    date: 'Sept 2021 - Oct 2021',
      desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
},
  {
    role: 'Backend Developer',
    company: 'udemy',
    companyLogo: '/img/icons/common/descarga.png',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in udemy.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Plantilla de portafolio de desarrollador de software creada con react.js y next.js bootstrap que lo ayuda a mostrar su trabajo y habilidades como desarrollador de software',
    github: 'https://github.com/Gosnejose',
    link: 'https://github.com/Gosnejose/PortfolioGosne',
  },
  {
    name: 'mercado Liebre',
    desc: 'Mercado liebre es ecommerce que se desarrolo en el transcurso del curso de digital house, donde puse en practica mis conocimientos aprendido durante el cursado',
    github: 'https://github.com/1Jose100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1Jose100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1Jose100/Django-ecommerce',
  },
];


// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Gosne jose',
  description:
    'Un apasionado desarrollador web Full Stack y desarrollador de Blockchain.',
  author: 'Gosne jose',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://github.com/Gosnejose',
  keywords: [
    'Jose',
    'Gosne jose',
    '@1Jose100',
    '1Jose100',
    'Portfolio',
    'Jose Portfolio ',
    'Gosne jose Portfolio',
  ],
};
