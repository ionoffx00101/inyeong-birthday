import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/crud/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/crud/"!</div>
}
