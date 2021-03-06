import { useState, useEffect } from 'react'

import MealPic from './MealPic'
import MealTittle from './MealTittle'

function MealMain(props) {
  const {
    breadCrumbBool,
    selectMeal,
    updateNum,
    setUpdateNum,
    setMealForRecipe,
    dataLoadingforTittle,
    setDataLoadingforTittle,
  } = props

  const [data, setData] = useState({
    category_id: '1',
    category_name: '美式料理',
    cooktime: '40分鐘',
    created_at: '2020-12-15T16:00:00.000Z',
    ingredient_id: '1,2,3,4,5,6,7,8,9,10',
    introduction: '現烤蛋糕並配上新鮮核桃',
    on_sale: 1,
    price: 500,
    product_id: 'american01',
    product_name: '奶香核桃烤蛋糕',
    recipe_id: '1',
    sid: 1,
    vegetarian_food: 1,
  })

  const handleGetData = () => {
    const url = `http://localhost:4000/meal/selectMeal?sid=${selectMeal}`
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setData({ ...obj })

        // 存到localStorage
        const recentData = JSON.parse(localStorage.getItem('recent')) || []
        recentData.push(obj)
        localStorage.setItem('recent', JSON.stringify(recentData))
      })
  }
  // console.log(data)
  useEffect(() => {
    handleGetData()
  }, [selectMeal])
  return (
    <div class="row cha-main">
      <MealPic
        selectMeal={selectMeal}
        data={data}
        dataLoadingforTittle={dataLoadingforTittle}
        setDataLoadingforTittle={setDataLoadingforTittle}
      />
      <MealTittle
        breadCrumbBool={breadCrumbBool}
        selectMeal={selectMeal}
        data={data}
        updateNum={updateNum}
        setUpdateNum={setUpdateNum}
        setMealForRecipe={setMealForRecipe}
        dataLoadingforTittle={dataLoadingforTittle}
        setDataLoadingforTittle={setDataLoadingforTittle}
      />
      {/* {console.log(selectMeal)} */}
    </div>
  )
}
export default MealMain
