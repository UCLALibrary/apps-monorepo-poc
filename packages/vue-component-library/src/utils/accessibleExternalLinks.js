export default function accessibleExternalLinks(text = '') {
  if (text == null)
    return text // don't try string method .replace

  const regex = /<a\s[^>]*?target=["'_blank][^>]*>.*?<\/a>/g

  return text.replace(regex, (match) => {
    const xmatch = match.replace('</a>', '')
    return (
      `${xmatch
      }<span class="visually-hidden">(opens in a new tab)</span></a>`
    )
  })
}
