<template>
  <div class="main-container">
    <div class="slogans-wrapper">
      <div class="slogan-one">
        <span>-科技驅動-</span>
        <img src="../assets/images/technology.png" alt="technology-image">
        <router-link to="/about">了解我們&nbsp;&#8614;</router-link>
      </div>
      <div class="slogan-two">
        <span>-專業分析-</span>
        <img src="../assets/images/analysis.png" alt="">
        <router-link to="/services">更多服務項目&nbsp;&#8614;</router-link>
      </div>
      <div class="slogan-three">
        <span>-可靠處理-</span>
        <img src="../assets/images/processing.png" alt="processing-image">
        <router-link to="/successful-cases">成功案例&nbsp;&#8614;</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/mainContentContainerSetting.scss';
$project-font-TC: 'Noto Sans TC', sans-serif;
$gray-blue: #2e3c50;

.main-container {
  @include mainContentContainerSetting;
  height: auto;
  padding-bottom: 40px;

  .slogans-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    .slogan-one,
    .slogan-two,
    .slogan-three {
      width: 90%;
      height: 300px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin: 35px 0;
      overflow: hidden;

      span {
        padding: 5px;
        border-radius: 10px;
        color: rgba($color: #000000, $alpha: 0.8);
        background-color: rgba($color: white, $alpha: 0.1);
        font-family: $project-font-TC;
        font-weight: 700;
        z-index: 99;
      }

      a {
        margin: 10px 0;
        text-decoration: none;
        color: white;
        background-color: rgba($color: white, $alpha: 0.1);
        font-family: $project-font-TC;
        font-weight: 400;
        z-index: 99;
      }

      img {
        width: 100%;
        position: absolute;
        top: 0;
        width: 100%;
        object-fit: cover;
        opacity: 0.7;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .main-container {

    .slogans-wrapper {

      .slogan-one,
      .slogan-two,
      .slogan-three {
        width: 70%
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .main-container {
    .slogans-wrapper {
      width: 85%;
      background-color: rgba($color: lightblue, $alpha: 0.3);

      .slogan-one,
      .slogan-two,
      .slogan-three {
        width: 60%;

        img {
          &:hover {
            transform: scale(1.1);
            transition: transform 0.4s ease
          }
        }

        span {
          font-size: 20px;
          letter-spacing: 0.5px;
        }

        a {
          font-size: 20px;

          &:hover {
            transform: translateX(5px) scale(1.02);
            transition: transform 0.3s;
            color: $gray-blue
          }
        }
      }

      .slogan-one,
      .slogan-three {
        position: relative;
        right: 50px
      }

      .slogan-two {
        position: relative;
        left: 50px
      }
    }
  }
}
</style>
