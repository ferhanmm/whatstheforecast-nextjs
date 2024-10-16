
export function Submitbutton() {
  return (
    <a
    className="group relative inline-flex items-center overflow-hidden rounded bg-blue-900 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
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

    <div className="grid xl:grid-cols-5 gap-4 mt-10 mx-10 mb-10">

      <div className="hidden xl:block xl:col-span-1 bg-gray-500 rounded-2xl">
        Left
      </div>

      <div className="xl:col-span-3 xl:mt-0 bg-gray-400 p-10 rounded-2xl">
        <div className="text-center">
            <p>Weather</p>
            <p>Weather2</p>
        </div>
      </div>

      <div className="hidden xl:block xl:col-span-1 bg-gray-500 rounded-2xl">
        Right
      </div>

    </div>
      
    </div>
  )
}
