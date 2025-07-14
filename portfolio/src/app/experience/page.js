
'use client'
import ExperienceSection from "../components/ExperienceSection";
import styled from 'styled-components';

export default function Experience() {
    return (
      <Wrapper>
         <h2>Experience</h2>
        {/* <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Email me at: <a href="mailto:yourmail@example.com" className="text-blue-500">yourmail@example.com</a>
        </p> */}
        <ExperienceSection/>

      </Wrapper>
    );
  }


  const Wrapper = styled.section`
  padding: 3rem 1rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.text};
  }
`;