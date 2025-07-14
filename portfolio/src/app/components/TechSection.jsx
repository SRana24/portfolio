'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiRedux, SiTailwindcss, SiStyledcomponents, SiReactquery, SiGit, SiGithub, SiNodedotjs, SiNextdotjs, SiExpress, SiAndroid, SiAndroidstudio, SiIos, SiXcode, SiJest } from 'react-icons/si';


const techStack = [
  { name: 'React', icon: <SiReact color="#61DBFB" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F0DB4F" /> },
  { name: 'Redux', icon: <SiRedux color="#764abc" /> },
  { name: 'React Query', icon: <SiReactquery color="#FF4154" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
  { name: 'Styled Components', icon: <SiStyledcomponents color="#db7093" /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Git', icon: <SiGit color="#f34f29" /> },
  { name: 'Android', icon: <SiAndroid color="#3ddc84" /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#3C873A" /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'iOS', icon: <SiIos color="#999" /> },
  { name: 'Xcode', icon: <SiXcode color="#007AFF" /> }, // Blue tint for iOS ecosystem
  { name: 'Jest', icon: <SiJest color="#99425b" /> },
  { name: 'Android Studio', icon: <SiAndroidstudio color="#3ddc84" /> },



];

export default function TechSection() {
  return (
    <Wrapper>
      <h2>Tech Stack</h2>
      <Grid>
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <TechItem>
              <IconContainer>{tech.icon}</IconContainer>
              <span>{tech.name}</span>
            </TechItem>
          </motion.div>
        ))}
      </Grid>
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
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;
