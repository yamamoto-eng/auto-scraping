export const skipAD = () => {
  const skipADEl = document.querySelector(".ad-showing.ad-interrupting")

  const videoEl: HTMLVideoElement = document.querySelector(
    ".video-stream.html5-main-video"
  )

  const adSkipButtonEl: HTMLButtonElement = document.querySelector(
    ".ytp-ad-skip-button"
  )

  if (!skipADEl) return

  if (videoEl) {
    videoEl.currentTime = 600
  }

  if (adSkipButtonEl) {
    adSkipButtonEl.click?.()
  }
}
