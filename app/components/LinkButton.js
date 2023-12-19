export default function LinkButton({ src, alt, href }) {
    return (
      <a 
        className='rounded-lg w-12 h-12 bg-primary-200 hover:bg-primary-600 transition ease-in-out'
        href={href}
      >
        <image
          className='rounded-lg p-1 w-full h-full' 
          src={src}
          alt={alt}
        />
      </a>
    );
  }