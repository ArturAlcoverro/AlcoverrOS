export interface SkillItemProps {
  title: string
  skills: string[]
}

export interface ExperienceItemProps {
  title: string
  company: string
  description?: string
  startDate: string
  endDate: string
}

export const experience: ExperienceItemProps[] = [
  {
    title: 'Junior Fullstack Developer',
    company: 'Knowify',
    description:
      "I'm working on a construction management software. In this I mainly contribute in the backend with TypeScript, maintaining and updating several services, although I also help in the frontend with Angular when needed.",
    startDate: '2022',
    endDate: 'Now',
  },
  {
    title: 'Software Developer',
    company: 'LaSalleURL',
    description:
      'I participated directly in the HOTsup research project, co-funded by the ERASMUS+ program. In this project I developed a software to detect the engagement of students in classes taught by videoconference. To do so, I implemented a Python server to calculate the level of participation through computer vision and AI, and a web client made with React.js to visualize the captured data.',
    startDate: '2021',
    endDate: '2022',
  },
  {
    title: 'Junior Developer',
    company: 'Telematel',
    description:
      'I contributed in the development of GO!MANAGE software, an ERP specialized in the construction sector. I was in charge of software maintenance, testing and bug fixing and implementation of new functionalities.',
    startDate: '2018',
    endDate: '2020',
  },
]

export const education: ExperienceItemProps[] = [
  {
    title: 'Master degree in Software Development & Architecture',
    company: 'La Salle URL',
    startDate: '2022',
    endDate: '2023',
  },
  {
    title: 'Degree in Software Application Tecniques',
    company: 'La Salle URL',
    startDate: '2019',
    endDate: '2022',
  },
  {
    title: 'HNC of Web Development',
    company: 'CEP',
    startDate: '2016',
    endDate: '2019',
  },
  {
    title: 'HNC of Multiplatform Development',
    company: 'CEP',
    startDate: '2016',
    endDate: '2018',
  },
]

export const skills: SkillItemProps[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'C', 'Dart'],
  },
  {
    title: 'Tecnologies',
    skills: ['React', 'Next.js', 'Tailwind', 'React Query', 'Jest', 'Playwright', 'Sass', 'Flutter', 'Android SDK'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MongoDB'],
  },
  {
    title: 'Other tools',
    skills: ['Hexagonal Architecture', 'Docker', 'AWS', 'Postman', 'Figma'],
  },
]
