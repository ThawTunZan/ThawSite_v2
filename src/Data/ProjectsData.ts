// Shared project data for Projects and ProjectDetails pages
import { FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
  demoIcon?: any;
  date?: string;
  featured?: boolean;
  achievements?: string[];
};

const projectsData = [
  {
    id: 1,
    title: 'WhosNext Travel App (In-progress)',
    subtitle: 'A Travel React app',
    description: 'An app used to help friends and travellers budget their expenses while travelling together in a fun way',
    image: 'images/WhosNext.png',
    technologies: ['React Native', 'Firebase', 'Typescript', 'Clerk', 'Expo', 'AdMob'],
    category: 'software',
    github: 'https://github.com/ThawTunZan/WhosNext',
    date: 'April 2025',
    featured: true,
    achievements: [
      'Multiple types of expenses calculation',
      'Calls API to https://www.exchangerate-api.com/ with caching for API optimisation',
      'Efficient cloud database design',
      'Cloud optimisation so that there are less reads and writes'
    ],
  },
  {
    id: 2,
    title: 'CP2106 (Orbital)',
    subtitle: 'NUqueSt Unity Game',
    description: 'Educational game inspired by Stardew Valley and Animal Crossing, designed to introduce NUS freshmen to university modules. Features AI pathfinding with obstacle avoidance, OOP architecture, comprehensive testing, and project management practices including agile methodologies.',
    image: 'images/nuquest.png',
    technologies: ['Unity', 'C#', 'AI', 'OOP', 'Testing', 'Game Development'],
    category: 'software',
    github: 'https://github.com/ThawTunZan/Thaw-and-Ryan-NUqueSt',
    demo: 'https://www.youtube.com/watch?v=FCb_FZp87ic',
    demoIcon: FaYoutube,
    date: 'April 2023',
    featured: true,
    achievements: [
      'Developed AI pathfinding and obstacle avoidance',
      'Applied OOP and agile project management',
      'Comprehensive testing and code reviews',
      'Led a team of two for full game development'
    ]
  },
  {
    id: 3,
    title: 'CS2113T Software Engineering',
    subtitle: 'Future Academic Planner (FAP)',
    description: 'A semester-long project that was done in a group of 4 in an agile environment. Developed a CLI software used to log the grades of a university student and predict what grades to get based on your current GPA. Software engineering principle and practices were followed strictly while developing this software.',
    image: 'images/CS2113.png',
    technologies: ['Java', 'Shell', 'Gson'],
    category: 'software',
    github: 'https://github.com/ThawTunZan/Future-Academic-Planner',
    date: 'April 2023',
    featured: true,
    achievements: [
      '2 weeks sprints',
      'Connected to NUS Mods API',
      'Class Design Architecture and Sequence Diagram',
      'Documentations (User Guide and Developer Guide)',
      'Documented and implemented unit, integration and system testings'
    ],
    additional_links: ['https://nusmods.com/courses/CS2113/software-engineering-object-oriented-programming',],
  },
  {
    id: 4,
    title: 'Connect 4',
    subtitle: 'Web-based Game',
    description: 'Solo side project for initial exposure to web development. Features physics-based animations for piece dropping, responsive design, and smooth gameplay mechanics using vanilla JavaScript, HTML, and CSS.',
    image: 'images/connect4.png',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Web Development'],
    category: 'web',
    github: 'https://github.com/ThawTunZan/Connect4',
    demo: '',
    demoIcon: FaExternalLinkAlt,
    date: 'December 2022',
    featured: false,
    achievements: [
      'Implemented Connect 4 game logic',
      'Physics-based animation for piece drops',
      'Responsive web design',
      'Solo project for web dev learning'
    ]
  },
  {
    id: 5,
    title: 'Two Player Snake Game',
    subtitle: 'Offline Multiplayer',
    description: 'Web-based two-player snake game built with vanilla JavaScript. Features competitive gameplay, collision detection, score tracking, and responsive controls for both players on the same device.',
    image: 'images/snake.png',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
    category: 'web',
    github: 'https://github.com/ThawTunZan/Two-Player-Snake',
    demo: '',
    demoIcon: FaExternalLinkAlt,
    date: 'December 2022',
    featured: false,
    achievements: [
      'Built two-player snake game logic',
      'Implemented collision detection and scoring',
      'Responsive controls for both players',
      'Solo project for game dev practice'
    ]
  },
  {
    id: 6,
    title: 'CG2111A Engineering',
    subtitle: 'mBot Maze Navigation',
    description: '4-person project to develop a remote control robot capable of navigating through mazes. Utilizes Arduino programming, LiDAR for obstacle detection, communication protocols, and hardware peripherals for autonomous navigation and color identification.',
    image: 'images/cg2111a.png',
    technologies: ['Arduino', 'LiDAR', 'C++', 'Hardware', 'Robotics'],
    category: 'hardware',
    github: 'https://github.com/ThawTunZan/Alex-Bot',
    demo: '',
    demoIcon: FaExternalLinkAlt,
    date: 'January 2023',
    featured: true,
    achievements: [
      'Designed and programmed autonomous robot',
      'Integrated LiDAR for obstacle detection',
      'Remote control and color identification',
      'Team-based hardware/software integration'
    ]
  },
  {
    id: 7,
    title: 'CG3207 Computer Architecture',
    subtitle: 'Designed a CPU using Verilog',
    description: 'A semester-long project that was done in a group of 3. Build a CPU similar to an ARM and RISCV architecture. Programmed using Verilog on a FPGA board',
    image: 'images/CG3207.png',
    technologies: ['Verilog', 'FPGA board'],
    category: 'hardware',
    github: '',
    date: 'August 2024',
    featured: true,
    achievements: [
      'Implemented ALU, Decoder, PC logic, Assembly, STM32, and RV',
      'Can run extensive number of ARM assembly codes',
      'Additional Improvements like Data Forwarding, Concurrency instructions, Stalling, and Flushing',
      'Implemented and extensive testing using Verilog'
    ],
  },
  {
    id: 8,
    title: 'EE2026 Digital Design',
    subtitle: 'FPGA Bomb Tag Game',
    description: 'A semester-long project developing a 4-player multiplayer game on FPGA boards. Features include UART communication between boards, physics animations with gravity effects, and real-time gameplay mechanics. Players must pass a bomb before it explodes, with the last player standing winning.',
    image: 'images/FPGABoard.png',
    technologies: ['FPGA', 'UART', 'VHDL', 'Hardware Design', 'Multiplayer'],
    category: 'hardware',
    github: '',
    demo: 'https://www.youtube.com/watch?v=5ip-X0AAwHc',
    demoIcon: FaYoutube,
    date: 'August 2023',
    featured: true,
    achievements: [
      'Developed multiplayer game logic for FPGA',
      'Implemented UART communication between boards',
      'Physics-based animation for player movement',
      'Real-time gameplay with hardware integration'
    ]
  },
  
  {
    id: 9,
    title: 'Alarmate (In-progress)',
    subtitle: 'A Social Alarm App',
    description: 'A social app that uses geolocation and friends as alarms',
    image: '',
    technologies: ['React Native', 'Firebase', 'Typescript'],
    category: 'hardware',
    github: 'https://github.com/ThawTunZan/Alarmate',
    date: 'July 2025',
    featured: false,
    achievements: [
    ],
  },
  {
    id: 10,
    title: 'DizzyWhat (In-progress)',
    subtitle: 'A desktop app used to reduce motion sickness',
    description: 'A desktop app that overlays on the laptop screen with objects whose movement is determined by the acceleration of the bus or the train the user is on. Implemented by implementing a HTTPS and websocket connection to the phone gyroscope',
    image: '',
    technologies: ['React', 'Electron', 'Javascript', ],
    category: 'software',
    github: 'https://github.com/ThawTunZan/DizzyWhat',
    date: 'July 2025',
    featured: false,
    achievements: [
    ],
  },
  {
    id: 11,
    title: 'CG2028 Computer Organization',
    subtitle: 'An electronic project that decipher the soundwave',
    description: 'A message was hidden in high frequency with some noises. Math concepts like Fourier transform was used to decipher this mixture of sound to restore the original message. Assembly was used to program Fourier Transform and other math concepts',
    image: 'images/CG2028_circuit.png',
    technologies: ['Assembly', 'Analog Discovery2', 'LM324', ],
    category: 'hardware',
    github: '',
    date: 'April 2024',
    featured: false,
    achievements: [
    ],
  },
];

export default projectsData; 