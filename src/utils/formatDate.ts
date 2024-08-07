const MINUTE = 1000 * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 28;
const YEAR = DAY * 365;

export const salesListDisplayTime = (time: string) => {
  const diff = Number(new Date()) - Number(new Date(time));

  const times = [
    [YEAR, '년'],
    [MONTH, '개월'],
    [DAY, '일'],
    [HOUR, '시간'],
    [MINUTE, '분'],
  ].map((item) => ({ milliSeconds: Number(item[0]), timeUnit: item[1] }));

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.timeUnit} 전`;
    }
  }

  return time.split(' ')[0];
};
