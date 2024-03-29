"use client";
import {Button} from "@/components/ui/button"
import {signIn, signOut, useSession} from "next-auth/react";
function AuthButton(){
  const {data: session} = useSession();
  if(session){
    return(
      <>
        {session?.user?.name}<br/>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    )
  }
  return(
    <>
      Not signed in <br/>
      <Button onClick={() => signIn()}>Sign In</Button>
    </>
  );
}
export default function NavMenu(){
  return(
    <div>
      <AuthButton />
    </div>
  );
}