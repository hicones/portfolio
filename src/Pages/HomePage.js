import React from "react";
import styled from "styled-components";
import LinkedInicon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import Instagramicon from "@material-ui/icons/Instagram";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Olá, eu sou <span>Henrique Almeida</span>
        </h1>
        <p>
          Desenvolvedor Front-End utilizando ReactJS, Estudante de Análise e
          Desenvolvimento de Sistemas pela Belas Artes!
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/henrique-almeida-079867169/"
            className="icon i-linkedin"
            target="blank"
          >
            <LinkedInicon />
          </a>
          <a
            href="https://github.com/hicones"
            className="icon i-github"
            target="blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/hicones1/"
            className="icon i-instagram"
            target="blank"
          >
            <Instagramicon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
