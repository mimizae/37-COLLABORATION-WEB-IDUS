import * as styles from "./tab-bar.css";

interface TabBarProps {
  activeTab: "product-info" | "review" | "recommend";
  onTabClick: (tab: "product-info" | "review" | "recommend") => void;
}

export const TabBar = ({ activeTab, onTabClick }: TabBarProps) => {
  const tabs = [
    { id: "product-info" as const, label: "작품 정보" },
    { id: "review" as const, label: "후기 634" },
    { id: "recommend" as const, label: "추천" },
  ];

  return (
    <div className={styles.tabBar}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          aria-selected={activeTab === tab.id}
          className={styles.tab({ active: activeTab === tab.id })}
          onClick={() => onTabClick(tab.id)}>
          {tab.label}
        </button>
      ))}
    </div>
  );
};
