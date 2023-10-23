import { Suspense } from 'react'

import { GithubProfile } from './components/github-profile'
import { LongWaitComponent } from './components/long-wait-component'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
        libero! Quam quaerat quia sed accusantium odio vero, iusto deserunt ea
        dicta harum quos autem minus aliquam cum, id impedit quibusdam!
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent </p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile </p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
