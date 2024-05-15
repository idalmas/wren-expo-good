import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Hello! I'm Wren, your AI life coach!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an open source life coach AI designed to help users live happy and healthy lives. Developed by the Teenfully team. 
        </p>
        <p className="leading-normal text-muted-foreground">
          We hope you enjoy!{' '}
          {' '}
          
        </p>
      </div>
    </div>
  )
}
