import { CheckCircledIcon } from "@radix-ui/react-icons";

interface SuccessFormProps {
  message?: string;
}

const SuccessForm = ({ message }: SuccessFormProps) => {
  if (!message) return null;

  return (
    <div className='bg-emerald-500/15 p-3 rounded-md flex gap-x-2 items-center text-sm text-emerald-500'>
      <CheckCircledIcon className='h-4 w-4' />
      <p>{message}</p>
    </div>
  );
};

export default SuccessForm;
