import type { Metadata } from "next"
import Link from "next/link"

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  return users.map((user: any) => {
    userId: user.id
  })
}

async function getUserDetails(userId: string) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  )
  return res.json()
}

export const metadata: Metadata = {
  title: "User Details",
  description: "this is the individual user details section",
}

export default async function UserDetails({
  params,
}: {
  params: { userId: string }
}) {
  const userData = await getUserDetails(params.userId)
  const date = new Date()

  return (
    <main>
      <Link href="/users">
        <h3 className="absolute top-10 left-5">&#8619; back to users</h3>
      </Link>

      <div className="absolute right-5 top-10">
        <h1>
          {date.getHours()} {date.getMinutes()} {date.getSeconds()}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <h1>{userData.name}</h1>
        <p>/</p>
        <h2>{userData.username}</h2>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <p>
          email : <span className="font-semibold">{userData.email}</span>
        </p>
        <div className="flex gap-5">
          <p>address:</p>
          <div className="flex flex-col">
            <p>
              street :
              <span className="font-semibold">{userData.address.street}</span>
            </p>
            <p>
              suite :
              <span className="font-semibold">{userData.address.suite}</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p>
              city :
              <span className="font-semibold">{userData.address.city}</span>
            </p>
            <p>
              zipcode :
              <span className="font-semibold">{userData.address.zipcode}</span>
            </p>
          </div>
        </div>
        <p>
          phone : <span className="font-semibold">{userData.phone}</span>
        </p>
        <p>
          website : <span className="font-semibold">{userData.website}</span>
        </p>
        <p>
          email : <span className="font-semibold">{userData.email}</span>
        </p>
        <p>
          company :
          <span className="font-semibold">{userData.company.name}</span>
        </p>
      </div>
    </main>
  )
}
