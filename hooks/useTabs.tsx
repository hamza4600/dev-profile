import { useState, useCallback } from 'react';

type TabHandler = (index: number) => void;

const useTabs = (init: number = 0): [number, TabHandler] => {
  const [activeTab, setActiveTab] = useState<number>(init);

  const handleTabClick = useCallback((index: number): void => {
    setActiveTab(index);
  }, []);

  return [activeTab, handleTabClick];
};

export default useTabs;