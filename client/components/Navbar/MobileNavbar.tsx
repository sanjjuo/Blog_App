import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight className="w-7 h-7" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menubar</SheetTitle>
          <SheetDescription hidden />
        </SheetHeader>
        <div className="mt-10">
          <NavLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
