import type { Metadata } from "next";
import "./globals.css";
import { plusJakartaSans } from "./lib/font";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import AddTaskModalProvider from "./context/AddTaskModalContext";
import TaskProvider from "./context/TaskContext";
import HeaderProvider from "./context/HeaderContext";
import TaskFilterProvider from "./context/TaskFilterContext";
import EditTaskModalProvider from "./context/EditTaskModalContext";
//import Providers from "./providers";


export const metadata = {
  title: "Todo",
  description: "Stay organized.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen antialiased">
      <body
        className={`${plusJakartaSans.className} bg-background-primary min-h-screen flex flex-col text-text-primary`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <TaskProvider>
            <TaskFilterProvider>
              <HeaderProvider>
                <Header />
              </HeaderProvider>

              <main className="flex-1 flex flex-col">
                <AddTaskModalProvider>
                  <EditTaskModalProvider>{children}</EditTaskModalProvider>
                </AddTaskModalProvider>
              </main>

              <Footer />
            </TaskFilterProvider>
          </TaskProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
