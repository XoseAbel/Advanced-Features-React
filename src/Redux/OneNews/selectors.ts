export const selectSingleNewsData = (mainState: any) => mainState.oneNews.data;
export const selectSingleNewsError = (mainState: any) =>
  mainState.oneNews.error;
export const selectSingleNewsLoading = (mainState: any) =>
  mainState.oneNews.isLoading;
