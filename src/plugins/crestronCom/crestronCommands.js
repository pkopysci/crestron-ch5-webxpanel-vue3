import { systemUseHook } from "./api/systemState"
/** 
 * Sends a request to the control system to change the current 'in use' status via digital join pulse.
 * */
export function toggleInUseStatus() {
  window.CrComLib.publishEvent(systemUseHook.type, systemUseHook.join, true)
  setTimeout(() => {
    window.CrComLib.publishEvent(systemUseHook.type, systemUseHook.join, false)
  }, 30)
}
