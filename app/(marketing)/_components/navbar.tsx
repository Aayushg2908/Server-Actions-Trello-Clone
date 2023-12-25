import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Link
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "outline",
              })
            )}
            href="/sign-in"
          >
            Login
          </Link>
          <Link
            className={cn(
              buttonVariants({
                size: "sm",
              })
            )}
            href="/sign-up"
          >
            Get Taskify for free
          </Link>
        </div>
      </div>
    </div>
  );
};
