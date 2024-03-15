import { defineStore } from 'pinia'

/**
 * Root level state management.
 * "update" actions are intended to be called by the CrComLib feedback subscriptions and do not send any data to the control
 * system (see @/plugins/crestronCom/crestronCommands.js).
 */
export const useRootStore = defineStore('rootStore', {
  state: () => ({
    isOnline: false,
    isInUse: false
  }),
  actions: {
    /** Change the root store state to show whether or not the Control System is connected.
     * @param {boolean} newState - true = is connected, false = not connected.
     */
    updateOnlineStatusFeedback(newState) {
      this.isOnline = newState
    },
    /** change the stored state for system use
     * @param {boolean} newState - true = system in use, false = system in standby.
     */
    updateUseStatusFeedback(newState) {
      if (newState !== this.isInUse) {
        this.isInUse = newState
      }
    },
  }
})
