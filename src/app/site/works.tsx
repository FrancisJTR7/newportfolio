import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  titleLines: string[];
  description: string;
  technologies: string[][];
  image: string | string[];
  imageAlt: string;
  link?: string | string[];
  linkText?: string | string[];
}

const PROJECTS: Project[] = [
  {
    id: "work1",
    title: "orca analytics",
    titleLines: ["orca analytics", "dashboard w/ai"],
    description:
      "this is my longest collaboration, I was brought in to rebuild the application form the ground up using nextjs. this is a multi-tenant application used to give valuable insights into business advertisement metrics. this project involved deep optimization techniques where I was able to bring the initial and suibsequent load times from a painstaking~20-30s to ~1-3s. after building the dashboard, I continued to work with orca analytics to develop a multi-agentic system where the user can ask a plethora of questions to get answers and charts based on their data; as well as a multiude of reports.",
    technologies: [
      ["nextjs", "typescript"],
      ["scss", "figma"],
    ],
    image: [
      "/orca5.png",
      "/orca.png",
      "/orca2.png",
      "/orca3.png",
      "/orca4.png",
      "/orca5.png",
    ],
    imageAlt: "Orca Analytics dashboard",
    link: ["https://www.orcaanalytics.co/", "https://www.goorca.ai/"],
    linkText: ["https://www.orcaanalytics.co/", "https://www.goorca.ai/"],
  },
  {
    id: "work2",
    title: "wishew website",
    titleLines: ["wishew", "website"],
    description:
      "developed wishew's new web appplication based on their design. adhered to all design guidelines and requirements. maximized website performance plus pagespeed given constraints and optimized performance",
    technologies: [["nextjs", "scss"], ["figma"]],
    image: "/wishew.png",
    imageAlt: "landing page for wishew.com",
    link: "https://wishew.com/",
    linkText: "https://wishew.com/",
  },
  {
    id: "work3",
    title: "ricch website",
    titleLines: ["ricch", "website"],
    description:
      "helped in the design and development of ricch website as requested by clientele. features threejs models and animations throughout the website.",
    technologies: [
      ["nextjs", "figma"],
      ["threejs", "tailwind"],
    ],
    image: "/richhh.gif",
    imageAlt: "Gif of richh",
    link: "https://www.ricch.com/",
    linkText: "https://www.ricch.com/",
  },
  {
    id: "work4",
    title: "old portfolio",
    titleLines: ["old", "portfolio"],
    description:
      "straightforward portfolio website with threejs implementation. if you are seeing this then you are on the new portfolio website and my old portfolio is no longer serviced.",
    technologies: [
      ["react", "sass"],
      ["threejs", "bootstrap"],
    ],
    image: "/oldport.gif",
    imageAlt: "Gif of old portfolio",
    linkText: "this website is no longer live",
  },
  {
    id: "work5",
    title: "threejs jacket builder",
    titleLines: ["threejs", "jacket", "builder"],
    description:
      "threejs jacket builder component featuring dropdown options, real-time 3D model updates, responsive design across multiple devices, and backend data acquisition. (this was a component for a website requested by a client)",
    technologies: [
      ["nextjs", "three.js", "tailwind"],
      ["redux", "axios", "typescript"],
    ],
    image: "/3djackgif.gif",
    imageAlt: "Picture of jacket website",
    linkText: "no link available",
  },
  {
    id: "work6",
    title: "threejs ai shirt website",
    titleLines: ["threejs", "ai shirt", "website"],
    description:
      "simple 3d project where the user can customize a t-shirt using a prompt to create an ai generated image, or upload their own image onto the model.",
    technologies: [
      ["react", "vite", "node.js"],
      ["tailwind", "threejs", "framer"],
    ],
    image: "/aishirt.png",
    imageAlt: "Picture of shirt website",
    link: "https://ai-3d-shirt-website.vercel.app/",
    linkText: "https://3daishirt.com",
  },
];

