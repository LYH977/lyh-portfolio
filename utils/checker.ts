export const isMacOS = () => global.navigator?.userAgent?.indexOf('Mac') != -1

export const isTouchScreen = () =>
  'ontouchstart' in window || navigator?.maxTouchPoints > 0
