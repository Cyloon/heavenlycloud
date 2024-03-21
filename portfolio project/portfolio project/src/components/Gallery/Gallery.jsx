export default function Gallery({ image }) {
  return (
    <div className="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <img className="rounded-lg" src={image} alt="" />
      </div>
    </div>
  );
}
