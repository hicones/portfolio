import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contato'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Entre em contato</h4>
                    </div>
                    <form  accept-charset="UTF-8" action="https://www.formbackend.com/f/1b2d546d7bccfdd3" method="POST" className="form">
                        <div className="form-field">
                            <label htmlFor="name"  >Seu nome*</label>
                            <input type="text" id="name" name="Nome" required/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Seu email*</label>
                            <input type="email" id="email" name="E-mail" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Assunto</label>
                            <input type="text" id="subject" name="Assunto" required/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Sua Mensagem*</label>
                            <textarea name="Mensagem" id="textarea" type="textarea"required cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                        <button type="submit" target="_blank"><PrimaryButton title={'Enviar Email'} /></button>
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={'Celular'} icon={phone} cont1={'+55 (11) 94891-5890'} cont2={'(11) 2746-6875'} />
                    <ContactItem title={'Email'} icon={email} cont1={'Devhenrique.almeida@gmail.com'} cont2={'henriquealexandreaa@hotmail.com'} />
                    <ContactItem title={'Endereço'} icon={location} cont1={'Jardim Ipanema, São Paulo/SP'} cont2={'Brasil'} /> 
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
