import idioms from './idiom.json';
import { Trie } from 'tiny-trie-ts';

const trie = new Trie();
idioms.forEach((idiom: string) => {
  trie.insert(idiom);
});

export function idiomsOfInput(input: string): string[] {
  return trie.keysWithPrefix(input) as string[];
}
