import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  //appに挿入する処理
  inject('md', new MarkdownIt())
}
