import { Folder, File } from '@store/explorer/explorerTypes'

export const useExplorer = () => {
  function _getItem(pathArray: string[], folder: Folder) {
    if (pathArray.length === 0) return folder
    const item = folder.items.find((item) => item.path === pathArray[0])
    if (pathArray.length === 1) return item
    if (pathArray.length === 2) {
      if (item instanceof Folder) {
        pathArray.shift()
        return _getItem(pathArray, item)
      }
    }
    return null
  }

  function getItem(path: string) {
    const pathArray = path.split('/').filter((p) => p !== '')
    return _getItem(pathArray, root)
  }

  function _getFavorites(arr: Array<Folder>, folder: Folder) {
    if (folder.favorite) arr.push(folder)
     folder.items.forEach((item) => {
      if (item instanceof Folder) {
        _getFavorites(arr, item)
      }
    })
    return arr
  }

  function getFavorites() {
    return _getFavorites([], root)
  }

  return { getItem, getFavorites }
}

const root = Folder.create({
  name: 'root',
  icon: 'folder',
  path: '/',
})

root.addFolder(
  Folder.create({
    name: 'Desktop',
    icon: 'folder',
    path: '/desktop',
    favorite: true,
  })
    .addFile(
      File.create({
        name: 'Contact',
        icon: 'mail',
        path: '/contact',
        window: { id: 'contact' },
      }),
    )
    .addFile(
      File.create({
        name: 'About',
        icon: 'user',
        path: '/resume',
        window: { id: 'about' },
      }),
    )
    .addFolder(
      Folder.create({
        name: 'Work',
        icon: 'folder',
        path: '/work',
      }).addFile(
        File.create({
          name: 'CleaNotes',
          icon: 'note',
          path: '/cleanotes',
          window: { id: 'project', data: 'cleanotes' },
        }),
      ),
    )
    .addFolder(
      Folder.create({
        name: 'Games',
        icon: 'controller',
        path: '/games',
      }),
    ),
)
