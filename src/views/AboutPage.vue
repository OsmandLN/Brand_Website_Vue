<template>
  <div class="about-description">
    <p>
      創立於2022年，TechPro由專業由具有化工、機械、材料、電機、資訊、企管、會計專業背景的人才所組成。
      除了網羅具有豐富業界經驗的經理人，也廣納專業研究人員加入團隊，我們相信在經驗與專業知識的相輔相成之下，除了能讓公司穩健成長之外，更重要的是能替客戶帶來成功。
    </p>
  </div>
</template>

<style lang="scss" scoped>
// @import '../assets/scss/mainContentContainerSetting.scss';
$project-font-TC: 'Noto Sans TC', sans-serif;

.about-description {
  @include mainContentContainerSetting;
  height: 84vh;
  display: flex;
  justify-content: center;
  background-image: url('@/assets/images/about-bg.png');

  p {
    width: 85%;
    height: 65%;
    display: flex;
    align-items: center;
    position: relative;
    top: 3rem;
    border-radius: 5px;
    padding: 10px;
    font-family: $project-font-TC;
    text-align: center;
    color: white;
    line-height: 2rem;
    background-color: rgba($color: white, $alpha: 0.2);
  }
}

@media screen and (min-width: 768px) {
  .about-description {
    p {
      width: 75%;
      height: 50%;
    }
  }
}

@media screen and (min-width: 1024px) {
  .about-description {
    p {
      width: 50%;
    }
  }
}

@media screen and (min-width: 1200px) {
  .about-description {
    p {
      height: 40%;
    }
  }
}
</style>
