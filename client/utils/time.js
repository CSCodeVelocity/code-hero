export const formatTime = milliseconds => {
  const min = new Date(milliseconds).getMinutes();
  const sec = new Date(milliseconds).getSeconds();
  const ms = new Date(milliseconds).getMilliseconds();
  return `${min}:${sec}.${ms / 100}`;
};
