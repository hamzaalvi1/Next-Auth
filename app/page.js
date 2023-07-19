import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <>
      <h2>NEXT AUTH</h2>
    </>
  );
}
