import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
} from "@material-tailwind/react";
import { AccidentTable } from "./tables/AccidentTable";
 
interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any[];
}

export function DialogWithTable({open, setOpen, data}: Props) { 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xl">
        <DialogHeader>
          <div className="flex flex-row justify-between w-full">
            <span>Accidents List</span>

            <Button variant="text" onClick={handleOpen}>close</Button>
          </div>          
        </DialogHeader>
        <div className="text-center">
          <AccidentTable data={data}/>
        </div>
      </Dialog>
    </>
  );
}