import { props, setting as $setting } from './type'

export default {
  name: 'vb-el-button',
  props,
  data () {
    return {
      $setting: Object.freeze($setting)
    }
  },
  render (h) {
    return (
      <el-button
        size={this.size}
        type={this.type}
        loading={this.loading}
      >{this.text}
      </el-button>
    )
  }
}
