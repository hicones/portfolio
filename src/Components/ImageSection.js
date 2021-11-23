import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import cvdownload from '../pdf/Cv_Henrique.pdf';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Eu sou <span>Henrique Almeida</span></h4>
                <p className="paragraph">
                    Experiência como analista Transacional , 
                    analista de suporte técnico, 
                    estudante em Análise e desenvolvimento de sistemas pela FIAP e Desenvolvedor Front-end e fullstack. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nome completo</p>
                        <p>Idade</p>
                        <p>Nacionalidade </p>
                        <p>Linguagens </p>
                        <p>Endereço</p>
                        <p>Serviço</p>
                    </div>
                    <div className="info">
                        <p>: Henrique Alexandre Alves de Almeida</p>
                        <p>: 19</p>
                        <p>: Brasileiro </p>
                        <p>: Português, Inglês e Espanhol </p>
                        <p>: São Paulo/SP - Brasil</p>
                        <p>: Front-End Developer</p>
                    </div>
                </div>
                <a href={cvdownload} target="_blank" rel="noreferrer"><PrimaryButton title={'Download Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
