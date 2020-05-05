export default function toHtml (vm, option) {
  let app = document.querySelector(option.$el)
  app.innerHTML = stringToHtml(vm, option.template)
}

function stringToHtml (vm, template) {
  template = template.replace(/\s+/g, "").replace(/[\r\n]/g, "")
  let match = null
  while (match = template.match(/{{([^{{]+)}}/)) {
    template = template.replace(match[0], vm[match[1]])
  }
  return template
}