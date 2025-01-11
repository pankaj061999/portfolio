import Image from 'next/image';
import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 lg:w-1/3 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-primary-500 mb-6">
        <Image
          src={personAvatar!}
          alt={`${personName} avatar`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      <Typography variant="subtitle" className="text-gray-800 text-xl sm:text-2xl italic text-center mb-4">
        &quot;{testimonial}&quot;
      </Typography>

      {/* Person Details */}
      <div className="text-center mt-4">
        <Typography
          variant="subtitle"
          className="text-gray-900 font-semibold text-lg sm:text-xl"
        >
          {personName}
        </Typography>
        <Typography variant="body3" className="text-gray-600">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default TestimonialDetails;
