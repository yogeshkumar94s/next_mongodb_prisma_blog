import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const ArticleSearch = () => {
  return (
    <div className='relative w-full md:w-1/2 lg:w-1/3'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search'
        className='w-full pl-3 pr-10 py-2 border rounded-full text-gray-700 focus:shadow-outline'
      />
      <span className='absolute right-0 pr-3 top-0 bottom-0 flex items-center'>
        <MagnifyingGlassIcon className='h-5 w-5 text-gray-500 cursor-pointer' />
      </span>
    </div>
  );
};

export default ArticleSearch;