export function Works() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    PROJECTS.forEach((project, index) => {
      const projectId = project.id;
      const trigger = `.${projectId}c`;

      // Special handling for Orca carousel
      if (projectId === "work1" && Array.isArray(project.image)) {
        // Scale animation on the container (not individual images)
        gsap.fromTo(
          `.${projectId}-image-container`,
          {
            scale: 0.5,
          },
          {
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: trigger,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );

        // Set up carousel for Orca - duplicate images for infinite loop (2x)
        const orcaImages = [...project.image, ...project.image];

        // Set initial states - first image visible, others off-screen to the right
        orcaImages.forEach((img, imgIndex) => {
          gsap.set(`.${projectId}-carousel-img-${imgIndex}`, {
            x: imgIndex === 0 ? 0 : "100%",
            opacity: imgIndex === 0 ? 1 : 0,
          });
        });

        // Carousel animation - infinite loop through 2x array
        const carouselTimeline = gsap.timeline({
          repeat: -1, // Infinite repeat
        });

        // Create transitions for all images in the 2x array
        for (let i = 0; i < orcaImages.length; i++) {
          const currentIndex = i;
          const nextIndex = (i + 1) % orcaImages.length;
          const currentSelector = `.${projectId}-carousel-img-${currentIndex}`;
          const nextSelector = `.${projectId}-carousel-img-${nextIndex}`;

          carouselTimeline
            .to(currentSelector, {
              x: "-100%",
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
            })
            .fromTo(
              nextSelector,
              {
                x: "100%",
                opacity: 0,
              },
              {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.inOut",
              },
              "<" // Start at the same time as previous animation
            )
            .to({}, { duration: 5 }); // 5 second pause between images
        }

        // When timeline completes a cycle, reset positions for seamless infinite loop
        carouselTimeline.eventCallback("onRepeat", () => {
          // Reset all images to their starting positions for the next cycle
          orcaImages.forEach((img, imgIndex) => {
            if (imgIndex === 0) {
              gsap.set(`.${projectId}-carousel-img-${imgIndex}`, {
                x: 0,
                opacity: 1,
              });
            } else {
              gsap.set(`.${projectId}-carousel-img-${imgIndex}`, {
                x: "100%",
                opacity: 0,
              });
            }
          });
        });

        // Start carousel when section reaches 50% (same as text animation)
        ScrollTrigger.create({
          trigger: trigger,
          start: "top 50%",
          once: true,
          onEnter: () => {
            carouselTimeline.play();
          },
        });
      } else {
        // Regular single image animation for other projects
        gsap.fromTo(
          `.${projectId}-image`,
          {
            scale: 0.5,
          },
          {
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: trigger,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      }

      // Text line animations - timeline with first line scroll-triggered, rest follow with 0.2s delays
      const textTimeline = gsap.timeline({
        paused: true, // Start paused, will be played by ScrollTrigger
        defaults: {
          duration: 0.6, // Duration for each line animation
          ease: "power2.out",
        },
      });

      project.titleLines.forEach((line, lineIndex) => {
        if (lineIndex === 0) {
          // First line: starts immediately when timeline plays
          textTimeline.fromTo(
            `.${projectId}-line-${lineIndex}`,
            {
              translateY: "100%",
            },
            {
              translateY: "0%",
            }
          );
        } else {
          // Subsequent lines: time-based delay (0.2s per line after first)
          textTimeline.fromTo(
            `.${projectId}-line-${lineIndex}`,
            {
              translateY: "100%",
            },
            {
              translateY: "0%",
            },
            lineIndex * 0.2 // Stagger delay
          );
        }
      });

      // ScrollTrigger to start the timeline once at 50%
      ScrollTrigger.create({
        trigger: trigger,
        start: "top 50%",
        once: true, // Only trigger once
        onEnter: () => {
          textTimeline.play(); // Play the timeline automatically
        },
      });

      // Details section animation - line by line, independent of title
      const detailsTimeline = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.6,
          ease: "power2.out",
        },
      });

      // Technologies label
      detailsTimeline.fromTo(
        `.${projectId}-detail-tech-label`,
        {
          translateY: "100%",
        },
        {
          translateY: "0%",
        }
      );

      // Technology items (all tech groups)
      let detailIndex = 1;
      project.technologies.forEach((techGroup, groupIndex) => {
        techGroup.forEach((tech, techIndex) => {
          detailsTimeline.fromTo(
            `.${projectId}-detail-tech-${groupIndex}-${techIndex}`,
            {
              translateY: "100%",
            },
            {
              translateY: "0%",
            },
            detailIndex * 0.2 // Stagger delay
          );
          detailIndex++;
        });
      });

      // Description
      detailsTimeline.fromTo(
        `.${projectId}-detail-description`,
        {
          translateY: "100%",
        },
        {
          translateY: "0%",
        },
        detailIndex * 0.2
      );

      // Link(s) - handle multiple links for Orca
      if (projectId === "work1" && Array.isArray(project.link)) {
        // For Orca, animate the container which holds both links
        detailsTimeline.fromTo(
          `.${projectId}-detail-link`,
          {
            translateY: "100%",
          },
          {
            translateY: "0%",
          },
          (detailIndex + 1) * 0.2
        );
      } else {
        // Single link for other projects
        detailsTimeline.fromTo(
          `.${projectId}-detail-link`,
          {
            translateY: "100%",
          },
          {
            translateY: "0%",
          },
          (detailIndex + 1) * 0.2
        );
      }

      // Independent ScrollTrigger for details (same trigger point but separate)
      ScrollTrigger.create({
        trigger: trigger,
        start: "top 50%",
        once: true,
        onEnter: () => {
          detailsTimeline.play();
        },
      });
    });

    // Transition to contact section - fade out last work
    gsap.to(".work6c", {
      opacity: 0,
      translateY: "15%",
      scrollTrigger: {
        trigger: ".contsec",
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
    });

    // Background transition
    gsap.to(".worksec", {
      background: "rgba(0, 0, 0, 0.0)",
      scrollTrigger: {
        trigger: ".contsec",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="works"
      ref={containerRef}
      className="worksec h-[620vh] w-[100vw] bg-dgray bg-noised-gif "
    >
      <div className="works opacity-0 translate-y-24">
        <div className="w-[100vw] pt-[40px] text-[20px] text-center mb-[35px] font-haasm text-white">
          works
        </div>
        <div className="border-b-[1px] border-dashed border-white opacity-[35%]" />

        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className={`${project.id}c flex items-center justify-center h-[100vh] w-[100vw] relative overflow-hidden max-sm:flex-col max-sm:h-auto max-sm:min-h-[100vh] `}
          >
            {/* Main Image Container */}
            <div className="absolute inset-0 flex items-center justify-center max-sm:relative max-sm:inset-auto max-sm:w-full max-sm:h-[24vh] max-sm:flex-shrink-0 ">
              <div
                className={`${project.id}-image-container relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center overflow-hidden max-sm:max-w-full `}
              >
                {project.id === "work1" && Array.isArray(project.image) ? (
                  // Orca carousel images - doubled for infinite loop
                  [...project.image, ...project.image].map((img, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={img}
                      alt={`${project.imageAlt} ${imgIndex + 1}`}
                      width={1200}
                      height={800}
                      className={`${project.id}-carousel-img-${imgIndex} absolute w-full h-full object-fill rounded-[40px] max-sm:object-contain max-sm:rounded-[20px] max-sm:h-min `}
                    />
                  ))
                ) : (
                  // Regular single image for other projects
                  <Image
                    src={
                      typeof project.image === "string"
                        ? project.image
                        : project.image[0]
                    }
                    alt={project.imageAlt}
                    width={1200}
                    height={800}
                    unoptimized={
                      typeof project.image === "string" &&
                      project.image.endsWith(".gif")
                    }
                    className={`${project.id}-image w-full h-full object-fill rounded-[40px] max-sm:object-contain max-sm:rounded-[20px] max-sm:h-min `}
                  />
                )}
              </div>
            </div>

            {/* Overlay Title Text */}
            <div className="relative bottom-24 z-10 mix-blend-difference flex flex-col items-center justify-center w-full h-full pointer-events-none px-[5vw] max-sm:relative max-sm:bottom-0 max-sm:z-auto max-sm:h-auto  max-sm:px-4">
              <div className="font-haasxt text-[120px] max-xl:text-[100px] max-lg:text-[80px] max-md:text-[70px] max-sm:text-[40px] text-white text-center tracking-[-.8px] leading-[1.1]">
                {project.titleLines.map((line, lineIndex) => (
                  <div key={lineIndex} className="overflow-hidden h-[1.2em]">
                    <div
                      className={`${project.id}-line-${lineIndex} block`}
                      style={{ transform: "translateY(100%)" }}
                    >
                      {line}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Details Section - Bottom */}
            <div
              /* CHANGED: Added mix-blend-difference here */
              className={`${project.id}-details absolute bottom-24 left-0 right-0 z-10 mix-blend-difference flex flex-col items-center pb-[60px] px-[5vw] max-sm:relative max-sm:bottom-0 max-sm:z-auto max-sm:pb-0 max-sm:px-4 max-sm:mt-4`}
            >
              <div className="w-full max-w-[800px] flex flex-col items-center gap-6 text-white">
                {/* Technologies */}
                <div className="flex flex-col items-center gap-2">
                  <div className="overflow-hidden">
                    <div
                      className={`${project.id}-detail-tech-label`}
                      style={{ transform: "translateY(100%)" }}
                    >
                      <div className="font-haasm opacity-[90%] text-[16px]">
                        technologies
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-12 max-sm:gap-8 font-haast opacity-[80%] text-[18px]">
                    {project.technologies.map((techGroup, groupIndex) => (
                      <div key={groupIndex} className="text-center">
                        {techGroup.map((tech, techIndex) => (
                          <div key={techIndex} className="overflow-hidden">
                            <div
                              className={`${project.id}-detail-tech-${groupIndex}-${techIndex}`}
                              style={{ transform: "translateY(100%)" }}
                            >
                              {tech}
                              {techIndex < techGroup.length - 1 && <br />}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="overflow-hidden">
                  <div
                    className={`${project.id}-detail-description`}
                    style={{ transform: "translateY(100%)" }}
                  >
                    <div className="font-haaslight text-center max-w-[600px] text-[18px] max-sm:text-[14px] opacity-[85%]">
                      {project.description}
                    </div>
                  </div>
                </div>

                {/* Link(s) */}
                {project.id === "work1" && Array.isArray(project.link) ? (
                  // Orca has two links
                  <div className="overflow-hidden">
                    <div
                      className={`${project.id}-detail-link flex flex-col items-center gap-2`}
                      style={{ transform: "translateY(100%)" }}
                    >
                      {project.link.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-haaslight decoration-1 underline-offset-[6px] text-[14px] pointer-events-auto hover:opacity-70 transition-opacity"
                        >
                          {Array.isArray(project.linkText)
                            ? project.linkText[linkIndex]
                            : project.linkText}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="overflow-hidden">
                    <div
                      className={`${project.id}-detail-link`}
                      style={{ transform: "translateY(100%)" }}
                    >
                      {project.link ? (
                        <a
                          href={
                            typeof project.link === "string"
                              ? project.link
                              : project.link[0]
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-haaslight decoration-1 underline-offset-[6px] text-[14px] pointer-events-auto hover:opacity-70 transition-opacity"
                        >
                          {typeof project.linkText === "string"
                            ? project.linkText
                            : project.linkText?.[0]}
                        </a>
                      ) : (
                        <div className="underline font-haaslight decoration-1 underline-offset-[6px] text-[14px] opacity-[70%]">
                          {typeof project.linkText === "string"
                            ? project.linkText
                            : project.linkText?.[0]}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
