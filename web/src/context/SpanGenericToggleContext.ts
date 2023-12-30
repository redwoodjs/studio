import { createContext } from 'react'

export type SpanGenericToggleContextType = {
  show: {
    ancestors: boolean
    descendants: boolean
  }
  setShow: (show: { ancestors: boolean; descendants: boolean }) => void
}
export const SpanGenericToggleContext =
  createContext<SpanGenericToggleContextType>({
    show: {
      ancestors: false,
      descendants: false,
    },
    setShow: () => {},
  })
