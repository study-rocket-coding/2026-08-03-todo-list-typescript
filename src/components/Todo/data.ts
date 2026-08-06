import type { Filter } from '../../types/todo';

type FilterTab = {
  name: string;
  dataTab: Filter;
};

export const filterTabs: FilterTab[] = [
  {
    name: '全部',
    dataTab: 'all',
  },
  {
    name: '待完成',
    dataTab: 'pending',
  },
  {
    name: '已完成',
    dataTab: 'completed',
  },
];
