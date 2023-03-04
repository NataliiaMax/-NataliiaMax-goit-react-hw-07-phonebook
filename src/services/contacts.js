import axios from "axios";

const contactsInstance = axios.create({
  baseURL: 'https://63fdf859cd13ced3d7c386d5.mockapi.io/api/n1/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};