import { topicPatternToRexExpPattern } from './topic-pattern-to-rex-exp-pattern';

export function topicPatternToRexExp(
  topicPattern: string,
): RegExp {
  return new RegExp(
    topicPatternToRexExpPattern(topicPattern),
    'g',
  );
}
