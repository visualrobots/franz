import { SpellCheckHandler, ContextMenuListener, ContextMenuBuilder } from 'electron-spellchecker';

window.spellCheckHandler = new SpellCheckHandler();

document.addEventListener('DOMContentLoaded', () => {
  console.log('init spellchecker');
  window.spellCheckHandler.attachToInput();
}, false);

window.spellCheckHandler.switchLanguage(navigator.language);

const contextMenuBuilder = new ContextMenuBuilder(window.spellCheckHandler);
const contextMenuListener = new ContextMenuListener(info => contextMenuBuilder.showPopupMenu(info)); // eslint-disable-line
