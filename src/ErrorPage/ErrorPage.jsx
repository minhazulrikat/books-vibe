import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <div className="text-9xl font-black bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          {error?.status || "404"}
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-4 text-base-content/60 leading-relaxed">
          Sorry, we couldn't find the page you're looking for.
          It may have been moved, deleted, or the URL might be incorrect.
        </p>

        <Link
          to="/"
          className="btn btn-primary mt-8 rounded-full px-8"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;