import MovieFinderImage from '../src/assets/movie-finder.webp'
import PasswordGenImage from '../src/assets/passwordgen.webp'
import BudgetCalcImage from '../src/assets/presupuesto.webp'
import ShoppingCartImage from '../src/assets/shopping-cart.webp'
import SimpleBlackImage from '../src/assets/simpleblack.webp'
import TicTacImage from '../src/assets/tic-tac-toe.webp'

import CssIcon from '../src/assets/css.png'
import EnglishIcon from '../src/assets/eng.webp'
import HTMLIcon from '../src/assets/html-5.png'
import JavaScriptIcon from '../src/assets/js.png'
import ReactIcon from '../src/assets/react-js.png'
import TailwindIcon from '../src/assets/tailwind-css-icon.png'

export const PROJECTS = [
  {
    id: 1,
    name: 'Movie Finder',
    tecnologies: [
      { name: 'React', image: ReactIcon },
      { name: 'Tailwind', image: TailwindIcon }
    ],
    description:
      'In this application, states were utilized to control the search form, enabling users to search for movies in real time as they type. To enhance performance, React hooks such as useEffect and useMemo were implemented. With useEffect, API queries were efficiently managed by triggering them when specific values change or when the component is mounted or dismounted. By utilizing useMemo, calculations and storage of values were optimized, minimizing unnecessary recalculations.',
    img: MovieFinderImage,
    href: 'https://movie-finder-rick.netlify.app/',
    repo: 'https://github.com/rickferrodriguez/Cursos-React/tree/main/Pruebas-Tecnicas/peliculas-tailwind'
  },
  {
    id: 2,
    name: 'Shopping Cart',
    tecnologies: [
      { name: 'React', image: ReactIcon },
      { name: 'Tailwind', image: TailwindIcon }
    ],
    description:
      'States were utilized to create product filters and useContext was employed to manage the global states of both the filter and the cart. To minimize the need for repetitive setState calls, useReducer was implemented. Conditional rendering and local storage were also incorporated to enhance the overall user experience.',
    img: ShoppingCartImage,
    href: 'https://shopping-cart-rick.netlify.app/',
    repo: 'https://github.com/rickferrodriguez/react-shopping-cart'
  },

  {
    id: 3,
    name: 'Tic Tac Toe Game',
    tecnologies: [
      { name: 'React', image: ReactIcon },
      { name: 'Tailwind', image: TailwindIcon }
    ],
    description:
      'This application demonstrates mastery of key React concepts, such as the use of states to store and update game information. Through conditional renderings, the current state of the board is visually represented, enabling players to make their moves.',
    img: TicTacImage,
    href: 'https://rickferrodriguez.github.io/Tic-Tac-Toe/',
    repo: 'https://github.com/rickferrodriguez/Cursos-React/tree/main/02-tic-tac-toe'
  },
  {
    id: 4,
    name: 'Password Generator',
    tecnologies: [
      { name: 'JavaScript', image: JavaScriptIcon },
      { name: 'HTML', image: HTMLIcon },
      { name: 'CSS', image: CssIcon }
    ],
    description:
      'This application allows users to generate secure passwords randomly. Algorithms and programming logic in JavaScript were used to generate passwords based on specific requirements, such as length and the inclusion of special characters, uppercase letters, lowercase letters, and numbers.',
    img: PasswordGenImage,
    href: 'https://rickferrodriguez.github.io/Desafios/JavaClass/passGenerator/index.html',
    repo: 'https://github.com/rickferrodriguez/Desafios/tree/master/JavaClass'
  },
  {
    id: 5,
    name: 'Budget Calculator',
    tecnologies: [
      { name: 'JavaScript', image: JavaScriptIcon },
      { name: 'HTML', image: HTMLIcon },
      { name: 'CSS', image: CssIcon }
    ],
    description:
      'In this program, users can track and manage their income and expenses. Programming logic allows users to enter their income and expenses, and the calculator automatically performs the calculations to display the current balance.',
    img: BudgetCalcImage,
    href: 'https://rickferrodriguez.github.io/Desafios/JavaClass/Presupuesto/index.html',
    repo: 'https://github.com/rickferrodriguez/Desafios/tree/master/JavaClass'
  },

  {
    id: 6,
    name: 'Simple BlackJack',
    tecnologies: [
      { name: 'JavaScript', image: JavaScriptIcon },
      { name: 'HTML', image: HTMLIcon },
      { name: 'CSS', image: CssIcon }
    ],
    description:
      'In this game, random cards are generated and the objective is to get as close as possible to a sum total of 21 without going over. Programming logic was used to generate random cards, calculate the total sum, and check if the player has gone over 21, which would result in a defeat.',
    img: SimpleBlackImage,
    href: 'https://rickferrodriguez.github.io/Desafios/JavaClass/blackjack/index.html',
    repo: 'https://github.com/rickferrodriguez/Desafios/tree/master/JavaClass'
  }
]

