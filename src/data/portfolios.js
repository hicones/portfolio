import css1 from '../img/portImages/img-1.png';
import css2 from '../img/portImages/img-2.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/img-4.png';
import img3 from '../img/portImages/img-3.png';
import img5 from '../img/portImages/img-5.png';
import img7 from '../img/portImages/img-7.png';
import img8 from '../img/portImages/img-8.jpeg'


const portfolios = [
    {
        id: 1,
        category: 'React JS',
        image: img8,
        link1: 'https://www.github.com/hicones',
        link2: 'https://healthtrackauth.netlify.app/',
        title: 'Tesla UI Clone',
        text: 'UI Clone do Site da Tesla'
    },
    {
        id: 2,
        category: 'CSS',
        image: css1,
        link1: 'https://www.github.com/hicones',
        link2: 'https://bjbtelecom.netlify.app/',
        title: 'Site de Provedor',
        text: 'Criado com HTML e CSS.'
    },
    {
        id: 3,
        category: 'CSS',
        image: css2,
        link1: 'https://www.github.com/hicones',
        link2: '#',
        title: 'Flexblog',
        text: 'Site completamente responsivo utilizando CSS Flexbox '
    },
    {
        id: 4,
        category: 'Javascript',
        image: img3,
        link1: 'https://www.github.com/hicones',
        link2: 'https://pokedex2021v1.netlify.app/',
        title: 'PokeDex 1º Geração',
        text: 'Pokedex Feita em JavaScript consumindo a PokéAPI'
    },
    {
        id: 5,
        category: 'HTML',
        image: img7,
        link1: 'https://www.github.com/hicones',
        link2: 'https://spotifyclone21.netlify.app/',
        title: 'Static Spotify Clone',
        text: 'Criado utilizando HTML/CSS básico, a página é completamente estática e não é responsiva.'
    },
    {
        id: 6,
        category: 'React Native',
        image: img5,
        link1: 'https://www.github.com/hicones',
        link2: '#',
        title: 'Calculadora de IMC',
        text: 'Feita em React Native'
    },
    {
        id: 7,
        category: 'React JS',
        image: react1,
        link1: 'https://www.github.com/hicones',
        link2: '#',
        title: 'Responsive Portfolio Website',
        text: 'Criado usando diferentes técnologias, React, Material UI, Styled-Components e mais...'
    },
    {
        id: 8,
        category: 'HTML',
        image: img2,
        link1: 'https://www.github.com/hicones',
        link2: 'https://healthtrackauth.netlify.app/',
        title: 'Tela de Login Health Track',
        text: 'Tela de Autenticação feita em HTML/CSS'
    },
]

export default portfolios;