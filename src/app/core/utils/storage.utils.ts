
export class StorageClient {
  type: Storage;
  constructor(type: Storage) {
    this.type = type;
  }

  get(key: string) {
    return this.type.getItem(key);
  }

  set(key: string, value: string) {
    this.type.setItem(key, value);
  }

  remove(key: string) {
    this.type.removeItem(key);
  }

  clear() {
    this.type.clear();
  }
}
