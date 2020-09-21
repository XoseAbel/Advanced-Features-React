export const selectAutocompleteData = (mainState: any) =>
  mainState.autocomplete.data;
export const selectAutocompleteError = (mainState: any) =>
  mainState.autocomplete.error;
export const selectAutocompleteLoading = (mainState: any) =>
  mainState.autocomplete.isLoading;
