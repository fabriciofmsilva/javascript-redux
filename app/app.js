import { store } from './store';
import { changeStatus } from './actions/status';

const statusParagraph = document.querySelector('.status');

document
  .querySelector('.userName')
  .oninput = e => {
    const userName = e.target.value;
    // changeStatus retorna uma action 
    // que é passada para store.dispatch
    store.dispatch(changeStatus(userName));
  };

store.subscribe(() => {
  // obtemos o estado atual, depois da modificação
  const state = store.getState();
  // atualizamos o elemento com o novo valor
  statusParagraph.textContent = state.status;
});
