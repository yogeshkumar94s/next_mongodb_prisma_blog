import { Card, CardHeader, CardContent } from "@/components/ui/card";
import PostCardLabel from "./PostCardLabel";

interface PostCardWrapperProps {
  children: React.ReactNode;
  cardLabel: string;
}

const PostCardWrapper = ({ children, cardLabel }: PostCardWrapperProps) => {
  return (
    <Card className='w-[1080px] shadow-md'>
      <CardHeader>
        <PostCardLabel label={cardLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default PostCardWrapper;
