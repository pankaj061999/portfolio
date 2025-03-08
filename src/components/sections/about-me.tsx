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
        <Tag label="About Me" />
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
            I&apos;m a full-stack developer with over 4 years of experience specializing in Next.js, React.js, and Node.js. I thrive on building high-performance, scalable applications and enjoy crafting seamless user experiences with modern web technologies like TypeScript and TailwindCSS.
          </Typography>
          <Typography>
            My journey in web development began in 2020, and since then, I&apos;ve worked on a variety of projects, always aiming to write clean, efficient, and maintainable code. I&apos;m also proficient in AWS, leveraging cloud solutions to build robust and scalable applications.
          </Typography>
          <Typography>
            Currently, I&apos;m exploring new opportunities where I can contribute my skills and collaborate on innovative projects. If you&apos;re looking for a dedicated developer to bring ideas to life, let&apos;s connect!
          </Typography>
          <Typography>
            When I&apos;m not coding, you can find me sharing my journey and building in public on <Link externalLink href={EXTERNAL_LINKS.TWITTER}>Twitter</Link> or <Link externalLink href={EXTERNAL_LINKS.GITHUB}>GitHub</Link>.
          </Typography>
          <Typography>Some quick facts about me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">B.Tech in Biotechnology, IIT Roorkee (2020)</Typography>
              <Typography component="li">4+ years of experience as a full-stack developer</Typography>
              <Typography component="li">Expert in Next.js, React.js, Node.js & AWS</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Passionate about AI, IoT, and blockchain</Typography>
              <Typography component="li">Aspiring indie hacker & tech entrepreneur</Typography>
            </ul>
          </div>
          <Typography>
            If you&apos;re looking for a skilled and results-driven developer, I&apos;d love to chat. Let&apos;s build something amazing together!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
