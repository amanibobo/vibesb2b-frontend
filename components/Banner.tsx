export default function Banner() {
  return (
    <div className="flex justify-center py-4">
      <div className="bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 max-w-md w-full mx-4">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-600 font-medium">
            <span className="underline">not</span> Backed by{' '}
            <span className="inline-flex items-center justify-center w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-sm mx-1">
              Y
            </span>
            {' '}Combinator
          </p>
        </div>
      </div>
    </div>
  );
}
