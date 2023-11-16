---
sidebar_position: 0
---

# Gson Liang

## 聯絡資訊

電子信箱: [yuanyu90221@gmail.com](mailto:yuanyu90221@gmail.com)

## 工作經歷

- 2022.11-now: [TKspring](https://www.cakeresume.com/companies/tkspring) 後端工程師
- 2019.11-2021.10: [成境科技](https://www.104.com.tw/company/1a2x6bkrmi) 後端工程師
- 2017.10-2019.10： [Coolbitx](https://coolbitx.com/) 全端工程師
- 2016.04-2017.10： [Gorilla Tech](https://www.104.com.tw/company/wilokdc) 網頁開發工程師
- 2015.04-2016.04: [SYSCOM](https://www.syscom.com.tw/) 軟體開發工程師
- 2014.04-2015.04: [ASUS](https://www.asus.com/in/About_ASUS/Company-Introduction/) 軔體開發工程師

## 學歷

- 2010.09-2012.09 [國立交通大學](https://www.nctu.edu.tw/) 資工所 論文[影像與倒影之對稱偵測](https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22101NCTU5394033%22.&searchmode=basic)
- 2006.09-2012.06 [國立中興大學](https://www.nchu.edu.tw/index1.php) 應用數學系

## 擁有技能

- 自動化測試環境
  Github Action
  Gitlab Pipeline
  Gitea Drone
- 雲端環境與容器技術
  AWS
  Heroku
  Docker
- 後端程式語言
  nodejs
  java
- 前端程式框架
  vue
  bulma
- 資料庫
  Postgresql
  Mongo
  DynamoDB
- 快取
  Redis
  
## 簡歷

### 自我介紹

你好，我叫梁元宇。參與過的工作是主要負責後端開發與雲端環境部署。
我是一個喜歡用技術解決問題的人

以下說明我用技術解決過的問題：

- 在原本的程式碼功能未驗證的部份加入了自動化測試，提升開發的程式碼品質與提高有效驗證開發功能

在過去待過的公司中根據不同的版控系統設置了不同的自動化測試環境
舉例來說: Gitlab 中使用 Pipeline(gitlab-ci), Github 用 Github Action
在Coolbitx 時， 我在 Gitlab Pipeline 加入測試驗證了，每個區塊鏈交易時間格式顯示正確。
在RedPill 時， 我在 Github Action 加入驗證測試了，確認Promo Code 發行正確不重複。

- 讓手動部署變成自動部署，讓部署環境能夠透過程式碼有效管控(infra as code)

在 RedPill， 使用了 aws cdk 來做環境部署
在 Coolbitx， 使用了 beanstalk 來做環境部署

- 讓服務能夠再部署後有效通知給開發團隊

在 RedPill， 透過 AWS CloudWatch 設置Metric 把蒐集到的有問題的狀態推波到 slack，讓開發團隊能夠有效率去檢查問題。
在 Coolbitx， 透過 AWS CloudWatch 設置Metric 把蒐集到的有問題的狀態推波到 slack，讓 App 團隊能夠有效率去檢查問題

- 透過 git submodule 切分出公用函式庫，讓各團隊開發不會相互影響

在 Coolbitx 時，因為 ReactNative 架構的關係，兩個平台(Android, IOS)會在開發新的功能時相互影響。所以我把 Coolbitx Wallet 這個 ReactNatvie app 對區塊鏈處理的部份，獨立出一個 core library 分出一個 submodule， 讓 Android 與 IOS 開發團隊可以根據自己開發周期取用對應的 core library

- 透過 Docker 降低開發環境建制難度

在 Coolbitx 時，開發 Sygna Bridge 這個稽核功能有用到 AWS SQS 以及 AWS DynamoDB。為了方便開發，我在本機環境寫了 Docker file 建制了一個測試模擬環境，方便開發人員快速開發及驗證

### IT 鐵人賽紀錄

- [從以太坊白皮書理解 web 3 概](https://ithelp.ithome.com.tw/users/20111580/ironman/5266)
 透過以太坊白皮書理解區塊鏈技術
- [圖解 blind 75: 以圖解方式練習解題 （2022.9)](https://ithelp.ithome.com.tw/users/20111580/ironman/4951)
 透過練習 blind 75 ，來整理過去學過的演算法與資料結構
- [k8s 入門學習 30天(2021.10)](https://ithelp.ithome.com.tw/users/20111580/ironman/3931)
 撰寫 30 篇文章分享，由 [k8s 官網](https://kubernetes.io/docs/concepts/overview/)所學到的基礎知識
- [golang leetcode 30天挑戰(2020.8)](https://ithelp.ithome.com.tw/users/20111580/ironman/2981)
 紀錄30天用 golang 練習 leetcode 的解題思考過程
- [Vue.js Web Component 基礎以及 Vuex狀態管理(2019.8)](https://ithelp.ithome.com.tw/users/20111580/ironman/2386)
 撰寫了 8 篇文章來分享關於 Vue.js 以及 Vuex 的基礎知識

### 個人特質

我本身是一個喜歡團隊合作的人。在過去幾間公司裡，常常透過與團隊討論研究來解決問題，而在問題解決後也喜歡分享解決問題的過程

從自我介紹與鐵人賽也可以知道我是喜歡研究新技術的人。對於能解決問題的新技術，我向來是熱於追求

喜歡用有效的方式做事情，對於無意義的加班很排斥！

### 總結

最近的兩份工作裡用到的技術棧主要是以 nodejs 為主，本身不排斥學習新的語言，但需要給予合理的學習時間還有幫助。

感謝您撥空閱讀本人履歷，希望有進一步面談的機會。除了讓我了解貴單位的詳細需求，貴單位也可以更加了解我的能力和人格特質，謝謝。
