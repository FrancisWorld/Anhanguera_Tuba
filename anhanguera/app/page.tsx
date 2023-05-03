"use client";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { AuthProvider } from "../contexts/authContext";
import CardsPage from "@/components/CardsPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <AuthProvider>
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex flex-1">
          {/* Card */}

          <CardsPage />

          {/* Card */}
        </div>
      </AuthProvider>
    </div>
  );
}
