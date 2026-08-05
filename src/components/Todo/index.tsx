import { useState } from 'react';
import Nav from './Nav';
import AddTodoForm from './AddTodoForm';
import { filterTabs } from './data';
import FilterTodoBtn from './FilterBtn';
import TodoListItem from './TodoListItem';
import { useTodos } from '../../hooks/useTodos';

function Todolist() {
  const [filter, setFilter] = useState('all');

  const {
    todos,
    isAdding,
    isLoading,
    errorLog,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
    clearCompleted,
  } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'pending':
        return !todo.status;
      case 'completed':
        return todo.status;
      default:
        return true;
    }
  });

  const completedTodos = todos.filter((todo) => todo.status);
  const total = todos.length;
  const completedCount = completedTodos.length;
  const pct = total ? Math.round((completedCount / total) * 100) : 0;

  let motivationTitle, motivationSubtext;
  if (total === 0) {
    motivationTitle = '開始你的第一步';
    motivationSubtext = '新增待辦事項，讓每一天都有進度。';
  } else if (pct === 100) {
    motivationTitle = '太棒了，全部完成！';
    motivationSubtext = '今天的清單已經清空，休息一下吧。';
  } else if (pct === 0) {
    motivationTitle = '今天的待辦都在等你';
    motivationSubtext = '先完成一項，感受一下推進的感覺。';
  } else {
    motivationTitle = '持續推進中';
    motivationSubtext = `已完成 ${completedCount} 項，還差 ${total - completedCount} 項就達標。`;
  }

  const showEmptyState = !isLoading && total === 0 && errorLog.length === 0;

  return (
    <main id="todoListPage" className="min-h-screen bg-gray-50">
      <Nav />
      <div className="max-w-[640px] mx-auto px-5 py-7 pb-16 flex flex-col gap-section-gap">
        {total > 0 && (
          <div className="bg-brand-100 rounded-card px-card-x py-card-y">
            <div className="flex justify-between items-center">
              <span className="font-bold text-subtitle text-brand-800">
                {motivationTitle}
              </span>
              <span className="font-brand-mono font-semibold text-label text-brand-800">
                {completedCount}/{total}
              </span>
            </div>
            <div className="h-2 rounded-pill bg-brand-300 mt-3 overflow-hidden">
              <div
                className="h-full rounded-pill bg-brand-800 transition-all duration-300 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-2.5 mb-0 text-caption text-brand-700">
              {motivationSubtext}
            </p>
          </div>
        )}

        <AddTodoForm onAdd={addTodo} isAdding={isAdding} />

        <div className="bg-white rounded-card shadow-card overflow-hidden">
          <div className="flex">
            {filterTabs.map((filterTab) => (
              <FilterTodoBtn
                key={filterTab.dataTab}
                {...filterTab}
                isSelected={filter === filterTab.dataTab}
                onFilter={setFilter}
              />
            ))}
          </div>
          <div className="px-5 pt-5 pb-6">
            {isLoading && (
              <div className="flex flex-col gap-2.5 mb-1">
                <div className="h-11 rounded-control bg-gray-100 animate-pulse" />
                <div className="h-11 rounded-control bg-gray-100 animate-pulse" />
                <div className="h-11 rounded-control bg-gray-100 animate-pulse" />
              </div>
            )}

            {errorLog.length > 0 && (
              <div className="flex flex-col gap-2 mb-3.5">
                {errorLog.map((msg, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-control px-4 py-3 text-label"
                  >
                    <span className="font-bold">!</span>
                    <span>{msg}</span>
                  </div>
                ))}
              </div>
            )}

            {showEmptyState && (
              <div className="text-center py-8 px-3 text-gray-500">
                <p className="text-subtitle font-bold text-gray-900 m-0 mb-1.5">
                  尚無待辦事項
                </p>
                <p className="text-caption m-0">
                  新增第一筆待辦，開始今天的進度。
                </p>
              </div>
            )}

            {!isLoading && filteredTodos.length > 0 && (
              <ul className="list-none m-0 mb-1 p-0 max-h-[420px] overflow-y-auto flex flex-col">
                {filteredTodos.map((todo) => (
                  <TodoListItem
                    key={todo.id}
                    {...todo}
                    onDelete={removeTodo}
                    onToggle={toggleTodo}
                    onEdit={editTodo}
                  />
                ))}
              </ul>
            )}

            <div className="flex justify-between items-center mt-2.5">
              <p className="text-caption text-gray-500 m-0">
                {' '}
                {completedCount} 個已完成項目
              </p>
              <button
                type="button"
                className="text-caption text-gray-500 bg-none border-none cursor-pointer underline hover:text-red-600 transition-colors"
                onClick={() => clearCompleted()}
              >
                清除已完成項目
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todolist;
