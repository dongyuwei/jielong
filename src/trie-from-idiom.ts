import idioms from './idiom.json';
import {Trie} from 'tiny-trie';

const trie = new Trie();
idioms.forEach((idiom: string) => {
  trie.insert(idiom);
});

export function idiomsOfInput(input: string): string[] {
  const prefixResults = trie.search(input, { prefix: true }) as string[];
  const wildcardResults = trie.search(`*${input}`, { wildcard: '*' }) as string[];

  return prefixResults.concat(wildcardResults);
}