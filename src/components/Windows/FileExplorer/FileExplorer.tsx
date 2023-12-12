import { IconFactory } from '@components/IconFactory/IconFactory'

export const FileExplorer: React.FC<FileExplorerProps> = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-grow-0 border-b border-divider">
        <div className="flex w-full">
          <div className="flex-grow-0 flex p-2 gap-2 border-r border-divider">
            <button>
              <IconFactory icon="arrowLeft" size={32} className="fill-font hover:fill-accent" />
            </button>
            <button>
              <IconFactory icon="arrowRight" size={32} className="fill-font hover:fill-accent" />
            </button>
          </div>
          <div className="flex-grow"></div>
          <div className="flex-grow-0 p-2 flex border-l border-divider">
            <button>
              <IconFactory icon="grid" size={32} className="stroke-font hover:stroke-accent" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-grow">
        <div className="flex-grow-0"></div>
        <div className="flex flex-grow"></div>
      </div>
    </div>
  )
}

interface FileExplorerProps {}

export default FileExplorer
