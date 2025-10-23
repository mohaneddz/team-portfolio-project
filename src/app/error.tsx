"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const NotFound = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">ERROR</h1>
        <p className="mb-4 text-xl text-gray-600">
          Something Unexpected happened, please try again!
        </p>
        <Button
          size="lg"
          className="text-lg px-8 hover:shadow-lg hover:-translate-y-1 active:scale-95 active:-translate-y-0 transition-all duration-300 cursor-pointer"
          onClick={handleRefresh}
        >
          Refresh Page
          <RefreshCw className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
