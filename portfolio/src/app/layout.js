"use client"
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './styles/GlobalStyle';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang="en" >
     
     <body className="min-h-screen flex flex-col">
       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />

       
        <main className="flex-grow" style={{ paddingTop: '80px' }}>
            {children}
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
