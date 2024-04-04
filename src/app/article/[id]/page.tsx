import Image from "next/image";
import { FC } from "react";

interface ArticleProps {
  params: {
    id: string;
  };
}

const Article: FC<ArticleProps> = ({ params }) => {
  console.log("params: ", params);
  return (
    <article className='max-w-4xl mx-auto p-5 lg:p-10'>
      <h1 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'></h1>
      <p className='text-gray-700 text-base lg:text-lg mb-6'></p>
      <div className='mb-8'>
        {/* <Image className='w-full h-auto rounded-lg' /> */}
      </div>
      <p className='text-gray-600 text-base leading-relaxed'></p>
    </article>
  );
};

export default Article;
