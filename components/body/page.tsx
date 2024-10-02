import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export function Submitbutton() {
  return (
    <a
    className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
    href="#"
  >
    <span className="absolute -end-full transition-all group-hover:end-4">
      <svg
        className="size-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>
  
    <span className="text-sm font-medium transition-all group-hover:me-4"> Download </span>
  </a>
  )
}

export default function Body() {
  return (
    <div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="flex justify-center items-center h-32 rounded-lg bg-gray-200 lg:col-span-2 ">
          
          <div className="flex flex-col items-center">
            <h1>Testing</h1>
            <Submitbutton />
          </div>

        </div>

        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
      
    </div>
  )
}
