// Shared project data for Projects and ProjectDetails pages
import { FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

export type Module = {
  id: number;
  moduleCode: string;
  moduleName: string;
  description: string;
  category: string;
  date?: string;
  YearSem: string;
  achievements?: string[];
  link: string;
};

const modulesData = [
  {
    id: 1,
    moduleCode: 'CS1010',
    moduleName: 'Programming Methodology',
    description: 'An introductory courses for computer engineering students. One of my first programming course and it was taught in C language. It was also one of the few hardest courses I have taken in NUS. Totally an eye opening experience to programming because the professor introduced many technologies like Linux and Shell.',
    category: 'Programming',
    date: 'August 2022',
    YearSem: 'Y1S1',
    achievements: [
      'Multiple types of expenses calculation',
      'Calls API to https://www.exchangerate-api.com/ with caching for API optimisation',
      'Efficient cloud database design',
      'Cloud optimisation so that there are less reads and writes'
    ],
    link: 'https://nusmods.com/courses/CS1010/programming-methodology'
  },
  {
    id: 2,
    moduleCode: 'CG1111A',
    moduleName: 'Engineering Principles and Practices',
    description: '',
    category: 'Electronics',
    date: 'August 2022',
    YearSem: 'Y1S1',
    achievements: [
    ],
    link: 'https://nusmods.com/courses/CG1111A/engineering-principles-and-practice-i'
  },
];

export default modulesData; 