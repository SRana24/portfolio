

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navbar({ darkMode, setDarkMode }) {

    return (
        <HeaderContainer
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <MainContainer >

                <Link href="/" >
                    Portfolio
                </Link>
                <NavWrapper >

                    {/* <Link href="/about">About</Link> */}
                    <Link href="/experience">Experience</Link>
                    <Link href="/contact">Contact</Link>
                    {/* <ThemeToggleButton onClick={() => setDarkMode(!darkMode)}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={darkMode ? 'sun' : 'moon'}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {darkMode ? '☀️ Light' : '🌙 Dark'}
                            </motion.span>
                        </AnimatePresence>
                    </ThemeToggleButton> */}
                </NavWrapper>
            </MainContainer>
        </HeaderContainer>

    );
}


// const HeaderContainer = styled(motion.header)`
//   width: 100%;
//   position: fixed;
//   top: 0;
//   left:0
//   z-index: 50;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.01);
// //   backdrop-filter: blur(10px); /* optional glass effect */
//   transition: background-color 0.3s ease;
//   background-color: ${({ theme }) => theme.body};
// `;
const HeaderContainer = styled(motion.header)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.body} 70%,
    rgba(0, 0, 0, 0.0)
  );
  backdrop-filter: blur(10px); /* optional glass effect */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background 0.3s ease;
`;


const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.05rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
  }

  @media screen and (max-width: 900px) {
    padding: 1.25rem 1rem;
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ darkMode }) => darkMode ? '#333' : '#f0f0f0'};
  color: ${({ theme }) => theme.text};  color: ${({ theme }) => theme.text};
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
