const BaseLabel = ({ text, dark }) => {
  return (
    <span
      className={`${
        dark ? "bg-gray-700" : "bg-teal-500"
      } text-white text-xs leading-3 font-bold py-1 px-2 mx-2 rounded-full`}
    >
      {text}
    </span>
  );
};

export default BaseLabel;
