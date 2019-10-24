// 包含多个基于state的getter计算属性
export default {
  totalCount (state) {
    //0是初始值，返回的是pretotal+food.count
    return state.cartFoods.reduce((preTotal,food) => preTotal + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal,food) => preTotal + food.count * food.price ,0)
  },
  PositiveSize(state){
    return state.ratings.reduce((preRating,rating)=>preRating + (rating.rateType ? 0:1),0)
  }
}
