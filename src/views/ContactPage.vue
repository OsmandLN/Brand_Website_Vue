 <template>
  <CompanyLocationMap />
  <form action="" class="contact-form" id="contact-form">
    <span>Please feel free to contact us.</span>
    <div class="appellation">
      <label for="">Appellation:</label>
      <select name="appellation-selection" id="appellation-selection">
        <option value="mr.">Mr.</option>
        <option value="mrs.">Mrs.</option>
        <option value="ms.">Ms.</option>
      </select>
    </div>
    <div class="name">
      <label for="">Name:</label>
      <input type="text">
    </div>
    <div class="email">
      <label for="">Email:</label>
      <input type="text">
    </div>
    <div class="message-content">
      <label for="">Message:</label>
      <textarea name="message-content" id="message-content" cols="25" rows="5"></textarea>
    </div>
    <button class="submit-btn">Submit</button>
  </form>
</template>

<style lang="scss" scoped>
$project-font-TC: 'Noto Sans TC', sans-serif;
$gray-blue: #2e3c50;

// contact form
@mixin formColumnSetting {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0;
}

.contact-form {
  @include mainContentContainerSetting;
  top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $project-font-TC;
  // outline: red 3px solid;

  span {
    margin: 0 0 20px 0;
    font-size: 20px;
    font-weight: 700;
  }

  label {
    margin-right: 10px
  }

  select,
  input,
  textarea {
    background-color: rgba($color: $gray-blue, $alpha: 0.1);
    border: rgba($color: $gray-blue, $alpha: 0.1) 1px solid;
    border-radius: 6px;
  }

  .appellation {
    margin: 10px
  }

  .name {
    @include formColumnSetting()
  }

  .email {
    @include formColumnSetting()
  }

  .message-content {
    @include formColumnSetting()
  }

  .submit-btn {
    border: $gray-blue 1px solid;
    border-radius: 10px;
    margin: 10px
  }
}

@media screen and (min-width: 768px) {
  .contact-form {

    .name,
    .email,
    .message-content {
      width: 60%
    }
  }
}

@media screen and (min-width: 1024px) {
  .contact-form {

    .name,
    .email,
    .message-content {
      width: 45%
    }

    .submit-btn {
      &:hover {
        background-color: $gray-blue;
        color: white
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .contact-form {

    .name,
    .email,
    .message-content {
      width: 30%
    }
  }
}
</style>

<script>
import CompanyLocationMap from '@/components/CompanyLocationMap.vue'

export default {
  components: {
    CompanyLocationMap
  }
}
</script>
