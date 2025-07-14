

'use client';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    return (
        <Wrapper>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h2 className="text-3xl font-bold mb-4 text-center pb-4">Get In Touch</h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl mx-auto mb-10">
                    I'm open to exciting opportunities — whether it's full-time roles, freelance projects, or simply networking.
                    Let’s connect <span className="inline-block align-middle text-2xl">👤</span>
                </p>

                <Card>
                    <p className="text-lg">
                        Email me at:{' '}
                        <a href="mailto:s.k.rana@35@gmail.com" className="text-blue-500 underline">
                            s.k.rana@35@gmail.com
                        </a>
                    </p>

                    <DownloadButton
                        href="/Saikat Rana.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Download Resume
                    </DownloadButton>
                </Card>
            </motion.div>

            {/* Social Icons Section */}
            <SocialIcons>
                <a href="https://github.com/SRana24" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/saikat-rana-6941a9276/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="icon" />
                </a> */}
            </SocialIcons>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.section`
  padding: 4rem 1rem 2rem;
  text-align: center;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem auto 3rem;
  max-width: 600px;
  width: 100%;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #8e2de2, #4a00e0);
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  box-shadow: 0 0 12px rgba(142, 45, 226, 0.6);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(142, 45, 226, 0.9);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  .icon {
    font-size: 2rem;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      color: #8e2de2;
      text-shadow: 0 0 8px #8e2de2;
    }
  }
`;
