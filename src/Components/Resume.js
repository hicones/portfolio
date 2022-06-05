import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Currículo'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Experiências'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'02/2022 - 04/2022'} 
                        title={'Front-End Developer PL'}
                        subTitle={'Genezys Global Tech'}
                        text={'Desenvolvimento de aplicações no segmento de crypto, utilizando TypeScript, NextJS, Redux, requisições API Rest com Axios. '} 
                    />
                    <ResumeItem 
                        year={'12/2021 - 02/2022'} 
                        title={'Desenvolvedor Front-End Pleno'}
                        subTitle={'Turn2C'}
                        text={'Desenvolvimento de aplicações onboarding e Crm. Desenvolvimento de projetos. Desenvolvimento UX UI utilizando Figma. Requisições API Rest com Axios. '} 
                    /> 
                    <ResumeItem 
                        year={'11/2021 - Freelance'} 
                        title={'Front-end Developer'}
                        subTitle={'BJB Telecom'}
                        text={'Desenvolvimento do site da empresa e interfaces internas. '} 
                    />
                    <ResumeItem 
                        year={'02/2021 - 11/2021'} 
                        title={'Estágio em Analise de sistemas'}
                        subTitle={'Fastcash'}
                        text={'Estágio em analise de sistemas, desenvolvimento e suporte técnico.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educação'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021 - Cursando'} 
                        title={'Análise e Desenvolvimento de Sistemas'}
                        subTitle={'Faculdade de Informática e Administração Paulista (FIAP)'}
                        text={'Estudei planejamento de projetos, metodologias ágeis e linguagens de programação. Challanges com diversas empresas no lançamento de novos aplicativos e serviços. '} 
                    />
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'Web Design Completo'}
                        subTitle={'Origamid'}
                        text={'Aprendi a criar um site responsivo do zero. Do design ao código, utilizando HTML5, CSS3, JavaScript e com um design responsivo. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 4rem;
    }
`;
export default Resume
