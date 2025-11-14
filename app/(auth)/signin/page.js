import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <form
     className="flex justify-center mt-20"
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="bg-white text-black px-4 py-2 rounded-md">Signin with Google</button>
    </form>
  )
} 