function FilterTodoBtn({ name, dataTab, isSelected, onFilter }) {
  return (
    <button
      type="button"
      data-tab={dataTab}
      className={`flex-1 py-4 px-2 text-label text-center bg-transparent border-b-2 cursor-pointer transition-colors ${isSelected ? 'font-bold text-gray-900 border-gray-900' : 'font-normal text-gray-400 border-transparent hover:text-gray-600'}`}
      onClick={() => onFilter(dataTab)}
    >
      {name}
    </button>
  );
}

export default FilterTodoBtn;
