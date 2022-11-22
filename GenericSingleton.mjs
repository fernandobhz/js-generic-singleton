export const instancesMap = new Map();

export const newGenericSingleton = (factory, ...params) => {
  const key = JSON.stringify({ factory: factory.toString(), params });

  const existingInstance = instancesMap.get(key);

  if (existingInstance) {
    return existingInstance;
  }

  const newInstance = new factory(...params);
  instancesMap.set(key, newInstance);

  return newInstance;
};
