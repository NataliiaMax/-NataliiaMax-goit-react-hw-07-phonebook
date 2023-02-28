import {
  addContacts,
  deleteContacts,
} from '../../redux/contacts/contactsSlice';
import { addNotification } from './notification.slice';

export const notificationsMiddleware =
  ({ getState, dispatch }) =>
  next =>
  action => {
    if (addContacts.match(action)) {
      next(action);
      dispatch(
        addNotification(`Contact ${action.payload.firstName} was added`)
      );
      return;
    }

    if (deleteContacts.match(action)) {
      const contacts = getState().contacts.contacts;
      const contactToDelete = contacts.find(
        contact => contact.id === action.payload
      );
      dispatch(
        addNotification(`Contact ${contactToDelete.firstName} was deleted`)
      );
    }

    next(action);
  };
