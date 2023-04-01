import { FC, useEffect } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { tweetDeck } from "~feature/tweetDeck"
import { youtube } from "~feature/youtube"

youtube()

const popupTracking = () => {
  const [isTweetDeckClicked] = useStorage("isTweetDeckClicked")

  useEffect(() => {
    if (isTweetDeckClicked) {
      tweetDeck()
    }
  }, [isTweetDeckClicked])
}

export default popupTracking
