import { reactive, computed, watch, onMounted, nextTick } from 'vue'

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

export function useCounter(){


  
  watch(()  => counterData.count, (newCount) => {
    if(newCount ===20){
      alert('Way To Go! 20 Goal!!')
    }
  })
  
  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) 
    return 'even'
    return 'odd'
  } )
  
  const increaseCounter = async  (amount, e) => {
  
    counterData.count += amount
    await nextTick()
      console.log('do something')
  }
  
  
  const decreaseCounter = amount => {
    counterData.count -= amount
  }
  
  onMounted(() =>{
    console.log('Do Stuff related To Counter')
  })

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter

  }

}