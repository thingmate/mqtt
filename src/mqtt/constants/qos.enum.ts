// https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/

export const enum QOS {
  AT_MOST_ONCE = 0,
  AT_LEAST_ONCE = 1,
  EXACTLY_ONCE = 2,
}
