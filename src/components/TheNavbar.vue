<template>
  <header>
    <div class="logo">
      <router-link to="/" class="brand-name">
        <i class="fa-solid fa-leaf"></i>
        TechPro
      </router-link>
    </div>
    <label class="navbar-toggle-label" for="navbar-toggle">
      <span
        class="hamburger-top"
        @click="onHamburgerChanged"
        :class="{ rotateClockwise: topHamburgerRotated }"
      ></span>
      <span
        class="hamburger-middle"
        @click="onHamburgerChanged"
        :class="{ disappeared: middleHamburgerDisappeared }"
      ></span>
      <span
        class="hamburger-bottom"
        @click="onHamburgerChanged"
        :class="{ rotateAntiClockwise: bottomHamburgerRotated }"
      ></span>
    </label>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link class="nav-link" to="/">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">關於我們</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/services">服務項目</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/successful-cases"
            >成功案例</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">聯絡我們</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;
$gray-blue: #2e3c50;

// header
header {
  min-width: 320px;
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  display: flex;
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
  background-color: rgba($color: white, $alpha: 0.5);
  box-shadow: 0 2px 10px $gray-blue;
  z-index: 999;
}

// hamburger
.hamburger-middle {
  width: 26px;
  height: 3px;
  position: relative;
  left: 35px;
  display: inline-block;
  border-radius: 10px;
  background-color: $gray-blue;
  margin: 8px 0;
}

.hamburger-top,
.hamburger-bottom {
  width: 26px;
  height: 3px;
  position: relative;
  left: 35px;
  display: inline-block;
  border-radius: 10px;
  background-color: $gray-blue;
}

.rotateClockwise {
  transform: rotate(45deg) translateY(15.5px);
  transition: 0.3s ease-in-out;
}

.disappeared {
  transform: translateX(-200px);
}

.rotateAntiClockwise {
  transform: rotate(-45deg) translateY(-15.5px);
  transition: 0.3s ease-in-out;
}

// navbar
nav {
  // all: unset;
  width: 100%; // 讓navbar寬度為header寬度之100%
  position: absolute;
  top: 100%; // navbar從header底部開始做展開延伸
  display: flex;
  justify-content: center;
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
  background-color: rgba($color: white, $alpha: 0.9);
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  // box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  .nav-item {
    height: 30px;

    .nav-link {
      color: $gray-blue;
      font-family: $project-font-TC;
      font-weight: normal;
    }
  }
}

.navbar-toggle {
  display: none;

  &:checked {
    ~ nav {
      transform: scale(1, 1);

      .nav-item {
        opacity: 1;
        transition: opacity 0.3s ease 0.1s;
      }
    }
  }
}

.navbar-toggle-label {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

// logo

.logo {
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: center;
  transform: translateX(-50%);

  .brand-name {
    color: $gray-blue;
    font-family: $project-font-TC;
    font-size: 24px;
    text-decoration: none;
    text-shadow: 2px 2px 2px gray;
  }
}

@media screen and (min-width: 576px) {
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 1024px) {
  .logo {
    left: 15%;
  }

  .navbar-toggle-label {
    display: none;
  }

  nav {
    all: unset;
    width: 70%;
    position: relative;
    left: 10%;
    margin: 0 auto;

    .nav-list {
      flex-direction: row;
      margin-bottom: 0;
      justify-content: space-evenly;
    }

    .nav-item {
      .nav-link {
        &:hover {
          text-shadow: 1.5px 2px 2px gray;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      topHamburgerRotated: false,
      middleHamburgerDisappeared: false,
      bottomHamburgerRotated: false
    }
  },
  methods: {
    onHamburgerChanged() {
      this.topHamburgerRotated = !this.topHamburgerRotated
      this.middleHamburgerDisappeared = !this.middleHamburgerDisappeared
      this.bottomHamburgerRotated = !this.bottomHamburgerRotated
    }
  }
}
</script>
