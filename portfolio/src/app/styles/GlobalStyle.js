'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

export const lightTheme = {
  body: '#ffffff',
  text: '#121212',
  border: '#d1d5db', // light gray
  dark: false

};

export const darkTheme = {
  body: '#121212',
  text: '#ffffff',
  border: '#888888', // subtle gray
  dark: true

};
