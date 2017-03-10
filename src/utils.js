import getDocumentScrollElement from 'fbjs/lib/getDocumentScrollElement'
import getScrollPosition from 'fbjs/lib/getScrollPosition'
import Scroll from 'fbjs/lib/Scroll'
import getViewportDimensions from 'fbjs/lib/getViewportDimensions'

export function getScrollPos () {
  const { y } = getScrollPosition(getDocumentScrollElement(document))
  return y
}

export function getWinSize (includeScrollbars) {
  return includeScrollbars
    ? getViewportDimensions()
    : getViewportDimensions.withoutScrollbars()
}
