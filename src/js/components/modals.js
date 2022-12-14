import SimpleModal from '../functions/modals';
import '../functions/send-excel';

const options = {
  disableScroll: true,
  transition: 250,
  nested: false,
  overlayCloseAll: true,
};
const modals = new SimpleModal();
modals.init(options);

window.SimpleModal = modals;
