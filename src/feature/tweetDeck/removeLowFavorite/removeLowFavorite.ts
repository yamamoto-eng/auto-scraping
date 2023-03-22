export const removeLowFavorite = () => {
  const articleElList: NodeListOf<HTMLDivElement | HTMLElement> =
    document.querySelectorAll("article")

  Array.from(articleElList).forEach((el) => {
    const favoriteEl: HTMLDivElement = el.querySelector(
      ".icon-favorite-toggle.like-count"
    )

    if (favoriteNumber(favoriteEl.innerText) < 500) {
      el.style.display = "none"
    }
  })
}

const favoriteNumber = (str: string) => {
  const number = parseInt(str)

  if (str.includes("k")) {
    return number * 1000
  }

  if (str === "") {
    return 0
  }

  return number
}
