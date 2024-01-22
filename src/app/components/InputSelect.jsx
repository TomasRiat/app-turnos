import React from 'react';

const InputSelect = ({ options }) => {
    return (
        <div
            className="relative group rounded-lg w-64 bg-transparent overflow-hidden"
        >
            <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="100"
                className="w-8 h-8 absolute right-0 -rotate-45 stroke-[#000] top-1.5 group-hover:rotate-0 duration-300"
            >
                <path
                    stroke-width="4"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                    className="svg-stroke-primary"
                ></path>
            </svg>
            <select
                className="appearance-none relative bg-transparent ring-0 outline-none border-2 border-neutral-500 text-[#000]  text-sm font-bold rounded-lg block w-full p-2.5"
            >
                {options.map((option, index) => (
                    <option key={index} value={option} className='bg-transparent'>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InputSelect;
