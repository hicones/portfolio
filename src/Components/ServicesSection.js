import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/adobe.svg';
import javascriptlogo from '../img/java-script.svg';
import reactlogo from '../img/reactlogo.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Serviços'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'Criação de Design utilizando Adobe XD/Figma.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={reactlogo} 
                            title={'Desenvolvimento Front-End'} 
                            paragraph={'Desenvolvimento Front-End utilizando React/Redux, HTML/CSS e Javascript.'}
                        />
                    </div>
                    <ServiceCard 
                        image={javascriptlogo} 
                        title={'Desenvolvimento Full-Stack'} 
                        paragraph={'Desenvolvimento utilizando NodeJS no back-end e ReactJS no front-end.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        max-width: 90%;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
            width: 350px;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ServicesSection;
