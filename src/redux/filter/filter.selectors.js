import { getContacts } from "redux/contacts/contactsSelectors";

export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);

  const normalizedFilter = filter.toLowerCase();
  return (
    contacts &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  );
};
