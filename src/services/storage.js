import config from '../config'

const STORAGE_NAMESPACE = config.storage_namespace

/**
 * Retreiving Token from Localstrogae
 *
 * @param {string} key
 * @returns {object}  token
 */
export function getItem(key) {
  return localStorage.getItem(`${STORAGE_NAMESPACE}_${key}`);
}

/**
 * Saving Token to localstrogae
 *
 * @param {any} token
 * @returns {void}
 */
export function setItem(key, item) {
  localStorage.setItem(`${STORAGE_NAMESPACE}_${key}`, item);
}

/**
 * Remove key/value from local storage
 *
 * @param {string} key
 */
export function removeItem(key) {
  localStorage.removeItem(`${STORAGE_NAMESPACE}_${key}`);
}
