import React from "react";
import ReactLoading from "react-loading";

const Button = ({ text, className, type, onClick, disabled, loading }) => {
  const baseClasses =
    "w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center";

  const additionalClasses =
    className ||
    "bg-indigo-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800";

  return (
    <button
      type={type || "button"}
      className={`${baseClasses} ${additionalClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <ReactLoading type={"spin"} color={"#FFF"} height={20} width={20} />
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
