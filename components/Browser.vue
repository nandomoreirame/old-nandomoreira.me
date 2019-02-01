<template>
  <div class="browser">
    <div class="browser__header">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" version="1.1" baseProfile="full" width="100%" height="70px" id="fullwidth">

        <svg version="1.1" id="browser-head" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 695.3 70.8" baseProfile="full" preserveAspectRatio="none slice" width="100%" height="70px">
          <g id="background">
            <path id="browser-top-background" style="fill:#EBEBEB;" d="M688.8,0H6.5C2.9,0,0,2.9,0,6.5v28.9h695.3V6.5C695.3,2.9,692.4,0,688.8,0z"/>
            <rect id="address-bar-background" y="31.4" style="fill:#E6E6E6;" width="695.3" height="39.4"/>
          </g>
          <path id="address-bar" style="fill:#FFFFFF;" d="M595.9,61.3 h-486.5 c-1,0-1.8-0.8-1.8-1.8 V41.7 c0-1,0.8-1.8,1.8-1.8 h486.5 c1,0,1.8,0.8,1.8,1.8 v17.8 c1,0,-1.8,-0.8,-1.8,1.8z"/>
        </svg>

        <svg version="1.1" id="left-side-buttons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80.7 70.8" style="enable-background:new 0 0 80.7 70.8;" xml:space="preserve" preserveAspectRatio="xMinYMid meet">
          <g id="nav-buttons">
            <path id="forward-button" style="fill:#C8C8C8;" d="M41.2,55.7c0.3-0.3,3.7-3.9,3.7-3.9c0.2-0.2,0.3-0.4,0.3-0.7c0-0.2-0.1-0.5-0.3-0.7 c0,0-3.4-3.6-3.7-3.9c-0.3-0.3-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l3.1,3.2l-3.1,3.2c-0.4,0.4-0.4,0.9,0,1.3 C40.2,56,40.9,56,41.2,55.7z"/>
            <path id="back-button" style="fill:#C8C8C8;" d="M20.2,46.5c-0.3,0.3-3.7,3.9-3.7,3.9c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.5,0.3,0.7 c0,0,3.4,3.6,3.7,3.9c0.3,0.3,1,0.4,1.3,0c0.4-0.4,0.4-0.9,0-1.3l-3.1-3.2l3.1-3.2c0.4-0.4,0.4-0.9,0-1.3 C21.2,46.2,20.5,46.2,20.2,46.5z"/>
            <path id="reload-button" style="fill:#C8C8C8;" d="M72.5,50.7h-1.8l0-0.1c-0.3-2.5-2.3-4.3-4.8-4.3c-2.7,0-4.8,2.2-4.8,4.9 c0,2.7,2.2,4.9,4.8,4.9c1.1,0,2.1-0.4,3-1l0.3-0.2L68,53.5l-0.2,0.2c-0.5,0.4-1.2,0.6-1.8,0.6c-1.7,0-3.1-1.4-3.1-3.1 c0-1.7,1.4-3.1,3.1-3.1c1.5,0,2.8,1.1,3.1,2.6l0,0.2h-1.9l2.7,3L72.5,50.7z"/>
          </g>
        </svg>

        <svg version="1.1" id=“right-side-buttons” xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85.2 70.8" style="enable-background:new 0 0 85.2 70.8;" xml:space="preserve" preserveAspectRatio="xMaxYMid meet">
          <g id="dots">
            <circle id="green-dot" style="fill:#70B34A;" cx="16.9" cy="17.5" r="7.3"/>
            <circle id="yellow-dot" style ="fill:#DDAA54;" cx="41.7" cy="17.5" r="7.3"/>
            <circle id="red-dot" style ="fill:#D5655D;" cx="66.5" cy="17.5" r="7.3"/>
          </g>
          <g id="hamburger-menu">
            <g>
              <path style ="fill:#C8C8C8;" d="M68.2,51h-9.8c-0.4,0-0.8,0.4-0.8,1s0.4,1,0.8,1h9.8c0.4,0,0.8-0.4,0.8-1S68.6,51,68.2,51z M58.4,49h9.8 c0.4,0,0.8-0.4,0.8-1c0-0.5-0.4-1-0.8-1h-9.8c-0.4,0-0.8,0.4-0.8,1C57.6,48.6,58,49,58.4,49z M68.2,54.8h-9.8 c-0.4,0-0.8,0.4-0.8,1c0,0.5,0.4,1,0.8,1h9.8c0.4,0,0.8-0.4,0.8-1C69,55.2,68.6,54.8,68.2,54.8z"/>
            </g>
          </g>
        </svg>

      </svg>
    </div>
    <div class="browser__page">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: 'Google'
    },
    pageAddress: {
      type: String,
      default: 'https://google.com'
    }
  }
}
</script>

<style lang="stylus" scoped>
.browser
  &__header
    display block
    padding 0
    margin 0

  svg
    display inline-block
    margin 0
    padding 0

  #fullwidth
    position relative

  svg#browser-head
    width 100%
    #background
      width 100%
      height 70px
</style>
