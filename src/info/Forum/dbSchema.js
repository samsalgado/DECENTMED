export const dbConfig = {
  name: 'my-remedy-forum',
  version: 1,
  objectStores: [
    {
      store: 'remedies',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
      ],
    },
  ],
};
