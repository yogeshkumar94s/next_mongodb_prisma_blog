import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface CardTitleProps {
  label: string;
}

const CardTitle = ({ label }: CardTitleProps) => {
  return (
    <div className='w-full flex flex-col items-center gap-y-4 justify-center '>
      <h1 className={cn("text-3xl font-semibold", font.className)}>meauPOST</h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  );
};

export default CardTitle;
