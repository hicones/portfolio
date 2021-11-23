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
                        year={'2021 - 2021'} 
                        title={'Analista Transacional N2'}
                        subTitle={'Fastcash'}
                        text={'Análise de transações bancarias. prevenção de fraudes, atendimento aos publishers, atendimento ao cliente, desenvolvimento de bots e técnico de infraestrutura. '} 
                    />
                    <ResumeItem 
                        year={'2021 - Freelance'} 
                        title={'Front-end Developer'}
                        subTitle={'BJB Telecom'}
                        text={'Desenvolvimento do site da empresa e interfaces internas. '} 
                    />
                    <ResumeItem 
                        year={'07/2019 - 08/2020'} 
                        title={'Analista de Suporte Técnico'}
                        subTitle={'BJB Telecom'}
                        text={'Suporte técnico ao cliente, acesso remoto, manutenção de servidores, instalação de infraestrutura, auxilio geral em todas as atividades administrativas da empresa, como planejamento, pagamentos,cobrança e marketing. '} 
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
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Ensino Médio'}
                        subTitle={'Escola Professor João Dias da Silveira'}
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
