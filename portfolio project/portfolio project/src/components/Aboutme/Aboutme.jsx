export default function Aboutme() {
  return (
    <div className="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#"></a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Multitalented
          </h5>
        </a>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <p className="underline ">I have done alot of things in my life!</p>
          <ul className="list-outside list-disc p-2 text-left">
            <li>I'm an audioengineer</li>
            <li>I'm handy with a soldering iron</li>
            <li>Computer experience since 1995!</li>
            <li>I've spoken infront of big audiences!</li>
          </ul>
          And now recently I'm diving into webdevelopment!
        </div>
      </div>
    </div>
  );
}
