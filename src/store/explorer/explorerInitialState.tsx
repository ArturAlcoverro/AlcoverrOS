import { WindowFactory } from './windowsTypes'
import type { WindowsState } from './windowsTypes'

const about = WindowFactory({
  id: 'about',
  name: 'About',
  title: 'About me',
  url: '/about',
  icon: 'user',
  minSize: { height: 400, width: 400 },
})

const work = WindowFactory({
  id: 'work',
  name: 'Work',
  title: 'My Work',
  url: '/work',
  icon: 'folder',
})

const contact = WindowFactory({
  id: 'contact',
  name: 'Contact',
  title: 'Contact me',
  url: '/contact',
  icon: 'mail',
})

const explorer = WindowFactory({
  id: 'explorer',
  name: 'File explorer',
  title: 'File explorer',
  url: '/explorer',
  icon: 'folder',
})

const initialState: WindowsState = {
  about,
  work,
  contact,
  explorer,
}

export default initialState
