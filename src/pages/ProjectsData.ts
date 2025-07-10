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
  }
];

export default projectsData; 