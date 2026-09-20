const EmptyList = ({ title , paragraph}) => {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl border border-base-300 bg-base-200/40 px-6 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75c-1.243-1.5-3.72-1.5-4.963 0C5.795 8.25 6 11.25 6 11.25v6.75h12v-6.75s.205-3-1.037-4.5C15.72 5.25 13.243 5.25 12 6.75Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18.75h6" />
        </svg>
      </div>

      <h3 className="text-2xl font-bold text-base-content">{title} </h3>

      <p className="mt-2 max-w-md text-base-content/60">
       {paragraph}
      </p>
    </div>
  );
};

export default EmptyList;
