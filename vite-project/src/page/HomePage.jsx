import React from 'react';
import ContactList from '../components/ContactList';
import { deleteContact } from '../utils/api';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { getContacts } from '../utils/api';
import LocaleContext, { LocaleConsumer } from '../context/LocaleContext';

function HomePage() {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const [ contacts, setContacts ] = React.useState([]);
  const [ keyword, setKeyword ] = React.useState(() => { 
    return searchParams.get(keyword) || '' 
  })
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getContacts().then(({ data }) => {
      setContacts(data);
    })
  }, [])

  async function onDeleteHandler(id) {
    await deleteContact(id);
  
    // Perbarui state kontak dari hasil pengambilan data
    const { data } = await getContacts();
    setContacts(data);
  }
  
  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }
  

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(keyword.toLocaleLowerCase());
  })

  return (
    <section>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h2>{locale === 'id' ? 'Daftar Kontak' : 'Contacts List'}</h2>
      <ContactList contacts={filteredContacts} onDelete={onDeleteHandler} />
    </section>
  )
}

export default HomePage;