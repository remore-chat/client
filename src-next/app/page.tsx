"use client";
import { Button } from "@/shadcn/ui/button";
import { useToast } from "@/shadcn/ui/use-toast";
import Image from "next/image";

export default function Home() {
  const { toast } = useToast();
  return (
    <div className="bg-background dark">
      Hello, world!
      <Button onClick={(e) => toast({ title: "123" })} variant="default">
        Click me!
      </Button>
    </div>
  );
}
