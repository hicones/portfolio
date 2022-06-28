import css1 from "../img/portImages/img-1.png";
import css2 from "../img/portImages/img-2.png";
import react1 from "../img/portImages/react_styled.png";
import img2 from "../img/portImages/img-4.png";
import img3 from "../img/portImages/img-3.png";
import img5 from "../img/portImages/img-5.png";
import img7 from "../img/portImages/img-7.png";
import img8 from "../img/portImages/img-8.jpeg";
import img9 from "../img/portImages/loginsystem.png";
import img10 from "../img/portImages/valoblog.png";
import img11 from "../img/portImages/img-11.jpeg";

const portfolios = [
  {
    id: 1,
    category: "NextJS",
    image: img10,
    link1: "https://github.com/hicones/ValoBlog",
    link2: "https://valoblog.vercel.app/",
    title: "Valorant Concept page",
    text: "Site reestilizado do jogo Valorant feito em ReactJS com TypeScript, NextJS e backend em nodeJS",
  },
  {
    id: 2,
    category: "NextJS",
    image: img9,
    link1: "https://github.com/hicones/LoginSystem",
    link2: "https://login-system-ten.vercel.app/auth/login",
    title: "LoginSystem",
    text: "Sistema de login feito em ReactJS com TypeScript, NextJS e backend firebase",
  },
  {
    id: 3,
    category: "React JS",
    image: img8,
    link1: "https://github.com/hicones/tesla-ui-clone",
    link2: "#",
    title: "Tesla UI Clone",
    text: "UI Clone do Site da Tesla feito em ReactJS e TypeScript",
  },
  {
    id: 4,
    category: "React Native",
    image: img11,
    link1: "https://github.com/hicones/tesla-ui-clone",
    link2: "#",
    title: "Shop Tenis",
    text: "Shop Tenis da Puma feito em React Native",
  },
  {
    id: 5,
    category: "CSS",
    image: css1,
    link1: "https://www.github.com/hicones",
    link2: "https://bjbtelecom.netlify.app/",
    title: "Site de Provedor",
    text: "Criado com HTML e CSS.",
  },
  {
    id: 6,
    category: "CSS",
    image: css2,
    link1: "https://www.github.com/hicones",
    link2: "#",
    title: "Flexblog",
    text: "Site completamente responsivo utilizando CSS Flexbox ",
  },
  {
    id: 7,
    category: "Javascript",
    image: img3,
    link1: "https://www.github.com/hicones",
    link2: "https://pokedex2021v1.netlify.app/",
    title: "PokeDex 1º Geração",
    text: "Pokedex Feita em JavaScript consumindo a PokéAPI",
  },
  {
    id: 8,
    category: "HTML",
    image: img7,
    link1: "https://www.github.com/hicones",
    link2: "https://spotifyclone21.netlify.app/",
    title: "Static Spotify Clone",
    text: "Criado utilizando HTML/CSS básico, a página é completamente estática e não é responsiva.",
  },
  {
    id: 9,
    category: "React Native",
    image: img5,
    link1: "https://www.github.com/hicones",
    link2: "#",
    title: "Calculadora de IMC",
    text: "Feita em React Native",
  },
  {
    id: 10,
    category: "React JS",
    image: react1,
    link1: "https://www.github.com/hicones",
    link2: "#",
    title: "Responsive Portfolio Website",
    text: "Criado usando diferentes técnologias, React, Material UI, Styled-Components e mais...",
  },
  {
    id: 11,
    category: "HTML",
    image: img2,
    link1: "https://www.github.com/hicones",
    link2: "https://healthtrackauth.netlify.app/",
    title: "Tela de Login Health Track",
    text: "Tela de Autenticação feita em HTML/CSS",
  },
];

export default portfolios;
