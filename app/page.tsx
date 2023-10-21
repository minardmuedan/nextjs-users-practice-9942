import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>hello</h1>
      <Link href="/users">
        <h1 className="underline">go to user</h1>
      </Link>
    </main>
  )
}
