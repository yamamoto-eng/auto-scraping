export const removeLowFavorite = () => {
  const articleElList: NodeListOf<HTMLDivElement | HTMLElement> =
    document.querySelectorAll("article")

  Array.from(articleElList).forEach((el) => {
    const favoriteEl: HTMLDivElement = el.querySelector(
      "div[data-testid='like']"
    )

    if (!favoriteEl) return
    if (favoriteNumber(favoriteEl.innerText) < 1000) {
      el.style.display = "none"
    }
  })
}

const favoriteNumber = (str: string) => {
  const number = parseInt(str.replace(",", ""))

  if (str.includes("k")) {
    return number * 1000
  }

  if (str === "") {
    return 0
  }

  return number
}
