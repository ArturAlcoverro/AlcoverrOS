type BaseWindowId = 'about' | 'work' | 'contact' | 'explorer'
type ProjectWindowId = 'project'

export type WindowId = BaseWindowId | ProjectWindowId

interface BaseWindowKey {
  id: BaseWindowId
}

interface ProjectWindowKey {
  id: ProjectWindowId
  data: string
}

export type WindowKey = BaseWindowKey | ProjectWindowKey
