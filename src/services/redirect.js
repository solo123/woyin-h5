// Using history api from react-router 4
// Need to install it via yarn add history https://github.com/ReactTraining/history
import history from '../history';

export function push(path = '/', state) {
  history.push(path, state)
}

export function replace(path = '/', state) {
  history.replace(path, state)
}