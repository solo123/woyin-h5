class SimpleScroll {
  constructor(container, callback) {
    this.container = container
    this.callback = callback

    this.isLoading = false

    this.handleScroll = this.handleScroll.bind(this)

    this.scroller = this.container.children[0]
    this.container.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if(this.isLoading) {return}

    const scrollTop = this.container.scrollTop
    const winHeight = this.container.offsetHeight
    const docHeight = this.scroller.offsetHeight   

    if((scrollTop + winHeight) >= docHeight){
      this.isLoading = true
      this.callback()
    }
  }

  scrollTo() {
    this.container.scrollTop = 0
  }

  closeScroll() {
    this.isLoading = true
  }

  finish() {
    this.isLoading = false
  }

  destroy() {
    this.container.removeEventListener('scroll', this.handleScroll)
  }
}

export default SimpleScroll