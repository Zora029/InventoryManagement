import React from "react";

interface SelectOptionProps {
    options: string[];
    onChange: (selectedOption: string) => void;
  }

  const SelectOption: React.FC<SelectOptionProps> = ({ options, onChange }) => {
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOption = event.target.value;
      onChange(selectedOption); // Appelle la fonction onChange avec la valeur sélectionnée
    };

    return (
      <select
        className="w-full h-1.5rem rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        onChange={handleOptionChange}
      >
        {options.map((option, index) => (
          <option 
          key={index} 
          value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  
  export default SelectOption;