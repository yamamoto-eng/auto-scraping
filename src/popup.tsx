import { useStorage } from "@plasmohq/storage/hook"

function popup() {
  const [_, setIsTweetDeckClicked] = useStorage(
    "isTweetDeckClicked",
    () => false
  )

  const handleTweetDeckClick = async () => {
    await setIsTweetDeckClicked(true)
    await setIsTweetDeckClicked(false)
  }

  return (
    <div>
      <button onClick={handleTweetDeckClick}>tweetdeck</button>
    </div>
  )
}

export default popup
