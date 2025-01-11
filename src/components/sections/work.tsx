"use client"

import { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const WorkSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  const handleShowMoreClick = () => {
    setShowAll(!showAll);
    (window as any).dataLayer?.push({
      event: 'toggleShowProjects',
      showAll: !showAll,
    });
  };

  return (
    <Container id="work" className="py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center text-gray-800">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      <div className="mt-8 flex flex-col gap-12">
        {visibleProjects.map((project, index) => (
          <ProjectDetails
            key={index}
            {...project}
            layoutType={index % 2 === 0 ? 'default' : 'reverse'}
          />
        ))}
      </div>

      {PROJECTS.length > 4 && (
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMoreClick}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </Container>
  );
};

export default WorkSection;
