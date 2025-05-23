import { SmallText } from '@components/texts/small-text'
import { SkillItemProps } from './data'

export const AboutMeSkillItem: React.FC<SkillItemProps> = ({ title, skills }) => {
  return (
    <SmallText>
      <span className="text-font-secondary">{title}: </span>
      {skills.map((skill, i: number) => (i === skills.length - 1 ? `${skill}` : `${skill}, `))}
    </SmallText>
  )
}
