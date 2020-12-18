const { setTimeout2, clearTimeout2 } = require('./utilities')

describe('the setTimeout2 function', () => {
  beforeEach(() => jest.useFakeTimers())
  afterEach(() => jest.clearAllTimers())

  it('should fire the callback when the delay period is zero', () => {
    const callback = jest.fn()
    setTimeout2(callback, 0)
    jest.runAllTimers()
    expect(callback).toHaveBeenCalled()
  })

  it('should NOT fire the callback before the delay period has elapsed', () => {
    const callback = jest.fn()
    setTimeout2(callback, 100)
    jest.advanceTimersByTime(50)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should fire the callback only once when delay period has elapsed', () => {
    const callback = jest.fn()
    setTimeout2(callback, 100)
    jest.advanceTimersByTime(50)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should ensure arguments are passed into the fired callback', () => {
    const callback = jest.fn()
    setTimeout2(callback, 100, 'santa', 'claus')
    jest.advanceTimersByTime(100)
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith('santa', 'claus')
  })

  it('should not fire the callback if the timer is cleared before the delay period has fully elapsed', () => {
    const callback = jest.fn()
    const id = setTimeout2(callback, 100)
    jest.advanceTimersByTime(50)
    clearTimeout2(id)
    jest.advanceTimersByTime(150)
    expect(callback).not.toHaveBeenCalled()
  })
})
