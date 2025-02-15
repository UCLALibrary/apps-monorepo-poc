import _truncate from 'lodash/truncate'
import _unescape from 'lodash/unescape'

/**
 * Takes a String, Removes HTML tags and truncates to a given parameter
 * @param {string} str - Text/Summary to be processed
 * @param {number} maxlength - Maximum length needed for the blurb
 * @returns {string} - String with no HTML tags
 */

function removeHtmlTruncate(str = '', maxlength = Number.POSITIVE_INFINITY) {
  if (str == null)
    return str // don't try string method .replace

  // Remove HTML
  const stripHtml = _unescape(
    str.replace(/<[^>]+>/g, '').replace(/"/g, ''),
  )

  return _truncate(stripHtml, {
    length: maxlength,
    omission: '…',
    separator: /\s/,
  })
}

export default removeHtmlTruncate
