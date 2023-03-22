import { removeConfirmDialog } from "./removeConfirmDialog/removeConfirmDialog"
import { removeSidebarAD } from "./removeSidebarAD/removeSidebarAD"
import { skipAD } from "./skipAD/skipAD"

export const youtube = () => {
  if (location.hostname !== "www.youtube.com") return

  setInterval(() => {
    skipAD()
    removeConfirmDialog()
    removeSidebarAD()
  }, 1000)
}
