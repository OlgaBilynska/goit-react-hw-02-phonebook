import React from 'react';

import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
    console.log('state', this.state.contacts);
  };

  render() {
    console.log('this.state :>> ', this.state);
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />

        <Contacts contactList={this.state.contacts} />
      </div>
    );
  }
}
