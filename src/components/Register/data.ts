export const fields = [
  {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "請輸入 email",
    required: "請輸入 email",
    rules: {
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "請輸入正確的 email 格式" }
    }
  },
  {
    label: "您的暱稱",
    name: "name",
    type: "text",
    placeholder: "請輸入您的暱稱",
    required: "請輸入您的暱稱"
  },
  {
    label: "密碼",
    name: "password",
    type: "password",
    placeholder: "請輸入密碼",
    required: "請輸入密碼",
    rules: {
      minLength: { value: 6, message: "密碼至少需要 6 個字元" }
    }
  },
  {
    label: "再次輸入密碼",
    name: "password2",
    type: "password",
    placeholder: "請再次輸入密碼",
    required: "請再次輸入密碼",
    rules: {
      minLength: { value: 6, message: "密碼至少需要 6 個字元" },
      validate: (value, { password }) =>
        value === password || "再次輸入的密碼不符",
    }
  },
]

export const subTitle = "註冊帳號"