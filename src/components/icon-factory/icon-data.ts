import { FC, LazyExoticComponent, lazy } from 'react'

type IconElement = LazyExoticComponent<FC<React.SVGProps<SVGSVGElement> & { title?: string }>>

export type IconSize = 24 | 32 | 48  


export type IconId =
  | 'arrowLeft'
  | 'arrowRight'
  | 'bomb'
  | 'cat'
  | 'chevronLeft'
  | 'chevronRight'
  | 'click'
  | 'close'
  | 'console'
  | 'controller'
  | 'folder'
  | 'github'
  | 'grid'
  | 'information'
  | 'instagram'
  | 'jordiBarenys'
  | 'lemon'
  | 'linkedin'
  | 'list'
  | 'logo'
  | 'longArrowLeft'
  | 'longArrowRight'
  | 'mail'
  | 'mine'
  | 'note'
  | 'powerOff'
  | 'puzzle'
  | 'settings'
  | 'soup'
  | 'terminal'
  | 'twitter'
  | 'user'


export const icons: Record<IconId, Record<IconSize, IconElement>> = {
  arrowLeft: {
    24: lazy(() => import('@assets/icons/ArrowLeft/24.svg?react')),
    32: lazy(() => import('@assets/icons/ArrowLeft/32.svg?react')),
    48: lazy(() => import('@assets/icons/ArrowLeft/48.svg?react')),
  },
  arrowRight: {
    24: lazy(() => import('@assets/icons/ArrowRight/24.svg?react')),
    32: lazy(() => import('@assets/icons/ArrowRight/32.svg?react')),
    48: lazy(() => import('@assets/icons/ArrowRight/48.svg?react')),
  },
  bomb: {
    24: lazy(() => import('@assets/icons/Bomb/24.svg?react')),
    32: lazy(() => import('@assets/icons/Bomb/32.svg?react')),
    48: lazy(() => import('@assets/icons/Bomb/48.svg?react')),
  },
  cat: {
    24: lazy(() => import('@assets/icons/Cat/24.svg?react')),
    32: lazy(() => import('@assets/icons/Cat/32.svg?react')),
    48: lazy(() => import('@assets/icons/Cat/48.svg?react')),
  },
  chevronLeft: {
    24: lazy(() => import('@assets/icons/ChevronLeft/24.svg?react')),
    32: lazy(() => import('@assets/icons/ChevronLeft/32.svg?react')),
    48: lazy(() => import('@assets/icons/ChevronLeft/48.svg?react')),
  },
  chevronRight: {
    24: lazy(() => import('@assets/icons/ChevronRight/24.svg?react')),
    32: lazy(() => import('@assets/icons/ChevronRight/32.svg?react')),
    48: lazy(() => import('@assets/icons/ChevronRight/48.svg?react')),
  },
  click: {
    24: lazy(() => import('@assets/icons/Click/24.svg?react')),
    32: lazy(() => import('@assets/icons/Click/32.svg?react')),
    48: lazy(() => import('@assets/icons/Click/48.svg?react')),
  },
  close: {
    24: lazy(() => import('@assets/icons/Close/24.svg?react')),
    32: lazy(() => import('@assets/icons/Close/32.svg?react')),
    48: lazy(() => import('@assets/icons/Close/48.svg?react')),
  },
  console: {
    24: lazy(() => import('@assets/icons/Console/24.svg?react')),
    32: lazy(() => import('@assets/icons/Console/32.svg?react')),
    48: lazy(() => import('@assets/icons/Console/48.svg?react')),
  },
  controller: {
    24: lazy(() => import('@assets/icons/Controller/24.svg?react')),
    32: lazy(() => import('@assets/icons/Controller/32.svg?react')),
    48: lazy(() => import('@assets/icons/Controller/48.svg?react')),
  },
  folder: {
    24: lazy(() => import('@assets/icons/Folder/24.svg?react')),
    32: lazy(() => import('@assets/icons/Folder/32.svg?react')),
    48: lazy(() => import('@assets/icons/Folder/48.svg?react')),
  },
  github: {
    24: lazy(() => import('@assets/icons/Github/24.svg?react')),
    32: lazy(() => import('@assets/icons/Github/32.svg?react')),
    48: lazy(() => import('@assets/icons/Github/48.svg?react')),
  },
  grid: {
    24: lazy(() => import('@assets/icons/Grid/24.svg?react')),
    32: lazy(() => import('@assets/icons/Grid/32.svg?react')),
    48: lazy(() => import('@assets/icons/Grid/48.svg?react')),
  },
  information: {
    24: lazy(() => import('@assets/icons/Information/24.svg?react')),
    32: lazy(() => import('@assets/icons/Information/32.svg?react')),
    48: lazy(() => import('@assets/icons/Information/48.svg?react')),
  },
  instagram: {
    24: lazy(() => import('@assets/icons/Instagram/24.svg?react')),
    32: lazy(() => import('@assets/icons/Instagram/32.svg?react')),
    48: lazy(() => import('@assets/icons/Instagram/48.svg?react')),
  },
  jordiBarenys: {
    24: lazy(() => import('@assets/icons/JordiBarenys/24.svg?react')),
    32: lazy(() => import('@assets/icons/JordiBarenys/32.svg?react')),
    48: lazy(() => import('@assets/icons/JordiBarenys/48.svg?react')),
  },
  lemon: {
    24: lazy(() => import('@assets/icons/Lemon/24.svg?react')),
    32: lazy(() => import('@assets/icons/Lemon/32.svg?react')),
    48: lazy(() => import('@assets/icons/Lemon/48.svg?react')),
  },
  linkedin: {
    24: lazy(() => import('@assets/icons/Linkedin/24.svg?react')),
    32: lazy(() => import('@assets/icons/Linkedin/32.svg?react')),
    48: lazy(() => import('@assets/icons/Linkedin/48.svg?react')),
  },
  list: {
    24: lazy(() => import('@assets/icons/List/24.svg?react')),
    32: lazy(() => import('@assets/icons/List/32.svg?react')),
    48: lazy(() => import('@assets/icons/List/48.svg?react')),
  },
  logo: {
    24: lazy(() => import('@assets/icons/Logo.svg?react')),
    32: lazy(() => import('@assets/icons/Logo.svg?react')),
    48: lazy(() => import('@assets/icons/Logo.svg?react')),
  },
  longArrowLeft: {
    24: lazy(() => import('@assets/icons/LongArrowLeft/24.svg?react')),
    32: lazy(() => import('@assets/icons/LongArrowLeft/32.svg?react')),
    48: lazy(() => import('@assets/icons/LongArrowLeft/48.svg?react')),
  },
  longArrowRight: {
    24: lazy(() => import('@assets/icons/LongArrowRight/24.svg?react')),
    32: lazy(() => import('@assets/icons/LongArrowRight/32.svg?react')),
    48: lazy(() => import('@assets/icons/LongArrowRight/48.svg?react')),
  },
  mail: {
    24: lazy(() => import('@assets/icons/Mail/24.svg?react')),
    32: lazy(() => import('@assets/icons/Mail/32.svg?react')),
    48: lazy(() => import('@assets/icons/Mail/48.svg?react')),
  },
  mine: {
    24: lazy(() => import('@assets/icons/Mine/24.svg?react')),
    32: lazy(() => import('@assets/icons/Mine/32.svg?react')),
    48: lazy(() => import('@assets/icons/Mine/48.svg?react')),
  },
  note: {
    24: lazy(() => import('@assets/icons/Note/24.svg?react')),
    32: lazy(() => import('@assets/icons/Note/32.svg?react')),
    48: lazy(() => import('@assets/icons/Note/48.svg?react')),
  },
  powerOff: {
    24: lazy(() => import('@assets/icons/PowerOff/24.svg?react')),
    32: lazy(() => import('@assets/icons/PowerOff/32.svg?react')),
    48: lazy(() => import('@assets/icons/PowerOff/48.svg?react')),
  },
  puzzle: {
    24: lazy(() => import('@assets/icons/Puzzle/24.svg?react')),
    32: lazy(() => import('@assets/icons/Puzzle/32.svg?react')),
    48: lazy(() => import('@assets/icons/Puzzle/48.svg?react')),
  },
  settings: {
    24: lazy(() => import('@assets/icons/Settings/24.svg?react')),
    32: lazy(() => import('@assets/icons/Settings/32.svg?react')),
    48: lazy(() => import('@assets/icons/Settings/48.svg?react')),
  },
  soup: {
    24: lazy(() => import('@assets/icons/Soup/24.svg?react')),
    32: lazy(() => import('@assets/icons/Soup/32.svg?react')),
    48: lazy(() => import('@assets/icons/Soup/48.svg?react')),
  },
  terminal: {
    24: lazy(() => import('@assets/icons/Terminal/24.svg?react')),
    32: lazy(() => import('@assets/icons/Terminal/32.svg?react')),
    48: lazy(() => import('@assets/icons/Terminal/48.svg?react')),
  },
  twitter: {
    24: lazy(() => import('@assets/icons/Twitter/24.svg?react')),
    32: lazy(() => import('@assets/icons/Twitter/32.svg?react')),
    48: lazy(() => import('@assets/icons/Twitter/48.svg?react')),
  },
  user: {
    24: lazy(() => import('@assets/icons/User/24.svg?react')),
    32: lazy(() => import('@assets/icons/User/32.svg?react')),
    48: lazy(() => import('@assets/icons/User/48.svg?react')),
  },
}
