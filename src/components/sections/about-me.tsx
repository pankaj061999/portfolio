import Image from 'next/image';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={"https://i.postimg.cc/jSCW77F2/Pankaj-Banglore.jpg"}
              alt="Fullpose of Pankaj"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
              height={360}
              width={280}
            />
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">Hi, I&apos;m Pankaj!</Typography>
          <Typography>
            I&apos;m a full-stack developer specializing in React.js and Node.js. I&apos;m passionate about creating seamless, pixel-perfect digital experiences. With a focus on clean, readable code and user-centered design, I bring ideas to life through modern web technologies like Next.js, TypeScript, and TailwindCSS.
          </Typography>
          <Typography>
            After starting my web development journey in 2020, I now create cutting-edge web applications. I&apos;m always learning and love to tackle new challenges.
          </Typography>
          <Typography>
            Currently, I&apos;m looking for a full-time opportunity to collaborate on exciting projects. If you think we could work well together, feel free to reach out!
          </Typography>
          <Typography>
            When I&apos;m not coding, you can find me on <Link externalLink href={EXTERNAL_LINKS.TWITTER}>Twitter</Link> or <Link externalLink href={EXTERNAL_LINKS.GITHUB}>GitHub</Link>, sharing my journey and building in public.
          </Typography>
          <Typography>Some quick facts about me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">B.Tech in Biotechnology, IIT Roorkee (2020)</Typography>
              <Typography component="li">Full-time web developer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner & aspiring indie hacker</Typography>
            </ul>
          </div>
          <Typography>
            If you&apos;re looking for a passionate, results-driven developer, I&apos;d love to chat. Let&apos;s connect!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
