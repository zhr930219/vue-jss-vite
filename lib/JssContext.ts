import { inject, ref } from 'vue'
import type { Ref } from 'vue'
import type { Context as JssContextValue } from './types.ts'

// const JssContext: Context<JssContextValue> = React.createContext({
//   classNamePrefix: '',
//   disableStylesGeneration: false
// })

export const defaultContextValue: JssContextValue = {
  classNamePrefix: '',
  disableStylesGeneration: false
}

// export default JssContext
const JssContext = Symbol()

export function injectJssContext(): Ref<JssContextValue> {
  return inject(JssContext, ref(defaultContextValue))
}

export default JssContext
