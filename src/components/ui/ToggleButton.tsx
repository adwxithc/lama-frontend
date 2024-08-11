

const ToggleButton= ({value,toggle}:{value:boolean,toggle:()=>void}) => {
  

  return (
    <button
      onClick={toggle}
      type="button"
      className={`relative flex items-center  border-primary w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
        value ? 'bg-primary' : 'bg-gray-300'
      }`}
    >
      <span
        className={`absolute top-0 left-0 w-6 h-6 border border-primary bg-white rounded-full shadow transform transition-transform duration-300 ${
          value ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default ToggleButton;
