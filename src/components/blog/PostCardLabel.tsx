interface PostCardLabelProps {
  label: string;
}

const PostCardLabel = ({ label }: PostCardLabelProps) => {
  return (
    <span className='flex flex-col space-y-2 items-center'>
      <h1 className='text-2xl font-semibold'>meauPOST</h1>
      <p className='text-muted-foreground text-sm'> {label}</p>
    </span>
  );
};

export default PostCardLabel;
