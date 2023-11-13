import { MenuActionProps } from './MenuAction'
import { MenuSection } from './MenuSection'

export const sections: MenuSection[] = [
  {
    title: 'About me',
    items: [
      {
        title: 'About',
        icon: 'user',
        type: 'window',
        data: {
          window: 'about',
        },
      },
    ],
  },
  {
    title: 'My works',
    items: [
      {
        title: 'CleaNotes',
        icon: 'note',
        type: 'window',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Riddle',
        icon: 'puzzle',
        type: 'window',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Jordi Barenys Haya',
        icon: 'jordiBarenys',
        type: 'window',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Artio',
        icon: 'cat',
        type: 'window',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Ana Llimona',
        icon: 'lemon',
        type: 'window',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Master Clicker',
        icon: 'click',
        type: 'window',
        data: {
          window: 'about',
        },
      },
      {
        title: 'HOTSup',
        icon: 'soup',
        type: 'window',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Cooked Fig Pattern',
        icon: 'soup',
        type: 'window',
        data: {
          window: 'about',
        },
      },
    ],
  },
  {
    title: 'Contact',
    items: [
      {
        title: 'Linkedin',
        icon: 'linkedin',
        type: 'link',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Github',
        icon: 'github',
        type: 'link',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Twitter',
        icon: 'twitter',
        type: 'link',
        data: {
          window: 'about',
        },
      },
      {
        title: 'Mail',
        icon: 'mail',
        type: 'link',
        data: {
          window: 'about',
        },
      },
    ],
  },
]

export const actions: MenuActionProps[] = [
  {
    icon: 'settings',
    action: () => console.log('settings'),
  },
  {
    icon: 'information',
    action: () => console.log('information'),
  },
  {
    icon: 'powerOff',
    action: () => console.log('powerOff'),
  },
]
