import ContactForm from '../components/AddForm/AddForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import style from './App.module.css';

export default function App() {
  return (
    <div className={style.container}>
      <h1 className={style.titleBook}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
