import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

/* 子頁面載入*/
import MemberCenterLogin from '../components/member-center/MemberCenterLogin'
import MemberCenterRegiStered from '../components/member-center/MemberCenterRegiStered'
import MemberCenterIndex from '../components/member-center/MemberCenterIndex'
import MemberCenterInfo from '../components/member-center/MemberCenterInfo'
import MemberCenterResetPassword from '../components/member-center/MemberCenterRestPassword'
import MemberCenterNavbar from '../components/member-center/MemberCenterNavbar'
import MemberCenterAddr from '../components/member-center/MemberCenterAddr'
import MemberCenterCreditCard from '../components/member-center/MemberCenterCreditCard'
import MemberCenterFoodDelivery from '../components/member-center/MemberCenterFoodDelivery'
import MemberCenterSimpleMealCoupon from '../components/member-center/MemberCenterSimpleMealCoupon'
import MyRecipe from '../components/member-center/MyRecipe'
import AddRecipe from '../components/member-center/AddRecipe'
import MyRecipeEdit from '../components/member-center/MyRecipeEdit'
import FoodDeliverys1 from '../components/member-center/FoodDeliverys1'
import FoodDeliverys2 from '../components/member-center/FoodDeliverys1'
import Test from '../components/member-center/test'
import MemberCenterSurpriseKitchen from '../components/member-center/MemberCenterSurpriseKitchen'
import MemberCenterPasswordChange from '../components/member-center/MemberCenterPasswordChange'

function MemberCenter(props) {
  const [MemberCenter, setMemberCenter] = useState()

  // { 登入布林值, 設定登入布林值}

  const { loginBool, setLoginBool } = props
  return (
    <>
      <Switch>
        <Route path="/MemberCenter/PasswordChange">
          <MemberCenterPasswordChange />
        </Route>
        <Route path="/MemberCenter/Test">
          <Test />
        </Route>
        <Route path="/MemberCenter/SurpriseKitchen">
          <MemberCenterSurpriseKitchen />
        </Route>
        <Route path="/MemberCenter/FoodDeliverys2">
          <FoodDeliverys2 />
        </Route>
        <Route path="/MemberCenter/FoodDeliverys1">
          <FoodDeliverys1 />
        </Route>

        <Route path="/MemberCenter/SimpleMealCoupon">
          <MemberCenterSimpleMealCoupon />
        </Route>

        <Route path="/MemberCenter/FoodDelivery">
          <MemberCenterFoodDelivery />
        </Route>

        <Route path="/MemberCenter/CreditCard">
          <MemberCenterCreditCard />
        </Route>

        <Route path="/MemberCenter/addr">
          <MemberCenterAddr />
        </Route>

        <Route path="/MemberCenter/Navbar">
          <MemberCenterNavbar />
        </Route>
        <Route path="/MemberCenter/Info">
          <MemberCenterInfo />
        </Route>

        <Route path="/MemberCenter/RegiStered">
          <MemberCenterRegiStered />
        </Route>

        <Route path="/MemberCenter/ResetPassword">
          <MemberCenterResetPassword />
        </Route>

        {/* 我的食譜 */}
        <Route path="/MemberCenter/MyRecipe">
          <MyRecipe />
        </Route>
        {/* 新增食譜 */}
        <Route path="/MemberCenter/addrecipe">
          <AddRecipe />
        </Route>
        {/* 修改食譜 注意：要加上網址參數 */}
        <Route exact path="/MemberCenter/myrecipeedit/:id?">
          <MyRecipeEdit />
        </Route>

        <Route path="/MemberCenter/Index">
          <MemberCenterIndex />
        </Route>

        <Route path="/">
          <MemberCenterLogin
            loginBool={loginBool}
            setLoginBool={setLoginBool}
          />
        </Route>
      </Switch>
    </>
  )
}

export default MemberCenter
