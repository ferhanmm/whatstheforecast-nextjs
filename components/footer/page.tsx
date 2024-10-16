import Image from 'next/image'

export default function Footer() {
    return (
      <footer className="bg-gray-800 dark:bg-gray-900">
        <div className="">
          <a className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={100}
              className="m-10"
            />            
          </a>
        </div>
      </footer>

    )
}