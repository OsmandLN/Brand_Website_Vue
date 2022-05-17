<template>
  <div
    v-for="touristAttraction in touristAttractions"
    :key="touristAttraction.id"
    class="attraction-card"
    style="width: 18rem"
  >
    <!-- <img src="" class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title">{{ touristAttraction.name }}</h5>
      <!-- Button to trigger the modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#attractionIntroductionModal"
      >
        景點介紹
      </button>
      <button>
        <i class="fas fa-heart add-to-favorite"></i>
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="attractionIntroductionModal"
      tabindex="-1"
      aria-labelledby="attractionIntroductionModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="attractionIntroductionModalLabel">
              {{ touristAttractionDetail.name }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {{ touristAttractionDetail.introduction }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.attraction-card {
  border: lightslategray 1px solid;
  margin: 30px 0;
  .add-to-favorite {
    font-size: 28px;
    color: navy;
  }
}
</style>
<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      id: '',
      touristAttractions: [],
      // touristAttraction: {},
      touristAttractionDetail: {}
    }
  },
  methods: {
    getTouristAttractionDetail(touristAttraction) {
      this.touristAttractionDetail = touristAttraction
    }
  },
  mounted: function () {
    axios
      .get('/tainan_tourist_attractions.json')
      .then((response) => {
        console.log(response.data)
        this.touristAttractions = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
