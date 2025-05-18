import { ContactItem, ContactItemProps } from './contact-item'

const items: ContactItemProps[] = [
  {
    url: 'https://www.linkedin.com/in/artur-alcoverro/',
    icon: 'linkedin',
    name: 'LinkedIn',
  },
  {
    url: 'https://twitter.com/ArturAlcoverro',
    icon: 'twitter',
    name: 'Twitter',
  },
  {
    url: 'https://github.com/ArturAlcoverro',
    icon: 'github',
    name: 'GitHub',
  },
  {
    url: 'mailto:artur.bcn1998@gmail.com',
    icon: 'mail',
    name: 'Mail',
  },
]

export const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {items.map((item) => (
        <ContactItem key={item.url} {...item} />
      ))}
    </div>
  )
}

interface ContactProps {}

export default Contact
