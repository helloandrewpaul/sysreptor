export { EditorState, EditorSelection, ChangeSet, Text, Transaction } from '@codemirror/state';
export { EditorView, ViewUpdate, tooltips, scrollPastEnd, keymap, lineNumbers, drawSelection, rectangularSelection, crosshairCursor, dropCursor } from '@codemirror/view';
export { history, historyKeymap, defaultKeymap, indentWithTab, undo, redo, undoDepth, redoDepth } from '@codemirror/commands';
export { forceLinting, setDiagnostics } from '@codemirror/lint';
export { closeBrackets } from "@codemirror/autocomplete";
export { MergeView } from '@codemirror/merge';
export { syntaxHighlighting, indentUnit } from '@codemirror/language';
export { vueLanguage } from '@codemirror/lang-vue';
export { cssLanguage } from '@codemirror/lang-css';
export { markdown } from './language';
export { createEditorExtensionToggler } from './utils';
export { spellcheck, spellcheckTheme } from './spellcheck';
export { highlightTodos } from './todos';
export { markdownHighlightStyle, markdownHighlightCodeBlocks } from './highlight';
export { 
  toggleStrong, toggleEmphasis, toggleStrikethrough, toggleFootnote,
  toggleListUnordered, toggleListOrdered, toggleTaskList,
  toggleLink, insertCodeBlock, insertTable, 
  isTypeInSelection, isTaskListInSelection,
  insertNewlineContinueMarkup
} from './commands';
export { setRemoteClients, remoteSelection } from './awareness';
import 'highlight.js/styles/default.css';
