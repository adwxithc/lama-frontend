import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface TabMenuProps{
    tabs:{
        id:number,
        label:string,
        content:ReactNode
    }[]
}

const TabMenu = ({tabs}:TabMenuProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="relative flex border-b-2 ">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className="py-2 px-4 -mb-px font-semibold relative"
            onClick={() => setActiveTab(tab.id)}
            initial={false}
            animate={{
              color: activeTab === tab.id ? '#7E22CE' : '#6b7280', // Change text color
            }}
            transition={{ duration: 0.3 }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                style={{ borderRadius: '4px' }}
              />
            )}
          </motion.button>
        ))}
      </div>
      <div className="relative mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-opacity duration-300 absolute inset-0 ${
              activeTab === tab.id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
