import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { redirect } from "next/navigation";

export default async function Session() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("mandado de volta pro /login");
    redirect("/login");
  }
  return session.user.id;
}
