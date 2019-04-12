export const source = [
  require('~/imgs/loading0001.png'),
  require('~/imgs/loading0002.png'),
  require('~/imgs/loading0003.png'),
  require('~/imgs/loading0004.png'),
  require('~/imgs/loading0005.png'),
  require('~/imgs/loading0006.png'),
  require('~/imgs/loading0007.png'),
  require('~/imgs/loading0008.png'),
  require('~/imgs/loading0009.png'),
  require('~/imgs/loading0010.png'),
  require('~/imgs/loading0011.png'),
  require('~/imgs/loading0012.png'),
  require('~/imgs/loading0013.png'),
  require('~/imgs/loading0014.png'),
  require('~/imgs/loading0015.png'),
  require('~/imgs/loading0016.png'),
  require('~/imgs/loading0017.png'),
  require('~/imgs/loading0018.png'),
  require('~/imgs/loading0019.png'),
  require('~/imgs/loading0020.png'),
  require('~/imgs/loading0021.png'),
  require('~/imgs/loading0022.png')
]

export function setImagePerformLoop(call) {
  const getImageCount = () => (this._source && this._source.length) || 0
  const getImageIndex = progress => {
    const index = parseInt(Math.min(progress, 1) * 10)
    return Math.max(0, index - 1)
  }
  return {
    source: source => this._source = source,
    setProgress: progress => call && call(getImageIndex(progress)),
    setLoop: () => {
      if (this._timer) clearInterval(this._timer)
      this._count = 0
      this._timer = setInterval(() => {
        call && call(this._count % getImageCount())
        this._count++
      }, 80)
    },
    setStop: () => {
      this._timer && clearInterval(this._timer) && (this._timer = null)
      call && call(9)
    }
  }
}
