import { RegularText } from '@components/Texts/RegularText'
import { SmallText } from '@components/Texts/SmallText'
import { ExperienceItemProps } from './AboutMeData'

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, description, startDate, endDate }) => {
  return (
    <div className="flex gap-[1.125rem]">
      <div className="w-24 flex-grow-0 flex-shrink-0">
        <SmallText secondary className="text-right">
          {startDate} - {endDate}
        </SmallText>
      </div>
      <div className="flex-grow">
        <RegularText>
          {title} <span className="text-fontSecondary">at {company}</span>
        </RegularText>
        {description && (
          <SmallText className="mt-2" secondary>
            {description}
          </SmallText>
        )}
      </div>
    </div>
  )
}
