// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { containerTheme as theme } from './sectionsTheme';
export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      {/* theme={theme} */}
      <ChakraProvider >
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}