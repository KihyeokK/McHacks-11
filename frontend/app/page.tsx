import Image from "next/image";
import Login from "@/components/login";
import {Main} from "@/components/main";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  return (
    <>
    getServerSession Result{
      session?.user?.name ?(
        <Main/>
      ) : (
        // TODO: https://youtu.be/md65iBX5Gxg?si=kqGv2tYZ4IvCXQIl&t=661
        <Login/>
      )
    }
    </>
  )
}