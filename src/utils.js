import getDocumentScrollElement from 'fbjs/lib/getDocumentScrollElement'
import getScrollPosition from 'fbjs/lib/getScrollPosition'
import Scroll from 'fbjs/lib/Scroll'

export function getScrollPos () {
  const { y } = getScrollPosition(getDocumentScrollElement(document))
  return y
}
