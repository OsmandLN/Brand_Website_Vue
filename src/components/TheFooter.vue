<template>
  <footer>
    <!-- <span class="data-source">
      資料來源: Data.Tainan 臺南市政府資料開放平台
    </span> -->
    <span class="contributor-name">All right reserved by Osmand ‧ 2022</span>
  </footer>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;
$gray-blue: #2e3c50;

footer {
  width: 100%;
  height: 6vh;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-image: linear-gradient(
  //   to right,
  //   #ffffe0,
  //   #effed6,
  //   #d9fed2,
  //   #bdfed4,
  //   #9bfddc,
  //   #96f8cf,
  //   #92f2c1,
  //   #8fecb3,
  //   #b4dd8c,
  //   #d4cb73,
  //   #eeb66d,
  //   #ffa07a
  // );
  background-color: rgba($color: white, $alpha: 1);
  box-shadow: 0 2px 10px $gray-blue;
  z-index: 999;

  // .data-source {
  //   margin: 0 15px;
  // }

  span {
    font-family: $project-font-TC;
    font-size: 12px;
    text-shadow: 1.5px 2px 2px gray;
  }
}

@media screen and (min-width: 768px) {
  footer {
    span {
      font-size: 14px;
    }
  }
}

@media screen and (min-width: 1024px) {
  footer {
    flex-direction: row;
    span {
      font-size: 16px;
    }
  }
}
</style>
