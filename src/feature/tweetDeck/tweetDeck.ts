import { removeLowFavorite } from "./removeLowFavorite/removeLowFavorite"

export const tweetDeck = () => {
  if (location.hostname !== "tweetdeck.twitter.com") return

  removeLowFavorite()
}
