export const formatTime = (time: string): string => {
  const arrStr = new Date(Date.parse(`2020-01-01T${time}`)).toLocaleTimeString('en-US').split(``);
  arrStr.splice(arrStr.length - 6, 3);
  return arrStr.join(``);
}

export const formatWaitingTime = (startTime: string, time: number): string => {
  const startHours = startTime.slice(0, -3);
  const deltaHours = new Date(time).getHours() - +startHours;
  const hours = deltaHours < 0 ? 0 : deltaHours;
  const minutes = new Date(time).getMinutes();
  const seconds = new Date(time).getSeconds();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};