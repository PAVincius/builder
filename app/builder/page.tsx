"use client"

import { Builder  } from "@/components/PageBuilder/Builder"

export default function BuilderPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to the Galaxy builder <br className="hidden sm:inline" />

        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Select one of our brand new templates to create your own custom projects
        </p>
      </div>
      <div className="flex gap-4">
        <Builder/>
      </div>
    </section>
  )
}
