import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = 'default',
}: ProjectDetailsProps) => {
  const handleVisitProjectClick = () => {
    (window as any).dataLayer?.push({
      event: 'projectVisit',
      projectName: name,
      projectUrl: url,
    });
  };

  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div
        className={mergeClasses(
          'flex items-center justify-center border-gray-100 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-8 dark:bg-gray-800 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        <Link noCustomization href={url} externalLink>
          <Image
            src={previewImage}
            alt={`${name} preview`}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>

      <div
        className={mergeClasses(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          layoutType === 'default' ? '' : 'md:order-first'
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology}  className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"/>
          ))}
        </div>
        <Link
          href={url}
          noCustomization
          onClick={handleVisitProjectClick}
          className="self-start mt-4 rounded-lg px-4 py-2 bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 hover:shadow-md transition-all flex items-center gap-2"
          externalLink
        >
          <ExternalLink className="stroke-current text-white" />
          Visit Project
        </Link>
      </div>
    </Card>
  );
};

export default ProjectDetails;
