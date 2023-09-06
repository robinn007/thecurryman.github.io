"use client";

import { allProjects } from "../constants/projects";
import { runningValues } from "../constants/running";
import { workoutValues } from "../constants/workout";
import { ExperienceMini } from "../components/experience";
import Calendar from "react-github-contribution-calendar";
import Image from "next/image";

export default function Home() {
  var until = "2023-06-01";
  var weekNames = ["", "M", "", "W", "", "F", ""];
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  var panelColors = [
    "#DDD",
    "#9be9a8",
    "#30c463",
    "#30a14e",
    "#216e39",
    "#d4af37",
  ];

  return (
    <div className="bg-white">
      <div className="">
        <div className="p-4 flex items-center justify-between gap-2"></div>
        <div className=" border-b sm:pt-16">
          {/* <img
            alt="profile picture"
            src="/static/images/profile2.jpg"
            className="w-[400px] h-[400px] mx-auto object-cover"
          /> */}
          <div className="max-w-2xl mx-auto p-4">
            <div className="pb-4">
              <h1 className="font-serif text-black text-3xl pb-4">
                Avinash Jain
              </h1>
              <p className="pb-4 text-gray-700">
                Hey there! I&apos;m Avi. I graduated from UC Berkeley in 2022
                and I currently live at home in San Jose.
              </p>
              <p className="pb-4 text-gray-700">
                I&apos;m working out of my garage exploring the intersection of
                generative AI and educational content, specifically the creation
                and distribution of personalized videos.
              </p>
              <p className="pb-4 text-gray-700">
                For the last 8 years, I&apos;ve been an online instructor,
                teaching over a million students how to code through{" "}
                <a
                  className="underline"
                  href="https://www.udemy.com/user/avinashjain5/"
                  target="_blank"
                  rel="noreferer"
                >
                  Udemy courses
                </a>
                ,{" "}
                <a
                  className="underline"
                  href="https://youtube.com/c/TheCodex"
                  target="_blank"
                  rel="noreferer"
                >
                  YouTube videos
                </a>{" "}
                and projects on my own platform,{" "}
                <a
                  className="underline"
                  href="https://thecodex.me/"
                  target="_blank"
                  rel="noreferer"
                >
                  The Codex
                </a>
                .
              </p>
              <p className="pb-4 text-gray-700">
                Questions I&apos;m thinking about:
              </p>
              <ol className="text-gray-700 pb-4">
                <li className="list-item list-decimal ml-8">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">
                      How can I extract more value from my existing content?
                    </div>
                    <div className="text-sm mb-4">
                      I&apos;m exploring this via{" "}
                      <a
                        className="underline"
                        href="https://www.udemy.com/user/avinash-4527/"
                        target="_blank"
                        rel="noreferer"
                      >
                        AI-dubbing of my courses
                      </a>
                      . 1,000+ students currently enrolled in dubbed courses in
                      Hindi, Portuguese, Chinese and more with an average rating
                      of 4.3 stars.
                    </div>
                  </div>
                </li>
                <li className="list-item list-decimal ml-8">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">
                      How can I generate the visuals to a programming tutorial?
                    </div>
                    <div className="text-sm mb-4">
                      Transcripts and human-like voice cloning can now be
                      generated. With visuals, I can create and personalize any
                      video on any programming subject.
                    </div>
                  </div>
                </li>
                <li className="list-item list-decimal ml-8">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">
                      What makes you take a specific course?
                    </div>
                    <div className="text-sm mb-4">
                      The content for every Python course is the same, it&apos;s
                      the instructor and their voice and reputation that
                      matters. With the generation of video content, I can
                      hyper-personalize the instructor to every student.
                    </div>
                  </div>
                </li>
              </ol>
              {/* <p className="pb-4 text-gray-700">
                If you&apos;re interested on what I&apos;m working on,
                let&apos;s talk!
              </p> */}
              <div className="flex flex-col text-md">
                <div className="flex">
                  <span className="text-gray-500">Twitter</span>
                  <hr className="w-full mt-3 mx-4 border-gray-300" />
                  <a
                    href="https://twitter.com/avinashj_"
                    target="_blank"
                    rel="noreferer"
                    className="text-gray-700 underline"
                  >
                    @avinashj1
                  </a>
                </div>
                <div className="flex">
                  <span className="text-gray-500">GitHub</span>
                  <hr className="w-full mt-3 mx-4 border-gray-300" />
                  <a
                    href="https://github.com/TheCurryMan"
                    target="_blank"
                    rel="noreferer"
                    className="text-gray-700 underline"
                  >
                    @TheCurryMan
                  </a>
                </div>
                <div className="flex">
                  <span className="text-gray-500">Email</span>
                  <hr className="w-full mt-3 mx-4 border-gray-300" />
                  <a
                    href="mailto:avinashj@berkeley.edu"
                    target="_blank"
                    rel="noreferer"
                    className="text-gray-700 underline"
                  >
                    avinashj@berkeley.edu
                  </a>
                </div>
              </div>
              <h4 className="my-4 font-normal text-xs text-gray-500">
                Last updated: Sep 6th, 2023
              </h4>
            </div>
          </div>
          <div className="max-w-2xl mx-auto p-4 mb-10">
            <article className="prose prose-pre:bg-gray-100 prose-pre:text-gray-700 prose-h1:text-2xl prose-h1:font-normal prose-h1:font-serif prose-h2:text-xl prose-h2:font-normal prose-h2:font-serif prose-h3:font-normal prose-h3:font-serif prose-h3:text-lg">
              <h1 className="mb-1">Readings</h1>
              <div className="text-sm text-gray-500 mb-6">
                Blue: highly recommend
              </div>
              <div className="flex flex-col-reverse">
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  Three Body Problem
                </ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  Exhalations
                </ul>
                <ul className="list-item list-inside m-0">Ticket Masters</ul>
                <ul className="list-item list-inside m-0">Range</ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  Shoe Dog
                </ul>
                <ul className="list-item list-inside m-0">1984</ul>
                <ul className="list-item list-inside m-0">
                  The Secret History of Food
                </ul>
                <ul className="list-item list-inside m-0">The Alchemist</ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  Born a Crime
                </ul>
                <ul className="list-item list-inside m-0">
                  Old Man and the Sea
                </ul>
                <ul className="list-item list-inside m-0">The Two Cultures</ul>
                <ul className="list-item list-inside m-0">
                  The Sun Also Rises
                </ul>
                <ul className="list-item list-inside m-0">
                  Hitchhiker&apos;s Guide to the Galaxy
                </ul>
                <ul className="list-item list-inside m-0">
                  California Burning
                </ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  Eat a Peach
                </ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  Myth of Sisyphus
                </ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  The End of the World is Just the Beginning
                </ul>
                <ul className="list-item list-inside m-0">The Stranger</ul>
                <ul className="list-item list-inside m-0">The Dream Machine</ul>
                <ul className="list-item list-inside m-0 ">Tao of Pooh</ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  Brave New World
                </ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  The Biggest Bluff
                </ul>
                <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                  Crime and Punishment
                </ul>
              </div>
              <hr className="my-6" />
              <h1 className="mb-1">Past Experience</h1>
              <div className="text-sm text-gray-500 mb-6">
                Eat. Code. <s>Sleep.</s> Repeat.
              </div>
              <div className="flex flex-col gap-4 leading-6">
                <ExperienceMini
                  companyName="Cardinal"
                  role="co-founder · NFT infrastucture on Solana"
                  stats="6m+ transactions, 40k mau"
                  link="https://www.cardinal.so/"
                />
                <ExperienceMini
                  companyName="Blend"
                  role="PM · innovation research in homebuying journey"
                />
                <ExperienceMini
                  companyName="TigerTalk"
                  role="co-founder · AI communication coaching platform"
                  stats="30k beta revenue, 2.5k speeches analyzed"
                  link="https://www.tigertalk.io/"
                />
                <ExperienceMini
                  companyName="Cal Hacks"
                  role="director · led world's largest collegiate hackathon"
                  link="https://www.calhacks.io/"
                />
                <ExperienceMini
                  companyName="Amazon"
                  role="SWE · backend algos for the ads team"
                />
                <ExperienceMini
                  companyName="Apple"
                  role="SWE · iOS features for Apple News"
                  stats="champion of the ping pong table"
                />
              </div>
              <hr className="my-6" />
              <h1 className="mb-1">Teaching</h1>
              <div className="text-sm text-gray-500 mb-6">
                &quot;Hey guys, Avi here. Welcome back!&quot;
              </div>
              <div className="flex flex-col gap-4 leading-6">
                <ExperienceMini
                  companyName="TheCodex"
                  role="co-founder · programming courses and videos"
                  stats="1m+ students, 70k subscribers, 300 hours of videos"
                  link="https://www.udemy.com/user/avinashjain5/"
                />
                <ExperienceMini
                  companyName="CS 170"
                  role="ugsi · taught algorithms, led discussions, made videos"
                />
                <ExperienceMini
                  companyName="Cubstart"
                  role="instructor · iOS and web curriculum for beginners"
                />
              </div>
              <hr className="my-6" />
              <h1 className="mb-1">Projects</h1>
              <div className="text-sm text-gray-500 mb-2">
                Code. Build. Hack. It&apos;s time to hack.
              </div>
              <div>
                {allProjects.map((project) => (
                  <div key={project.title} className="inline-block">
                    <div className="flex">
                      <a
                        href={project.links[0].link}
                        target="_blank"
                        rel="noreferer"
                      >
                        <img
                          alt={project.title}
                          className="w-20 h-20 mr-4 mb-0 rounded-md"
                          src={project.logo}
                        ></img>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="my-6" />
              <h1 className="mb-1">Running</h1>
              <div className="text-sm text-gray-500 mb-6">
                2023 mileage: 330.6 mi ·{" "}
                <span className="text-[#d4af37] font-semibold">
                  half marathon
                </span>{" "}
                pr: 1:37:35
              </div>
              <div className="bg-gray-100 p-4 rounded-xl flex flex-col gap-2">
                <Calendar
                  values={runningValues}
                  until={until}
                  weekNames={weekNames}
                  monthNames={monthNames}
                  weekLabelAttributes={undefined}
                  monthLabelAttributes={undefined}
                  panelAttributes={undefined}
                  panelColors={panelColors}
                />
              </div>
              <hr className="my-6" />
              <h1 className="mb-1">Lifting</h1>
              <div className="text-sm text-gray-500 mb-6">
                75 hard completed · 1000 lb club progress: 79%
              </div>
              <div className="bg-gray-100 p-4 rounded-xl flex flex-col gap-2">
                <Calendar
                  values={workoutValues}
                  until={until}
                  weekNames={weekNames}
                  monthNames={monthNames}
                  weekLabelAttributes={undefined}
                  monthLabelAttributes={undefined}
                  panelAttributes={undefined}
                  panelColors={panelColors}
                />
              </div>
              <hr className="my-6" />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
