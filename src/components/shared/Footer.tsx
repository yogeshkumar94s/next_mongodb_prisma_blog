const Footer: React.FC = () => {
  return (
    <footer className='w-full mx-auto bg-gray-400 text-center'>
      <div className='container mx-auto py-6'>
        <div className='text-gray-700 text-sm'>
          <div className='mb-2'>
            &copy; {new Date().getFullYear()} Your Blog Name. All rights
            reserved.
          </div>
          <div>
            Contact us:
            <a
              href='mailto:contact@yourblog.com'
              className='text-blue-600 hover:underline'
            >
              contact@yourblog.com
            </a>
          </div>
        </div>
      </div>
      <div>
        Legal Links: Include links to your privacy policy, terms of service, and
        any other legal notices.
      </div>
    </footer>
  );
};

export default Footer;
