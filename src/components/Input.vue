<script>

export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: 'default',
    },
    placeholder: {
      type: String,
      required: false,
    },
    action: {
      type: Function,
      required: false,
    },
    min: {
      type: Number,
      required: false,
    },
    max: {
      type: Number,
      required: false,
    },
    step: {
      type: Number,
      required: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    value: {
      type: null,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    supportMessage: {
      type: String,
      default: '',
    },
  },
  // eslint-disable-next-line
  render: function (createElement) {
    return createElement(
      'div', {
        class: `input-atom is--${this.variant}`,
      },
      [
        this.div,
        createElement(
          'label', {
            class: `input-atom is--${this.variant}`,
            attrs: {
              for: this.id,
            },
          },
          this.label,
        ),
        createElement(
          'input', {
            class: `is--${this.variant}`,
            attrs: {
              placeholder: this.placeholder,
              id: this.id,
              type: this.type,
              name: this.name,
              autocomplete: this.autocomplete,
              min: this.min,
              max: this.max,
              step: this.step,
              value: this.value,
              disabled: this.disabled,
            },
            on: {
              input: (event) => {
                if (this.type === 'text' || this.type === 'password' || this.type === 'search' || this.type === 'number') {
                  this.$emit('emitInputValue', event.target.value);
                }
                if (this.type === 'range') {
                  this.$emit('emitInputValue', parseInt(event.target.value, 10));
                }
                if (this.type === 'date') {
                  this.$emit('emitInputValue', event.target.value);
                }
                if (this.type === 'file') {
                  this.$emit('emitInputValue', event.target.files[0]);
                }
                if (this.action) { this.action(); }
              },
            },
          },
        ),
        this.$slots.default,
        createElement(
          'p', {
            class: `support-message is--${this.supportMessage.variant}`,
          },
          this.supportMessage.message,
        ),
      ],
    );
  },
  mounted() {
    if (this.type === 'range') this.addRangeAttributes();
  },
  methods: {
    addRangeAttributes() {
      if (this.min) {
        this.$el.min = this.min;
      }
      if (this.max) {
        this.$el.max = this.max;
      }
      if (this.step) {
        this.$el.step = this.step;
      }
    },
  },
};
</script>

<style lang="sass" scoped>

@import @/styles/base

input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder
  transition: .4s ease
  opacity: 0

::-webkit-input-placeholder
  color: hsla(0, 0%, 53%, 1)

.input-atom
  display: block
  position: relative
  width: 100%
  max-width: gridColumns(6)

  label
    position: absolute
    top: gap(5)
    left: gap(20)
    +fontset(regular-12)
    text-align: left
    +interact
      cursor: text

  input
    padding: gap(20) gap(20) gap(5) gap(20)
    height: px(60)
    width: 100%
    max-width: gridColumns(6)
    background-color: color(gray-1, 1)
    +fontset(regular-16)

    &:disabled
      opacity: .75

  svg
    position: absolute
    top: px(60)/2
    right: gap(20)
    transform: translateY(-50%)
    width: auto
    height: px(20)
    color: color(gray-2)
    fill: color(gray-2)

  p.support-message
    margin-top: gap(5)
    margin-left: gap(20)
    +fontset(regular-12)
    text-align: left

    &.is--error
      color: color(alert)

</style>
