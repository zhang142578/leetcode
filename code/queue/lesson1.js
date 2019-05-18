export default class MyCircularQueue {
  constructor (k) {
    // 用来保存数据长度为KDE数据结构
    this.list = Array(k)
    // 队首的指针
    this.front = 0
    // 队尾的指针
    this.rear = 0
    // 队列的长度
    this.max = k
  }
  enQueue (num) {
    if (this.isFull()) {
      return false
    } else {
      this.list[this.rear] = num
      this.rear = (this.rear + 1) % this.max
      return true
    }
  }
  deQueue () {
    if (this.isEmpty()) return false
    this.list[this.front] = ''
    this.front = (this.front + 1) % this.max
    return true
  }
  isEmpty () {
    return this.front === this.rear && !this.list[this.front]
  }
  isFull () {
    return this.front === this.rear && !!this.list[this.front]
  }
  Front () {
    if (this.isEmpty()) return -1
    return this.list[this.front]
  }
  Rear () {
    if (this.isEmpty()) return -1
    let rear = this.rear - 1
    return this.list[rear < 0 ? this.max - 1 : rear]
  }
}
