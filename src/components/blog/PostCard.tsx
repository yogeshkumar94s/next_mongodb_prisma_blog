"use client";

import Image from "next/image";

type PostCardProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  category: string;
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  imageUrl,
  category,
}) => {
  // Format the date if it's a Date object, otherwise leave it as is

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
      <Image
        className='w-full'
        src={imageUrl}
        alt={`Cover Image for ${title}`}
        width={400}
        height={225}
        layout='responsive'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base mb-4'>{excerpt}</p>
        {/* Displaying category and date */}
        <div className='text-gray-600 text-xs uppercase font-bold'>
          {category}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
