export const removeSidebarAD = () => {
  const sidebarADEl: HTMLDivElement = document.querySelector(
    'ytd-engagement-panel-section-list-renderer[class*="style-scope ytd-watch-flexy"]'
  )

  if (sidebarADEl) {
    sidebarADEl.style.display = "none"
  }
}
