Vue.component('translation', {
    props: ['word'],
  
    data () {
      return {
        showWords: false,

      }
    },
  
    methods: {
      toggleShowWords () {
        this.showWords = !this.showWords
  
        this.$emit('change-color', this.showWords ? 'FF96C8' : '3D3D3D')
      }
    },
  
    computed: {
      title () {
        return `${this.header.title}`
      },
  

    },
  
    created () {
      console.log('Created CoinDetail...')
    },
  
    mounted () {
      console.log('Mounted CoinDetail...')
    },
  
  
    template: `
      <div>
        
        
  
        <input type="text">
        <span></span>

        <input type="text">
        <span></span>
  
        <slot name="text"></slot>
        <slot name="text"></slot>
  
        <ul v-show="showWords">
          <li
            class="uppercase"
            v-bind:class="{ orange: p.value === word.title }"
            
          </li>
        </ul>
      </div>
    `
  })
  
  Vue.component('translate-button', {

    template:

    `<div>
        <button>Translate</button>
    </div>
    `
    
  })
  
  new Vue({
    el: '#app',
  
    data () {
      return {
        header: {
          title: 'Mini-Translator',  
        },
        
        color: 'f4f4f4',
      }

    },
  
    created () {
      console.log('Created...')
    },
  
    mounted () {
      console.log('Mounted...')
    },
  
    methods: {
      updateColor (color) {
        this.color = color || this.color
          .split('')
          .reverse()
          .join('')
      }
    }
  })