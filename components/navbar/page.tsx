import Image from 'next/image';

export function Searchbar() {
  return(
    <div className="relative">
      <label htmlFor="Search" className="sr-only"> Search for... </label>

      <input
        type="text"
        id="Search"
        placeholder="Enter a city"
        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>

  );
}

export default function Navbar() {
  return (

    <header className="bg-gray-800 dark:bg-gray-900">

      <div className="flex justify-between items-center">

        <a className="m-10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={100}
            className="mr-20"
          />            
        </a>
        <div className="m-10">        
          <Searchbar/>
        </div>


      </div>


    </header>
  

  )
}