import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Users",
  description: "This is all available users in jsonplaceholder.typicode.com",
}

async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 0 },
  })
  return res.json()
}

export default async function Users() {
  const users = await getAllUsers()
  const date = new Date()
  return (
    <main>
      <Link href="/">
        <h3 className="absolute top-10 left-5">&#8619; back to home</h3>
      </Link>

      <div className="absolute right-5 top-10">
        <h1>
          {date.getHours()} {date.getMinutes()} {date.getSeconds()}
        </h1>
      </div>

      <h1>users:</h1>
      <div className="w-96 flex flex-col gap-1">
        {users.map((user: any) => (
          <Link key={user.id} href={"/user-details/" + user.id}>
            <p className="bg-slate-200 hover:bg-slate-300 rounded-lg px-2 py-1">
              {user.username}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
