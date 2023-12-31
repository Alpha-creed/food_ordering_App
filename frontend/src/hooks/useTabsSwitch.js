
import React, { useEffect, useState } from 'react'

const useTabsSwitch = (tabs,defaultTab) => {
  const [currentTab,setCurrentTab] = useState(defaultTab);

  useEffect(()=>{
    setCurrentTab(defaultTab)
  },[defaultTab])

  const handleTabSwitch = (tab)=>{
    setCurrentTab(tab);
  }

  return [currentTab,handleTabSwitch]
}

export default useTabsSwitch;
