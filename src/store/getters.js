export default{
    // 类似于computed的用法, 所以getters个人习惯起名词
  // getters 不能够传参
  totalCount(state) {
    // 累加, 将car中所有商品的count属性进行累加
    let totalCount = 0
    state.car.forEach(item => totalCount += item.count)
    return totalCount
  },
  // obj.name
  // obj['name']
  goodsCount(state) {
    let obj = {}
    state.car.forEach(item => obj[item.id] = item.count)
    return obj // { 88: 5, 90: 2 }
  },
  goodsSelected(state) {
    let obj = {}
    state.car.forEach(item => obj[item.id] = item.selected)
    return obj // { 88: true, 90: true }
  },
  goodsCountAndAmount(state) {
    let o = {
      count: 0, // 已勾选的商品数量
      amount: 0 // 已勾选的商品总价
    } // 计数对象

    // state.car.forEach(item => {
    //   if (item.selected) {
    //     o.count += item.count
    //     o.amount += item.price * item.count
    //   }
    // })

    state.car.forEach(item => item.selected && (o.count += item.count) && (o.amount += item.price * item.count))

    return o
  }
}