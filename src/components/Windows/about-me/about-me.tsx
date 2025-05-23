import profile from '@assets/images/profile.jpg'
import { H2 } from '@components/texts/h2'
import { RegularText } from '@components/texts/regular-text'
import { SmallText } from '@components/texts/small-text'
import { AboutMeExperienceItem } from './about-me-experience-item'
import { AboutMeSkillItem } from './about-me-skill-item'
import { education, experience, skills } from './data'

export const AboutMe: React.FC = () => {
  return (
    <div className="h-full">
      <div className="flex m-auto flex-col w-[calc(100%+2px)] relative -left-px h-full max-w-200 border-x border-divider overflow-y-auto scrollbar-hidden">
        <div className="flex border-b w-full border-divider gap-4">
          <img
            src={profile}
            alt="profile"
            className="w-36 h-36 border-r border-divider saturate-0 contrast-125 transition-all duration-300 hover:saturate-100 hover:contrast-100"
          />
          <div className="flex flex-col gap-2 justify-center">
            <RegularText>Artur Alcoverro Pastó</RegularText>
            {/* <H2>Artur Alcoverro Pastó</H2> */}
            <RegularText>Barcelona, Spain</RegularText>
            <RegularText>+34 606684412</RegularText>
            <RegularText>artur.bcn1998@gmail.com</RegularText>
          </div>
        </div>
        <div className="flex border-b w-full border-divider">
          <SmallText secondary className="p-4">
            Frontend developer with +4 years of experience with a lot of desire to continue growing in this field of
            development. With notions and a lot of interest in UX/UI. I have critical capacity, attention to detail and
            initiatzive and I always seek to implement a clean and maintainable code.
          </SmallText>
        </div>
        <div className="flex  w-full border-b border-divider flex-col p-4 gap-4 relative">
          <H2 className="pl-[113px]">Experience</H2>
          <div className="absolute w-px h-full bg-divider top-0 left-30"></div>
          <div className="flex flex-col gap-6 ">
            {experience.map((item, index) => (
              <AboutMeExperienceItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 border-b border-divider">
          <H2>Skills</H2>
          {skills.map((item, index) => (
            <AboutMeSkillItem key={index} {...item} />
          ))}
        </div>
        <div className="flex w-full flex-col p-4 gap-4 relative">
          <H2 className="pl-[113px]">Education</H2>
          <div className="absolute w-px h-full bg-divider top-0 left-30"></div>
          <div className="flex flex-col gap-6 ">
            {education.map((item, index) => (
              <AboutMeExperienceItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
