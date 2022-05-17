<template>
  <header>
    <div class="logo">
      <router-link to="/home" class="website-title">
        <span>趣</span>
        <span>‧</span>
        <span>臺</span>
        <span>南</span>
      </router-link>
    </div>
    <label class="navbar-toggle-label" for="navbar-toggle">
      <span class="hamburger-top"></span>
      <span class="hamburger-middle"></span>
      <span class="hamburger-bottom"></span>
    </label>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">關於本站</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/home">回到首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/my_favorite_list"
            >我的收藏</router-link
          >
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
  background-image: linear-gradient(
    to right,
    #ffffe0,
    #effed6,
    #d9fed2,
    #bdfed4,
    #9bfddc,
    #96f8cf,
    #92f2c1,
    #8fecb3,
    #b4dd8c,
    #d4cb73,
    #eeb66d,
    #ffa07a
  );
  opacity: 1;
  box-shadow: 0 2px 10px $gray-blue;
  z-index: 999;
}

// hamburger
.hamburger-middle {
  width: 25px;
  height: 3px;
  position: relative;
  left: 35px;
  display: inline-block;
  border-radius: 10px;
  background-color: $gray-blue;
  margin: 7px 0;
}

.hamburger-top,
.hamburger-bottom {
  width: 25px;
  height: 3px;
  position: relative;
  left: 35px;
  display: inline-block;
  border-radius: 10px;
  background-color: $gray-blue;
}

// navbar
nav {
  // all: unset;
  width: 100%; // 讓navbar寬度為header寬度之100%
  position: absolute;
  top: 100%; // navbar從header底部開始做展開延伸
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    #ffffe0,
    #effed6,
    #d9fed2,
    #bdfed4,
    #9bfddc,
    #96f8cf,
    #92f2c1,
    #8fecb3,
    #b4dd8c,
    #d4cb73,
    #eeb66d,
    #ffa07a
  );
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);

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

      // &:hover {
      //   transform: scale(1.1);
      //   transition: 0.2s;
      // }
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
  // position: absolute;
  // top: 0;
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

  .website-title {
    color: $gray-blue;
    font-family: $project-font-TC;
    font-size: 24px;
    text-decoration: none;
    text-shadow: 2px 2px 2px gray;
  }
}

@media screen and (min-width: 768px) {
  // nav {
  //   position: absolute;
  //   left: 0;
  // }
  // .navbar-toggle {
  //   &:checked {
  //     ~ nav {
  //       transform: scale(0.9, 1);
  //     }
  //   }
  // }
  // header {
  //   max-width: 100%;
  // }
  // .logo {
  //   position: relative;
  //   left: 120px;
  // }
  // .navbar-toggle-label {
  //   display: none;
  // }

  // nav {
  //   all: unset;
  //   width: 50%;
  //   transform: translateX(50%);
  //   align-items: center;
  //   .nav-list {
  //     width: 90%;
  //     display: flex;
  //     flex-direction: row;
  //     .nav-item {
  //       width: 40%;
  //       display: flex;
  //       align-items: center;
  //     }
  //   }
  // }
}

@media screen and (min-width: 1024px) {
  // nav {
  //   .nav-list {
  //     .nav-link {
  //       font-size: 16px;
  //     }
  //   }
  // }
}

@media screen and (min-width: 1200px) {
  .logo {
    left: 10%;
  }

  .navbar-toggle-label {
    display: none;
  }

  nav {
    all: unset;
    width: 70%;
    margin: 0 auto;

    .nav-list {
      flex-direction: row;
      margin-bottom: 0;
      justify-content: space-evenly;
    }
  }
}
</style>
