"use client";

import { useAddEditNetworkModal } from "@/ui/modals/add-edit-network-modal";
import { useAddWorkspaceModal } from "@/ui/modals/add-workspace-modal";
import Interim from "@/ui/welcome/interim";
import Intro from "@/ui/welcome/intro";
import va from "@vercel/analytics";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function WelcomePageClient() {
  const { setShowAddWorkspaceModal, AddWorkspaceModal } =
    useAddWorkspaceModal();
  const { setShowAddEditNetworkModal, AddEditNetworkModal } =
    useAddEditNetworkModal();

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    va.track("Sign Up");
  }, []);

  useEffect(() => {
    if (searchParams?.get("type") === "workspace") {
      setTimeout(() => {
        setShowAddWorkspaceModal(true);
      }, 200);
    } else {
      setShowAddWorkspaceModal(false);
    }
    if (searchParams?.get("type") === "addNetwork") {
      setTimeout(() => {
        setShowAddEditNetworkModal(true);
      }, 200);
    } else {
      setShowAddEditNetworkModal(false);
    }
  }, [searchParams]);

  return (
    <div className="flex h-screen flex-col items-center">
      <AddWorkspaceModal />
      <AddEditNetworkModal />
      <AnimatePresence mode="wait">
        {!searchParams?.get("type") && <Intro key="intro" />}
        {searchParams?.get("type") === "interim" && (
          <>
            <button
              className="group fixed left-10 top-10 z-[99] rounded-full p-2 transition-all hover:bg-gray-100"
              onClick={() => router.back()}
            >
              <ArrowLeft
                size={20}
                className="text-gray-500 group-hover:text-gray-700 group-active:scale-90"
              />
            </button>
            <Interim key="interim" />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
