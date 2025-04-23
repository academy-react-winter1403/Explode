export default function getCurrentTimeFA() {
  const now = new Date();
  return now
    .toLocaleTimeString('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace('،', '');
}
