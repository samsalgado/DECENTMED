import  useIndexedDB  from 'use-indexeddb';

export const useRemedies = (dbConfig) => {
  const { add, get, getAll, delete: deleteById } = useIndexedDB(dbConfig);

  const addRemedy = async (newRemedy) => {
    await add('remedies', newRemedy);
  };

  const getRemedy = async (id) => {
    return await get('remedies', id);
  };

  const getAllRemedies = async () => {
    return await getAll('remedies');
  };

  // ... Implement update and delete functions if needed

  return { addRemedy, getRemedy, getAllRemedies, deleteById };
};
