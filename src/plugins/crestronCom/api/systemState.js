/**Boolean join for subscribing to control system connection events */
export const onlineHook = { type: 'b', join: 'Csig.All_Control_Systems_Online_fb' }

/**Boolean join for subscribing & sending use state changes for in-use / standby  */
export const systemUseHook = { type: 'b', join: '1' }

/**string join for subcribing and getting room name and location from the control system.*/
export const roomNameHook = { type: 's', join: '1' }
