import { SmallText } from '@components/Texts/SmallText'
import { SkillItemProps } from './AboutMeData'

export const SkillItem: React.FC<SkillItemProps> = ({ title, skills }) => {
  return (
    <SmallText>
      <span className="text-fontSecondary">{title}: </span>
      {skills.map((skill, i: number) => (i === skills.length - 1 ? `${skill}` : `${skill}, `))}
    </SmallText>
  )
}


