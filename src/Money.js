class Money {

  constructor (money, mantissa) {
    this.money = Number(money)
    this.mantissa = Number(!mantissa ? 2 : mantissa)
    this.sign = {
      'en': '$',
      'zh': '￥'
    }
  }

  setMoney = function (money) {
    this.money = money
  }

  getMoney = function () {
    return this.money.toFixed(this.mantissa)
  }

  getWithSign = function (sign = 'zh') {
    var showMoney = this.money.toFixed(this.mantissa)
    return this.sign[sign] + showMoney
  }

}

export default Money
