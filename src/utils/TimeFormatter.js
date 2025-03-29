//get second in string and format this second like this 00:00
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  return `${minutes}:${formattedSeconds}`;
}
