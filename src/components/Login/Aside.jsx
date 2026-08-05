function Aside({ variant = "login" }) {
  const isLogin = variant === "login";

  return (
    <div className="flex-1 min-w-[280px] bg-brand-800 text-white py-12 px-10 flex flex-col justify-center gap-7">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-control bg-white text-brand-800 flex items-center justify-center text-display font-bold">
          ✓
        </div>
        <span className="font-bold tracking-wider text-label">ONLINE TODO LIST</span>
      </div>

      {isLogin && (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3">
            <div className="w-icon-md h-icon-md rounded-indicator flex-shrink-0 bg-brand-500" />
            <div className="h-2.5 rounded-pill bg-brand-600 w-[70%]" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-icon-md h-icon-md rounded-indicator flex-shrink-0 bg-white text-brand-800 flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div className="h-2.5 rounded-pill bg-brand-500 w-[88%]" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-icon-md h-icon-md rounded-indicator flex-shrink-0 bg-brand-500" />
            <div className="h-2.5 rounded-pill bg-brand-600 w-[55%]" />
          </div>
        </div>
      )}

      <p className="text-display font-bold leading-relaxed m-0">
        {isLogin ? (
          <>一件一件完成，<br />每一步都算數。</>
        ) : (
          <>開始建立習慣，<br />從第一個待辦開始。</>
        )}
      </p>
      <p className="text-label leading-relaxed m-0 text-brand-200">
        {isLogin ? "今天的清單，今天就開始。" : "加入後即可同步管理你的每日清單。"}
      </p>
    </div>
  )
}

export default Aside;
