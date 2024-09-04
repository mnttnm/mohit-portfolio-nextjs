import { FaCopy } from "react-icons/fa";
import { LuCopy, LuSend } from "react-icons/lu";

const InputBoxWithCopy = ({
  label,
  name,
  placeholder,
  value,
}: {
  label?: string;
  name: string;
  placeholder: string;
  value: string;
}) => {
  return (
    <div className="group flex flex-col gap-2">
      <label htmlFor={name} className="text-gray-500">
        {label}
      </label>
      <div className="flex items-center">
        <input
          type={"text"}
          name={name}
          id={name}
          placeholder={placeholder}
          className="px-6 py-2 bg-gray-50 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 rounded-l-full w-[16rem] cursor-text select-text"
          value={value}
          readOnly
        />
        <div
          title="Copy Email"
          className="h-full py-2 px-3 bg-white dark:bg-gray-800/70 border-x-0 border-y border-gray-300 dark:border-gray-700"
          onClick={() => {
            navigator.clipboard.writeText(value);
          }}
        >
          <LuCopy className="text-gray-500 dark:text-gray-200/70 h-[1.5rem] w-[1.5rem] group-hover:scale-105 hover:cursor-copy" />
        </div>
        <a
          title="Send Email"
          className=" bg-gray-600  dark:bg-white/10 rounded-r-full h-full py-2 px-4 border-y border-gray-300 dark:border-gray-700"
          href={`mailto:${value}`}
        >
          <LuSend className="text-white dark:text-white/80 h-[1.5rem] w-[1.5rem] -translate-x-1 group-hover:scale-105 hover:cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default InputBoxWithCopy;
