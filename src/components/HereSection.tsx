"use client";

import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";
import ScrollReveal from "./ScrollReveal";

const HereSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-24">
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal
          stagger={0.12}
          className="flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          {/* avatar and greetings */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] vai-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
              <Image
                src="/images/avatar.png"
                alt="avatar image"
                width={240}
                height={240}
                className="relative"
                priority
              />

              {/* small greeting with curve arrow */}
              <div className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70">
                <div className="relative flex items-center justify-end">
                  <div className="relative w-16 h-6 md:w-24 md:h-16">
                    <Image
                      src="/images/hero-arrow.png"
                      alt="arrow image"
                      fill
                      className="object-contain scale-x-100 -rotate-6"
                      priority
                    />
                  </div>
                  <div className="-mt-6 md:-mt-10 shrink-0">
                    <span>Hello! I am </span>
                    <span className="text-[#a78bfa]">robi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="text-sm md:text-base text-white/60 mb-2">
              A Developer who
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
              <span className="block">Judges a book</span>
              <span className="block">
                by its{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#7127BA]">cover</span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                    <Image
                      src="/images/ellipse.png"
                      alt="arrow"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
                ...
              </span>
            </h1>

            <p className="mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </ScrollReveal>

        {/* role and description */}
        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            <Typewriter
              words={[
                "I'm a Full Stack Developer.",
                "I'm a UI/UX Designer.",
                "I'm a Tech Enthusiast.",
              ]}
              typeSpeed={65}
              deleteSpeed={0}
              delaySpeed={600}
              cursor
              cursorStyle="|"
              loop={1}
            />
          </h2>
          <p>
            Currently, I&apos;m a web developer{" "}
            <span className="inline-flex items-center  gap-1 text-[#1877F2]">
              <FaFacebook className="size-4" aria-hidden />
              Facebook,
            </span>
          </p>

          <p className="mt-6 text-white/70 leading-7">
            A Developer Passionate About Building Robust Web Experiences. I make
            meaningful and delightful digital products that create an
            equilibrium between user needs and business goals.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HereSection;
