import React from 'react';
import { motion } from "framer-motion"

const InputSelect = ({ options }) => {
    return (
        <div className='w-full'>
            {options.map((option, index) => (
                <div key={index} className="form-control">
                    <label className="label cursor-pointer flex gap-4">
                        <span value={option} className='label-text'>
                            {option}
                        </span>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <input type="radio" name="radio-10" className="radio radio-style checked:bg-base" checked />
                        </motion.button>
                    </label>
                </div>
            ))
            }
        </div>
    );
}

export default InputSelect;
