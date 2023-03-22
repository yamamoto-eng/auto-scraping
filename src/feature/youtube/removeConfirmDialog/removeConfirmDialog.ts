export const removeConfirmDialog = () => {
  const confirmDialogElList: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(
      'tp-yt-paper-dialog:not([style*="display: none"])'
    )

  const confirmDialogEl = Array.from(confirmDialogElList ?? []).some((ele) =>
    ele.innerText.includes("動画が一時停止")
  )

  const confirmButtonEl: HTMLButtonElement = document
    .querySelector("div#main.style-scope.yt-confirm-dialog-renderer")
    ?.querySelector("yt-button-shape")

  const videoEl: HTMLVideoElement = document.querySelector(
    ".video-stream.html5-main-video"
  )

  if (confirmDialogElList.length === 0) return

  if (confirmDialogEl) {
    confirmButtonEl.click()
    videoEl.play()
  }
}
