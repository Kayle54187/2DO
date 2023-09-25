import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ModalProps } from "@/interfaces";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
  

const Modal = ({
    status
}: ModalProps) => {
    return (
        <Dialog>
            <DialogTrigger className="px-2 py-3 bg-[#2196F3] text-white rounded-[10px]">Add {status}</DialogTrigger>
            <DialogContent className="bg-[#1A1A1A] text-white border-[#363636]">
                <DialogHeader>
                <DialogTitle className="mb-4 text-xl">Add To {status}</DialogTitle>
                <DialogDescription>
                    <h1 className="text-white font-bold mb-2 text-md">Title:</h1>
                    <Input type="text" placeholder="Enter Title" className="border-none outline-none mb-3 bg-[#363636]"/>
                    <h1 className="text-white font-bold mb-2 text-md">Description:</h1>
                    <Textarea placeholder="Enter Description" className="border-none bg-[#363636] mb-3"/>
                    <div className="flex items-center justify-center">
                        <button className="px-5 py-3 bg-[#2196F3] text-white rounded-[10px]">Add</button>
                    </div>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
 
export default Modal;