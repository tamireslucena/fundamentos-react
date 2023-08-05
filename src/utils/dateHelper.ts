/**
 * makes sure the number converts into a two digits string
 * @param num number to be verified
 * @returns string version of number
 */
export const paddingLeft = (num: number): string => {
  if(num < 10) return "0" + num;
  return String(num);
}


/**
 * receives a date object and formats into a time string
 * @param date date to be formatted
 * @returns formatted time string
 */
export const formatTime = (date: Date): string => {
  return [paddingLeft(date.getHours()), paddingLeft(date.getMinutes()), paddingLeft(date.getSeconds())].join(":");
};