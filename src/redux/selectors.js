import { createSelector } from '@reduxjs/toolkit';

// Contacts selectors
export const selectContacts = state => state.contacts.items;

// Filter selectors
export const selectFilter = state => state.filter;

// Combined selector to filter contacts based on the filter state
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts; // Return all contacts if no filter is applied
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
