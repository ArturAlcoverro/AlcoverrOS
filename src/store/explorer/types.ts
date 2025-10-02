import type { IconId } from '@components/icon-factory/icon-data'
import type { WindowKey } from '@store/windows/types'

interface IExplorerItem {
  type: 'file' | 'folder'
  name: string
  icon: IconId
  path: string
  hidden?: boolean
}

class ExplorerItem {
  type: 'file' | 'folder'
  name: string
  icon: IconId
  path: string
  hidden: boolean

  constructor({ type, name, icon, path, hidden }: IExplorerItem) {
    this.type = type
    this.name = name
    this.icon = icon
    this.path = path
    this.hidden = hidden || false
  }
}

interface IFile extends IExplorerItem {
  type: 'file'
  window: WindowKey
}

export class File extends ExplorerItem {
  window: WindowKey

  private constructor({ type, name, icon, path, window, hidden }: IFile) {
    super({ type, name, icon, path, hidden })
    this.window = window
  }

  static create({ name, icon, path, window, hidden }: Omit<IFile, 'type'>) {
    hidden = hidden || false
    return new File({ type: 'file', name, icon, path, window, hidden })
  }
}

interface IFolder extends IExplorerItem {
  type: 'folder'
  items?: Array<File | Folder>
  favorite?: boolean
}

export class Folder extends ExplorerItem {
  items: Array<File | Folder>
  favorite: boolean

  private constructor(folder: IFolder) {
    super(folder)
    this.items = folder.items || []
    this.favorite = folder.favorite || false
  }

  static create({ name, icon, path, items, favorite, hidden }: Omit<IFolder, 'type'>) {
    items = items || []
    favorite = favorite || false
    hidden = hidden || false
    return new Folder({ type: 'folder', name, icon, path, items, favorite, hidden })
  }

  addFolder(folder: Folder) {
    folder.path = folder.path.replace('/', '')
    this.items.push(folder)
    return this
  }

  addFile(file: File) {
    file.path = file.path.replace('/', '')
    this.items.push(file)
    return this
  }
}
