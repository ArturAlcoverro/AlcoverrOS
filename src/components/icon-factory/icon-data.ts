import { type FC, type LazyExoticComponent, lazy } from 'react'

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
    24: lazy(() => import('@assets/icons/ArrowLeft/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/ArrowLeft/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/ArrowLeft/48.svg?react' as const))
  },
  arrowRight: {
    24: lazy(() => import('@assets/icons/ArrowRight/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/ArrowRight/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/ArrowRight/48.svg?react' as const))
  },
  bomb: {
    24: lazy(() => import('@assets/icons/Bomb/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Bomb/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Bomb/48.svg?react' as const))
  },
  cat: {
    24: lazy(() => import('@assets/icons/Cat/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Cat/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Cat/48.svg?react' as const))
  },
  chevronLeft: {
    24: lazy(() => import('@assets/icons/ChevronLeft/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/ChevronLeft/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/ChevronLeft/48.svg?react' as const))
  },
  chevronRight: {
    24: lazy(() => import('@assets/icons/ChevronRight/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/ChevronRight/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/ChevronRight/48.svg?react' as const))
  },
  click: {
    24: lazy(() => import('@assets/icons/Click/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Click/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Click/48.svg?react' as const))
  },
  close: {
    24: lazy(() => import('@assets/icons/Close/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Close/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Close/48.svg?react' as const))
  },
  console: {
    24: lazy(() => import('@assets/icons/Console/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Console/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Console/48.svg?react' as const))
  },
  controller: {
    24: lazy(() => import('@assets/icons/Controller/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Controller/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Controller/48.svg?react' as const))
  },
  folder: {
    24: lazy(() => import('@assets/icons/Folder/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Folder/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Folder/48.svg?react' as const))
  },
  github: {
    24: lazy(() => import('@assets/icons/Github/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Github/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Github/48.svg?react' as const))
  },
  grid: {
    24: lazy(() => import('@assets/icons/Grid/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Grid/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Grid/48.svg?react' as const))
  },
  information: {
    24: lazy(() => import('@assets/icons/Information/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Information/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Information/48.svg?react' as const))
  },
  instagram: {
    24: lazy(() => import('@assets/icons/Instagram/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Instagram/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Instagram/48.svg?react' as const))
  },
  jordiBarenys: {
    24: lazy(() => import('@assets/icons/JordiBarenys/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/JordiBarenys/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/JordiBarenys/48.svg?react' as const))
  },
  lemon: {
    24: lazy(() => import('@assets/icons/Lemon/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Lemon/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Lemon/48.svg?react' as const))
  },
  linkedin: {
    24: lazy(() => import('@assets/icons/Linkedin/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Linkedin/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Linkedin/48.svg?react' as const))
  },
  list: {
    24: lazy(() => import('@assets/icons/List/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/List/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/List/48.svg?react' as const))
  },
  logo: {
    24: lazy(() => import('@assets/icons/Logo.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Logo.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Logo.svg?react' as const))
  },
  longArrowLeft: {
    24: lazy(() => import('@assets/icons/LongArrowLeft/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/LongArrowLeft/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/LongArrowLeft/48.svg?react' as const))
  },
  longArrowRight: {
    24: lazy(() => import('@assets/icons/LongArrowRight/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/LongArrowRight/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/LongArrowRight/48.svg?react' as const))
  },
  mail: {
    24: lazy(() => import('@assets/icons/Mail/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Mail/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Mail/48.svg?react' as const))
  },
  mine: {
    24: lazy(() => import('@assets/icons/Mine/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Mine/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Mine/48.svg?react' as const))
  },
  note: {
    24: lazy(() => import('@assets/icons/Note/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Note/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Note/48.svg?react' as const))
  },
  powerOff: {
    24: lazy(() => import('@assets/icons/PowerOff/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/PowerOff/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/PowerOff/48.svg?react' as const))
  },
  puzzle: {
    24: lazy(() => import('@assets/icons/Puzzle/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Puzzle/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Puzzle/48.svg?react' as const))
  },
  settings: {
    24: lazy(() => import('@assets/icons/Settings/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Settings/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Settings/48.svg?react' as const))
  },
  soup: {
    24: lazy(() => import('@assets/icons/Soup/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Soup/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Soup/48.svg?react' as const))
  },
  terminal: {
    24: lazy(() => import('@assets/icons/Terminal/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Terminal/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Terminal/48.svg?react' as const))
  },
  twitter: {
    24: lazy(() => import('@assets/icons/Twitter/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/Twitter/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/Twitter/48.svg?react' as const))
  },
  user: {
    24: lazy(() => import('@assets/icons/User/24.svg?react' as const)),
    32: lazy(() => import('@assets/icons/User/32.svg?react' as const)),
    48: lazy(() => import('@assets/icons/User/48.svg?react' as const))
  }
}
