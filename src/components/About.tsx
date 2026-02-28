import Section from './Section';

export default function About() {
  const bio = "I'm a passionate full stack developer with a knack for creating beautiful, intuitive, and performant user experiences. With a background in design, I bridge the gap between aesthetics and functionality, crafting digital products that not only look good but feel great to use. My journey in tech is driven by a love for problem-solving and a desire to build things that matter.";

  return (
    <Section id="about" title="ABOUT ME" subtitle="A LITTLE BIT ABOUT MYSELF">
      <div className="w-full max-w-4xl text-left">
        <p className="text-lg text-muted-foreground">{bio}</p>
      </div>
    </Section>
  );
}
