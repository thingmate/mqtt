// https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/

export function topicPatternToRexExpPattern(
  topicPattern: string,
): string {
  return '^'
    + topicPattern
      .replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
      .replace(/(^|\\\/)\\\+($|\\\/)/g, (_, start: string, end: string) => {
        return `${start}([^\\/]+)${end}`;
      })
      .replace(/(^|\/)#$/g, (_, start: string) => {
        return `${start}(.+)`;
      })
    + '$'
    ;
}
