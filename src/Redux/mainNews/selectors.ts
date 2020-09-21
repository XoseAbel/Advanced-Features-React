export const selectNewsData = (mainState: any) => mainState.mainNews.data;
export const selectNewsError = (mainState: any) => mainState.mainNews.error;
export const selectNewsLoading = (mainState: any) =>
  mainState.mainNews.isLoading;
