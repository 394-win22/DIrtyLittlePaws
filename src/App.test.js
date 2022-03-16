import { render, screen } from '@testing-library/react';
import App from './App';
import { useData, useUserState }from './utilities/firebase.js';


jest.mock('./utilities/firebase.js');
const mdata = {
  "users":{
    "displayName":"Alex"},
  "Locations":{},
};

const muser = {
  "Locations" : [null],
  "title" : "All Locations",
  "users" :  { 
  "urdPpjEZjQDKdHFYvtoauwKHyQbc" : {
  "info" : {
    "Homelatlng" : {
      "lat" : 41.921634,
      "lng" : -87.659558
    },
    "address" : "",
    "email" : "spot2937@gmail.com",
    "img" : "",
    "name" : "Stephen Spot",
    "payment" : "",
    "petname" : ""
  }
}}};

const muser2 = {
  "accessToken" : "",
  "auth" : [null],
  "displayName" : "Stephen Spot",
  "email" : "spot2937@gmail.com",
  "emailVerified" : "true",
  "isAnonymous" : "false",
 };

test('renders learn react link', async () => {
  useData.mockReturnValue([mdata, false, null]);
  useUserState.mockReturnValue(null);
  render(<App />);
  const linkElement = await screen.findByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});

test('Get unlock', async () => {
  useData.mockReturnValue([mdata, false, null]);
  useUserState.mockReturnValue(muser);
  render(<App />);
  const linkElement = await screen.findByText("Unlock");
  expect(linkElement).toBeInTheDocument();
});



it('shows Sign Out if logged in', async () => {
  useData.mockReturnValue([mdata, false, null]);
  useUserState.mockReturnValue(muser);
  render(<App />);
  const button = await screen.queryByText("Log Out");
  expect(button).toBeInTheDocument();
});


it('shows if user email is displayed', async () => {
  useData.mockReturnValue([muser, false, null]);
  useUserState.mockReturnValue(muser2);
  render(<App />);

  const button = await screen.getByText("c-riesbeck@u.northwestern.edu");
  expect(button).toBeInTheDocument();
});