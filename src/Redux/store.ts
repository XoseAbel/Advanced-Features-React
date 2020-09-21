import { configureStore } from '@reduxjs/toolkit';
import mainNewsReduce from './mainNews/mainNewsSlice';
import oneNewsReduce from './OneNews/OneNewsSlice';
import autocompleteReduce from './autocompleteList/autocompleteSlice';

export default configureStore({
  reducer: {
    mainNews: mainNewsReduce,
    oneNews: oneNewsReduce,
    autocomplete: autocompleteReduce,
  },
  //desvtools habilitar
  devTools: true,
});
