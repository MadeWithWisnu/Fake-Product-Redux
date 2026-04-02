// src/data/dummyUsers.js
const dummyUsers = [
  {
    id: 1,
    name: { firstname: 'john', lastname: 'doe' },
    username: 'johnd',
    email: 'john@gmail.com',
    phone: '1-570-236-7033',
    address: {
      city: 'kilsyth',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: { lat: '-37.3159', long: '81.1496' },
    },
  },
  {
    id: 2,
    name: { firstname: 'david', lastname: 'morrison' },
    username: 'mor_2314',
    email: 'morrison@gmail.com',
    phone: '1-570-236-7033',
    address: {
      city: 'kilsyth',
      street: '7267 cove road',
      number: 7,
      zipcode: '12926-3874',
      geolocation: { lat: '-37.3159', long: '81.1496' },
    },
  },
  {
    id: 3,
    name: { firstname: 'kevin', lastname: 'ryan' },
    username: 'kevinryan',
    email: 'kevin@gmail.com',
    phone: '1-570-236-7033',
    address: {
      city: 'Cullman',
      street: '124 university',
      number: 58,
      zipcode: '29567-1452',
      geolocation: { lat: '-33.3159', long: '62.1496' },
    },
  },
];

export default dummyUsers;