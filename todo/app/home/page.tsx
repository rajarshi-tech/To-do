import { auth } from "@/auth";
import AddTaskComponent from "./components/AddTaskComponent";
import MainContent from "./components/MainContent";

export default async function Home() {
  
  const session = await auth();

  return (
    <>
      <AddTaskComponent />
      {/* main content */}
      <MainContent name={session?.user?.name || "Guest"} />
    </>
  );
}
