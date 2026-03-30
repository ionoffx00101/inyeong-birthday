import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/todo/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/todo/"!</div>
}
