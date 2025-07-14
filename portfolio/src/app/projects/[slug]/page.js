
import { projects } from '@/app/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import ProjectDetails from '@/app/components/ProjectDetails';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }) {


  const { slug } = await params

  
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-center">Project not found</div>;
  }

  return (
     <ProjectDetails project={project} />

  );
}

