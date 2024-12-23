import React from 'react';

const GenderCheckbox = ({ handleGenderChange, selectedGender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text'>Male</span>
                    <input type="checkbox" className={`checkbox border-slate-900 ${selectedGender === "male" ? "selected" : ""}`}
                        onChange={() => handleGenderChange("male")}
                        checked={selectedGender === "male"}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text'>Female</span>
                    <input type="checkbox" className={`checkbox border-slate-900 ${selectedGender === "female" ? "selected" : ""}`}
                        onChange={() => handleGenderChange("female")}
                        checked={selectedGender === "female"}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;