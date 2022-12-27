import ContactForm from "../ContactForm";
import Filter from "../Filter";
import PhonebookList from "../PhonebookList";


export default function ContactsLayout(props) {

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
      />

      <h2>Contacts</h2>

      <Filter
      />

      <PhonebookList
      />
    </>
  )
}