import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Minhas Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'VueJS'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'50%'}
                            text={'50%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        max-width: 80%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 900px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
