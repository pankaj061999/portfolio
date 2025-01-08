"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Container from "../layout/container";
import { useEffect } from "react";

const HeroSection = () => {
  const updatedUserInformation = async () => {
    try {
      // Fetch user location data from ipapi
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();

      // Prepare user data
      const userData = {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        country_code: data.country_code,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        asn: data.asn,
        org: data.org
      };

      // Send data to your backend API
      await fetch(`https://peerlearnx-be.onrender.com/v1/auth/portfolioguest-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
    } catch (error) {
      console.error("Failed to update user information:", error);
    }
  };

  useEffect(() => {
    // Call the function to update user information
    updatedUserInformation();

    // LocalStorage for visit tracking
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      const storedVisitCount = localStorage.getItem("visitCount");
      const visitCount = storedVisitCount
        ? parseInt(storedVisitCount, 10) + 1
        : 1;
      localStorage.setItem("visitCount", visitCount.toString());
      localStorage.setItem("hasVisited", "true");

      // Track event using analytics if available
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "visit",
          event_category: "Visit",
          event_label: `Visit Count: ${visitCount}`,
          value: visitCount
        });
      }
    }
  }, []);

  return (
    <Container id="hero" className="bg-gradient-to-b from-gray-50 to-gray-200">
      <section className="py-16">
        <div className="container mx-auto flex flex-col items-center gap-12 px-6 md:flex-row md:gap-20">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-center text-4xl font-extrabold text-gray-800 md:text-left md:text-5xl">
              Hi, I&apos;m Pankaj Kumar Meena{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </h1>
            <p className="mt-4 max-w-xl text-center text-lg text-gray-600 md:text-left">
              A Full Stack Developer with over 4 years of experience in crafting
              fast, responsive, and visually captivating web applications. I
              specialize in React.js, Node.js, and Next.js.
            </p>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex items-center gap-2">
                <MapPin className="text-blue-500" />
                <span className="text-gray-700">New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span className="text-gray-700">
                  Available for Full-Time Opportunities
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
              <a
                href="mailto:pankaj@example.com"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-blue-700"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-gray-600">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-600"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gray-900"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="mailto:pankaj@example.com"
                className="transition hover:text-red-500"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 top-0 h-[300px] w-[300px] -translate-x-6 -translate-y-6 rounded-full bg-gradient-to-tr from-blue-300 to-purple-500 blur-lg" />
            <div className="absolute right-0 top-0 h-[150px] w-[150px] -translate-y-6 translate-x-6 rounded-full bg-pink-300 opacity-50 blur-xl" />
            <div className="absolute bottom-0 left-0 h-[100px] w-[100px] -translate-x-6 translate-y-6 rounded-full bg-yellow-300 opacity-50 blur-lg" />

            <Image
              src="https://i.postimg.cc/vHRmqKTr/Pankaj-IITR.jpg"
              alt="Pankaj Kumar Meena"
              className="relative z-10 h-[280px] w-[280px] rounded-3xl border-4 border-white object-cover shadow-lg"
              width={280}
              height={280}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
