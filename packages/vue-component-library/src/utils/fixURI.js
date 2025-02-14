/**
 * Strip 'meap/' from the URI and handle leading slashes and HTTP/HTTPS protocols.
 * @param {string} uri - The URI to be fixed.
 * @returns {string} The fixed URI.
 */
export default function fixURI(uri = '') {
  if (uri === null)
    return uri // don't try string method .replace

  // Do not do anything if URI contains HTTP or HTTPS protocol
  if (/^https?:\/\//.test(uri))
    return uri

  // Add a leading slash if URI does not begin with one
  if (!uri.startsWith('/'))
    uri = `/${uri}`

  return uri
}