export const SKILLS = [
  {
    id: 0,
    name: 'English',
    subjects: 'Maintainability',
    img: EnglishIcon
  },
  {
    id: 1,
    name: 'React JS',
    subjects: 'States, Events, Effects',
    img: ReactIcon
  },
  {
    id: 2,
    name: 'JavaScript',
    subjects: 'Events, Math with JavaScript',
    img: JavaScriptIcon
  },
  {
    id: 3,
    name: 'CSS',
    subjects: 'Responsive development',
    img: CssIcon
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    subjects: 'Web Design',
    img: TailwindIcon
  },
  {
    id: 5,
    name: 'HTML',
    subjects: 'Maintainability',
    img: HTMLIcon
  }
]

export const UNI = {
  name: 'SYSTEMS ENGINEERING',
  type: 'university',
  place: 'Universidad Mariana, Colombia',
  duration: '10 Semesters',
  dates: 'August 2016, April 2022'
}

export const STUDIES = [
  {
    name: 'EF SET ENGLISH CERTIFICATE 61/100 (C1 ADVANCE)',
    type: 'English',
    place: 'EF Standard English Test (EF SET)',
    duration: '',
    dates: 'April 5, 2023'
  },
  {
    name: 'CLOSURES Y SCOPE EN JAVASCRIPT',
    type: 'JavaScript',
    place: 'Platzi Academi',
    duration: '',
    dates: 'February 9, 2023'
  },
  {
    name: 'ASINCRONISMO CON JAVASCRIPT',
    type: 'JavaScript',
    place: 'Platzi Academi',
    duration: '',
    dates: 'February 19, 2023'
  },
  {
    name: 'INTRODUCCIÓN A REACT.JS',
    type: 'React JS',
    place: 'Platzi Academi',
    duration: '',
    dates: 'February 24, 2023'

  },
  {
    name: 'VOCABULARY AND EXPRESSIONS',
    type: 'English',
    place: 'Platzi Academi',
    duration: '',
    dates: 'January 12, 2023'
  },
  {
    name: 'ENGLISH COURSE FOR DEVELOPERS',
    type: 'English',
    place: 'Platzi Academi',
    duration: '',
    dates: 'February 28, 2023'
  },
  {
    name: 'BÁSICO DE JAVASCRIPT',
    type: 'JavaScript',
    place: 'Platzi Academi',
    duration: '',
    dates: 'January 17, 2023'
  },
  {
    name: 'UNIVERSIDAD DE JAVASCRIPT – DE CERO A EXPERTO',
    type: 'JavaScript',
    place: 'Udemy',
    duration: '',
    dates: 'January 17, 2023'
  },
  {
    name: 'CURSO BÁSICO DE TAILWIND CSS',
    type: 'Tailwind CSS',
    place: 'Platzi Academi',
    duration: '',
    dates: 'May 8, 2023'
  },
  {
    name: 'TALLER PRÁCTICO DE JAVASCRIPT: MATEMÁTICAS Y ESTADÍSTICA BÁSICA',
    type: 'JavaScript',
    place: 'Platzi Academi',
    duration: '',
    dates: 'February 7, 2023'
  },
  {
    name: 'PRÁCTICO DE JAVASCRIPT',
    type: 'JavaScript',
    place: 'Platzi Academi',
    duration: '',
    dates: 'January 23, 2023'
  },
  {
    name: 'INTRODUCTION TO BIG DATA',
    type: 'other',
    place: 'UC San Diego',
    duration: '',
    dates: 'September 24, 2020'
  },
  {
    name: 'SCRUM FUNDAMENTALS',
    type: 'other',
    place: 'SCRUMstudy – SFC',
    duration: '',
    dates: 'May 25, 2021'
  },
  {
    name: 'DEFINITIVO DE HTML Y CSS',
    type: 'HTML',
    place: 'Platzi Academi',
    duration: '',
    dates: 'Jul 24, 2022'
  },
  {
    name: 'CSS GRID BÁSICO',
    type: 'CSS',
    place: 'Platzi Academi',
    duration: '',
    dates: 'October 12, 2022'
  },
  {
    name: 'TRANSFORMACIONES Y TRANSICIONES EN CSS',
    type: 'CSS',
    place: 'Platzi Academi',
    duration: '',
    dates: 'Mar 7, 2023'
  }
]
