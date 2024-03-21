export default function Projects() {
  return (
    <>
      <div className="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-3">Previous Projects!</h1>
        <a href="https://amazon-snake.netlify.app/">
          <img className="rounded-t-lg" src="/amazonssnake.png" alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Amazon's snake
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A snake game made in javascipt
          </p>
        </div>
      </div>
      <div className="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://cyloon.one/thereactors/">
          <img className="rounded-t-lg" src="/thereactors.png" alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Reactors
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A mockup recrutmentfirms website made in react
          </p>
        </div>
      </div>
    </>
  );
}
