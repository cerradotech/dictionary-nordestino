import { EntryType } from './dictionary.store';

export class TreeNode {
  entry: EntryType;

  left: TreeNode | null = null;

  right: TreeNode | null = null;

  constructor(entry: EntryType) {
    this.entry = entry;
  }
}
