'use client';
import Title from "./shared/title";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { portfolioItems } from "@/app/data";
import { IPortfolioItem } from "@/app/interfaces";

export default function Portfolio() {
  const [ selectedProject, setSelectedProject ] = useState<IPortfolioItem | null>(null);

  const openModal = (e: React.MouseEvent, project: IPortfolioItem) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling when modal is open
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="container py-16 md:py-20" id="portfolio">

      <Title
        title={ 'Check out my Portfolio' }
        subtitle={ "Here's what I have done in the past" }
        text=""
      ></Title>

      <div
        className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        { portfolioItems.map((item) => (
          <div
            key={ item.id }
            className="mx-auto transform transition-all hover:scale-105 md:mx-0 group cursor-pointer"
            onClick={ (e) => openModal(e, item) }
          >
            <Image
              src={ item.image }
              width={ 800 }
              height={ 500 }
              className="w-full shadow rounded-lg"
              alt={ item.title }
            />
            <div className="text-grey pt-4 text-sm md:text-base">
              <h3 className="text-xl font-bold text-primary mb-2">{ item.title }</h3>
              <p className="line-clamp-3">
                { item.intro }
              </p>
              <button
                className="mt-2 text-primary font-semibold hover:underline block"
              >
                Read more
              </button>
            </div>
          </div>
        )) }
      </div>

      {/* Modal */ }
      { selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 overflow-y-auto"
          onClick={ closeModal }
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            onClick={ (e) => e.stopPropagation() }
          >
            {/* Close Button */ }
            <button
              onClick={ closeModal }
              className="absolute top-4 right-4 z-20 text-grey-dark hover:text-primary transition-colors"
            >
              <i className="bx bx-x text-4xl"></i>
            </button>

            <div className="flex flex-col md:flex-row overflow-hidden rounded-lg">
              {/* Project Image in Modal */ }
              <div className="md:w-1/2 p-6 bg-grey-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-grey-200">
                <Image
                  src={ selectedProject.image }
                  width={ 800 }
                  height={ 600 }
                  className="rounded-lg shadow-md object-contain max-h-[300px] md:max-h-[calc(90vh-3rem)]"
                  alt={ selectedProject.title }
                />
              </div>

              {/* Project Details */ }
              <div className="md:w-1/2 p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
                <h2 className="text-3xl font-bold text-primary mb-4">{ selectedProject.title }</h2>

                <div className="prose prose-sm md:prose-base max-w-none text-grey-dark">
                  <div dangerouslySetInnerHTML={ { __html: selectedProject.description || selectedProject.intro } } />
                </div>

                { selectedProject.link && (
                  <Link
                    href={ selectedProject.link }
                    target={ selectedProject.isExternal ? "_blank" : "_self" }
                    rel={ selectedProject.isExternal ? "nooppener noreferrer" : "" }
                    className="mt-8 inline-block bg-primary px-8 py-3 text-white font-bold rounded hover:bg-lila transition-colors"
                  >
                    View Project
                  </Link>
                ) }
              </div>
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}