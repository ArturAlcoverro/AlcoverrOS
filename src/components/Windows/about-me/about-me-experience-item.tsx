import { RegularText } from '@components/texts/regular-text'
import { SmallText } from '@components/texts/small-text'
import { ExperienceItemProps } from './data'

export const AboutMeExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  description,
  startDate,
  endDate
}) => {
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
