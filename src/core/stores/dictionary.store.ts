import {
  isEmpty,
  makeAutoObservable,
  makePersistable,
  runInAction,
} from '~/modules';
import { storage } from '~/utils';

import { dictionary } from './dictionaryArray';
import { TreeNode } from './treeNode';

import { RootStore } from '.';

export type EntryType = { term: string; meaning: string };

export default class DictionaryStore {
  rootStore: RootStore;

  entries: EntryType[] = dictionary;

  root: TreeNode | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'DictionaryStore',
      storage,
      properties: ['entries'],
    });

    this.entries.forEach((entry) => this.insert(entry));
  }

  private normalizeString(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  private insert(entry: EntryType): void {
    const newNode = new TreeNode(entry);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode, newNode: TreeNode): void {
    const normalizedTerm = this.normalizeString(newNode.entry.term);
    const normalizedNodeTerm = this.normalizeString(node.entry.term);

    if (normalizedTerm < normalizedNodeTerm) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  addEntry = (entry: EntryType): void => {
    runInAction(() => {
      this.entries.push(entry);
      this.insert(entry);
    });
  };

  binarySearch = (term: string): EntryType[] => {
    if (isEmpty(term)) return this.entries;

    const normalizedTerm = this.normalizeString(term);
    const result = this.searchNode(this.root, normalizedTerm);

    return result ? [result.entry] : [];
  };

  private searchNode(node: TreeNode | null, term: string): TreeNode | null {
    if (node === null) {
      return null;
    }

    const normalizedNodeTerm = this.normalizeString(node.entry.term);

    if (term === normalizedNodeTerm) {
      return node;
    }
    if (term < normalizedNodeTerm) {
      return this.searchNode(node.left, term);
    }
    return this.searchNode(node.right, term);
  }

  removeEntry = (term: string): EntryType[] => {
    runInAction(() => {
      const normalizedTerm = this.normalizeString(term);
      this.root = this.removeNode(this.root, normalizedTerm);
      this.entries = this.entries.filter(
        (entry) => this.normalizeString(entry.term) !== normalizedTerm,
      );
    });

    return this.entries;
  };

  private removeNode(node: TreeNode | null, term: string): TreeNode | null {
    if (node === null) {
      return null;
    }

    const normalizedNodeTerm = this.normalizeString(node.entry.term);

    if (term < normalizedNodeTerm) {
      node.left = this.removeNode(node.left, term);
      return node;
    }
    if (term > normalizedNodeTerm) {
      node.right = this.removeNode(node.right, term);
      return node;
    }

    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }

    const minNode = this.findMinNode(node.right);
    node.entry = minNode.entry;

    node.right = this.removeNode(
      node.right,
      this.normalizeString(minNode.entry.term),
    );
    return node;
  }

  private findMinNode(node: TreeNode): TreeNode {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  preOrderTraversal = (): EntryType[] => {
    const result: EntryType[] = [];
    this.preOrder(this.root, result);
    return result;
  };

  private preOrder(node: TreeNode | null, result: EntryType[]): void {
    if (node !== null) {
      result.push(node.entry);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  postOrderTraversal = (): EntryType[] => {
    const result: EntryType[] = [];
    this.postOrder(this.root, result);
    return result;
  };

  private postOrder(node: TreeNode | null, result: EntryType[]): void {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.entry);
    }
  }
}
