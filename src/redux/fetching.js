import axios from 'axios';

export const getAllContacts = async () => {
  const { data } = await axios.get(
    'https://653ff24d45bedb25bfc17d6f.mockapi.io/contacts/'
  );
  return data;
};

export const addContact = async value => {
  const { data } = await axios.post(
    'https://653ff24d45bedb25bfc17d6f.mockapi.io/contacts/',
    value
  );

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://653ff24d45bedb25bfc17d6f.mockapi.io/contacts/${id}`
  );
  return data;
};