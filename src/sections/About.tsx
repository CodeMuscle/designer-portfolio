import Image from "next/image";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import WebflowIcon from "@/assets/icons/webflow.svg";
import GitIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "React Native",
    iconType: ReactIcon,
  },
  {
    title: "NextJS",
    iconType: NextIcon,
  },
  {
    title: "Webflow",
    iconType: WebflowIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Fitness",
    emoji: "🏋🏻‍♀️",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
  {
    title: "Sketching",
    emoji: "🎨🖌️",
  },
  {
    title: "Trading",
    emoji: "📊",
  },
  {
    title: "Music",
    emoji: "🎶",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96 container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me!"
      />

      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title} className="">
                {/* <span>{item.icon}</span> */}
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond Code</h3>
            <p>Explore my hobbies and interests</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileMemoji} alt="smile-memoji" />
        </Card>
      </div>
    </div>
  );
};
