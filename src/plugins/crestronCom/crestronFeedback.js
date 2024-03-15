import { CrComLib } from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'
import { useRootStore } from '@/stores/rootStore'
import { onlineHook, systemUseHook } from './api/systemState'

function initCrestronHooks() {
  // Create global access to base connection
  window.CrComLib = CrComLib

  // These functions handle native bridge communication between the touchscreen and the control system
  window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative
  window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative
  window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative
  window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative
}

/**
 * Initializes global access to CrComLib (window.CrComLib) as well as the associated
 * bridge hooks.
 * Initializes subscriptions for all feedback plugins.
 * Creates the stores for all Pinia-monitored states associated with control system communication.
 */
export default function createCrestronPlugin() {
  const rootStore = useRootStore()
  initCrestronHooks()

  // Begin monitoring online/offline status
  window.CrComLib.subscribeState(onlineHook.type, onlineHook.join, (state) => {
    rootStore.updateOnlineStatusFeedback(state)
  })

  // begin monitoring system use status (standby/ in use)
  window.CrComLib.subscribeState(systemUseHook.type, systemUseHook.join, (state) => {
    rootStore.updateUseStatusFeedback(state)
  })
}
