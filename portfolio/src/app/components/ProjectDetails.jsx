// 'use client';

// import { motion } from 'framer-motion';
// import styled from 'styled-components';
// import Link from 'next/link';

// export default function ProjectDetails({ project }) {
//     return (
//         <Wrapper>
//             <motion.h1
//                 className="title"
//                 initial={{ opacity: 0, y: -30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 style={{
//                     background: project.gradient,
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                     color: 'transparent',
//                 }}
//             >
//                 {project.title}
//             </motion.h1>

//             <Card
//                 style={{
//                     border: `1px solid ${project.gradient.split(',')[0]}`,
//                     boxShadow: `0 0 15px ${project.gradient.split(',')[0]}`,
//                 }}
//             >
//                 <motion.p
//                     className="description"
//                     initial={{ opacity: 0, x: -40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 }}
//                 >
//                     {project.details}
//                 </motion.p>

//                 {project.live && (
//                     <motion.a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="live-link"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.6 }}
//                     >
//                         🔗 View Live Project
//                     </motion.a>
//                 )}
//             </Card>

//             <BackLink href="/">← Back to Projects</BackLink>
//         </Wrapper>
//     );
// }

// const Wrapper = styled.div`
//   max-width: 900px;
//   margin: 0 auto;
//   padding: 4rem 1.5rem;
//   text-align: center;

//   .title {
//     font-size: 2.5rem;
//     font-weight: 800;
//     margin-bottom: 2rem;
//   }
// `;

// const Card = styled(motion.div)`
//   background: rgba(255, 255, 255, 0.03);
//   padding: 2rem;
//   border-radius: 1rem;
//   margin-bottom: 2rem;

//   .description {
//     font-size: 1.1rem;
//     line-height: 1.6;
//     color: #e2e8f0;
//     margin-bottom: 1.5rem;
//     text-align: left;
//   }

//   .live-link {
//     font-weight: 600;
//     text-decoration: underline;
//     color: #fff;
//   }
// `;

// const BackLink = styled(Link)`
//   display: inline-block;
//   margin-top: 1rem;
//   color: #888;
//   font-size: 1rem;
//   text-decoration: underline;

//   &:hover {
//     color: white;
//   }
// `;

'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import { FaGooglePlay, FaAppStoreIos, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectDetails({ project }) {
    const primaryColor = project.gradient.split(',')[0]; // First gradient color for border & glow

    return (
        <Wrapper>
            <motion.h1
                className="title"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    background: project.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                }}
            >
                {project.title}
            </motion.h1>

            <Card
                style={{
                    border: `1px solid ${primaryColor}`,
                    boxShadow: `0 0 15px ${primaryColor}`,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Label>Details:</Label>
                    <p className="description">{project.details}</p>
                </motion.div>

                {project.live && (
                    <motion.div
                        className="link-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Label>
                            <FaExternalLinkAlt className="icon" /> Live Link:
                        </Label>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            {project.live}
                        </a>
                    </motion.div>
                )}

                {project.androidLink && (
                    <motion.div
                        className="link-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Label>
                            <FaGooglePlay className="icon" /> Google Play:
                        </Label>
                        <a href={project.androidLink} target="_blank" rel="noopener noreferrer">
                            {project.androidLink}
                        </a>
                    </motion.div>
                )}

                {project.iosLink && (
                    <motion.div
                        className="link-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <Label>
                            <FaAppStoreIos className="icon" /> App Store:
                        </Label>
                        <a href={project.iosLink} target="_blank" rel="noopener noreferrer">
                            {project.iosLink}
                        </a>
                    </motion.div>
                )}
            </Card>

            <BackLink href="/">← Back to Projects</BackLink>
        </Wrapper>
    );
}


const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: center;

  .title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: left;

  .description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .link-block {
    margin-bottom: 1rem;
    word-break: break-word;

    a {
      color: #60a5fa;
      text-decoration: underline;
      font-size: 0.95rem;
    }
  }
`;

const Label = styled.div`
  font-weight: 600;
  color: #cbd5e1;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon {
    font-size: 1rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  color: #aaa;
  font-size: 0.95rem;
  text-decoration: underline;

  &:hover {
    color: white;
  }
`;
