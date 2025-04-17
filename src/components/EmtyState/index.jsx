// components/EmptyState.jsx
const EmptyState = ({ icon = 'clock', title, description, additionalText }) => {
  const icons = {
    clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    folder:
      'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  };

  return (
    <div className="mx-4 my-8 flex h-64 items-center justify-center rounded-lg bg-gray-50">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={icons[icon] || icons.clock}
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {description}
          {additionalText && (
            <span className="mt-1 block text-xs text-gray-400">
              {additionalText}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
