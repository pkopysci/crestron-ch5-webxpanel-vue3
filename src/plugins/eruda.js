import eruda from 'eruda'

/**
 * Initializes the touchscreen based web developer tools for debugging.
 * This should not be called in a production build.
 */
export default function createErudaPlugin() {
  eruda.init()
  eruda.scale(1.5)

  let xPosition = window.innerWidth - 80
  let yPosition = 20
  eruda.position({ x: xPosition, y: yPosition })
}
