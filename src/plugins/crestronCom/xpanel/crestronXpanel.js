import { getWebXPanel, runsInContainerApp } from '@crestron/ch5-webxpanel'

/**
 * Initialzes CH5-webxpanel connection.
 * Expected URL parameters: host, ipid, roomid
 */
export default function createCrestronXpanelPlugin() {
  console.log('creating Crestron XPanel...')

  const { WebXPanel, isActive, WebXPanelConfigParams, WebXPanelEvents } =
    getWebXPanel(!runsInContainerApp())

  if (!isActive) {
    console.log('XPanel not active - skipping initialization.')
    return
  }

  WebXPanel.addEventListener(WebXPanelEvents.NOT_AUTHORIZED, ({ detail }) => {
    window.location.href = detail.redirectTo
  })

  const httpQuery = window.location.search
  const urlParams = new URLSearchParams(httpQuery)

  WebXPanelConfigParams.host = urlParams.has('host') ? urlParams.get('host') : '0.0.0.0'
  WebXPanelConfigParams.ipId = urlParams.has('ipid') ? urlParams.get('ipid') : '3'
  WebXPanelConfigParams.roomId = urlParams.has('roomid') ? urlParams.get('roomid') : ''

  console.log(WebXPanelConfigParams)
  WebXPanel.initialize(WebXPanelConfigParams) 
}
