export const fields = [
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    placeholder: '請輸入 email',
    required: '請輸入 email',
    rules: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: '請輸入正確的 email 格式',
      },
    },
  },
  {
    label: '密碼',
    name: 'password',
    type: 'password',
    placeholder: '請輸入密碼',
    required: '請輸入密碼',
  },
];

export const subTitle = '最實用的線上待辦事項服務';
