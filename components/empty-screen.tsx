


import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Wren!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an open source chatbot designed to help you live a happy and healthy life!{' '}
        </p>
        <p className="leading-normal text-muted-foreground">
          Designed by the Teenfully team. If you have feedback, we'd love to hear it. Just email hello.teenfully@app {''}
        </p>
      </div>
    </div>
  )
}
