// context/ConfigContext.tsx
import { createContext, ReactNode, useContext } from 'react'
import config from '../config/config.json'

const ConfigContext = createContext(config)

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfig = () => useContext(ConfigContext)