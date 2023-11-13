import { IconId } from '@components/IconFactory/IconData'
import { WindowKey } from '@store/windows/windowsTypes'

interface ExplorerItem {
  type: 'file' | 'folder'
  name: string
  icon: IconId
  path: string
  hidden: boolean
}

interface IFile extends ExplorerItem {
  window: WindowKey
  
}

export interface IFolder extends ExplorerItem {
  items: ExplorerItem[]
  favorite: boolean
}


class File implements IFile {
  type
  name: string
  icon: IconId
  path: string
  hidden: boolean

  constructor() {
    this.type = 'file'
    this.name = ''
    this.icon = 'file'
    this.path = ''
    this.hidden = false
  }
  


}

class ExplorerFactory {
  private item: ExplorerItem

  private constructor(item: File) {
    this.item = {
      type: 'file',
      name: '',
      icon: 'file',
      path: '',
      hidden: false,
    }
  }

  public newFile(file: File) {
    return new ExplorerBuilder(new File())
  }

}



