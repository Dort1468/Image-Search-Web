import React from "react";

const About = () => {
  return (
    <div>
      <section className="about-page">
        <h3>這是一個網頁應用程式，允許用戶搜尋、查看和下載各種分類的圖片。</h3>
        <h2>
          該應用程式使用 Pexels API
          來獲取高品質圖片，並提供直觀的用戶體驗和簡潔的響應式設計。
        </h2>
        <ul>
          <li>
            🔍 <strong>圖片搜尋</strong>
            ：用戶可以輸入關鍵字來搜尋圖片，應用程式會透過 Pexels API 獲取結果。
          </li>
          <li>
            📂 <strong>查看圖片</strong>
            ：用戶可以以網格形式查看高品質圖片，點擊圖片可以開啟詳細檢視頁面，顯示更多信息。
          </li>
          <li>
            ⬇️ <strong>下載圖片</strong>：用戶可以直接從網站下載圖片。
          </li>
          <li>
            🌐 <strong>響應式設計</strong>
            ：網站設計為響應式，適用於桌面和移動設備。
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
