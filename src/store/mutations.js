export default{
    addToCar(state,goodsInfo){
        let isFound=false
        state.car.some(item=>{
            if(item.id==goodsInfo.id){
                // 表示找到了
                item.count += goodsInfo.count
                return isFound = true
            }
        })
        if(!isFound){
            state.car.push(goodsInfo)
        }
        // localStorage只能存字符串
    localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateCarInfo(state,goodsInfo){
        state.car.some(item=>{
            if(item.id==goodsInfo.id){
                item.count=parseInt(goodsInfo.count)
                return true
            }
        })
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFormcar(state,id){
        state.car.some((item,i)=>{
            if(item.id==id){
                state.car.splice(i,1)
                return true
            }
        })
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsSelected(state,goodsInfo){
        state.car.some(item=>{
            if(item.id==goodsInfo.id){
                item.selected = goodsInfo.selected
                return true
            }
        })
        localStorage.setItem('car',JSON.stringify(state.car))
    }
}