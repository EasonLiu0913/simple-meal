import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function MemberCenterIndex() {
  const [Memberinfo, setMemberinfo] = useState([])

  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch('http://localhost:4000/getmemberinfo', {
      method: 'get',
      credentials: 'include',
    })
    const data = await response.json()
    //最後設定要到狀態中
    setMemberinfo(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])
  console.log(Memberinfo)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="h3 text-rightt ml-2 mb-5 d-none d-xl-block">
              會員中心
            </div>

            <div className=" dd d-none d-xl-block">
              <div className=" col-8 offset-1">
                <div className="mb-5  col-8 d-flex mt-4">
                  <ul className="col">
                    <li>{Memberinfo.avater}</li>
                  </ul>

                  <ul className=" col-7 mt-3">
                    <li className="item1 ">
                      會員編號<span>{Memberinfo.member_number}</span>
                    </li>
                    <li className="item1 ">{Memberinfo.name}</li>
                    <li className="item1 d-flex">
                      會員等級:{Memberinfo.level}
                    </li>
                  </ul>

                  <ul className="col-10 mt-3">
                    <li className="item1 ">
                      剩餘點數:<span style={{ color: 'red' }}>999</span>
                    </li>
                    <li className="item1 ">
                      餐卷數量:
                      <span style={{ color: 'red' }}>
                        {Memberinfo.simplemeal_coupon}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-md-between">
                <div className="d-flex col-10 d-flex justify-content-md-between mx-auto">
                  <ul className="h6 item1  col-4">
                    <li>
                      <i className="far fa-address-card mr-1 mb-3"></i>
                      我的帳戶
                    </li>
                    <li className="item2 ml-4 ">
                      <Link to="/MemberCenter/Info" className="text-dark">
                        個人資料
                      </Link>
                    </li>
                    <li className="item2 ml-4">
                      <Link to="/MemberCenter/PasswordEx" className="text-dark">
                        密碼變更
                      </Link>
                    </li>
                    <li className="item2 ml-4">
                      <Link to="/MemberCenter/CreditCard" className="text-dark">
                        信用卡
                      </Link>
                    </li>
                    <li className="item2 ml-4">
                      <Link to="/MemberCenter/Addr" className="text-dark">
                        地址
                      </Link>
                    </li>
                    <li className="item2 ml-4">
                      <Link to="" className="text-dark">
                        分級資訊
                      </Link>
                    </li>
                  </ul>
                  <ul className="h6 item1 col-5 ">
                    <li className="item">
                      <i className="fas fa-heart mr-2 "></i>
                      <Link to="" className="text-dark">
                        我的專屬菜單
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-carrot mr-2"></i>
                      <Link to="/MemberCenter/MyRecipe" className="text-dark">
                        我的共享食譜
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-medal mr-2"></i>
                      <Link to="" className="text-dark">
                        我的成就
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-ticket-alt mr-1"></i>
                      <Link to="" className="text-dark">
                        我的優惠卷
                      </Link>
                    </li>
                  </ul>
                  <ul className="h6 col-4">
                    <li className="item ">
                      <i className="far fa-calendar-plus mr-2"></i>
                      <Link
                        to="/MemberCenter/SurpriseKitchen"
                        className="text-dark"
                      >
                        驚喜廚房
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-utensils mr-2"></i>
                      <Link
                        to="/MemberCenter/FoodDelivery"
                        className="text-dark"
                      >
                        我的餐點
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-clipboard mr-2"></i>
                      <Link
                        to="/MemberCenter/SimpleMealCoupon"
                        className="text-dark"
                      >
                        我的餐卷
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-block d-xl-none">
              <div className="h3 text-rightt ml-2 mb-5  text-center">
                會員中心
              </div>
              <div className=" col-12">
                <div className="col-12 ">
                  <div className="col-12 d-flex ">
                    <div className="">{Memberinfo.avater}</div>
                    <span className="item1  txt-cap mt-3  ">
                      {Memberinfo.name}
                    </span>
                  </div>

                  <div className="">
                    <ul className=" mt-3 txt-cap d-flex">
                      <li className="col-7 col-sm-8">
                        會員編號
                        <span>{Memberinfo.member_number}</span>
                      </li>
                      <li className="col-7 ">
                        餐卷數量:
                        <span>{Memberinfo.simplemeal_coupon}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="">
                    <ul className="mt-3 d-flex txt-cap">
                      <li className="col-7 col-sm-8">
                        會員等級:
                        <span>{Memberinfo.level}</span>
                      </li>
                      <li className="col-7 ">
                        剩餘點數:
                        <span>999</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="btn border txt-cap1 col-12">回上頁</div>
              </div>

              <div className="col-12 ">
                <div className="col-12">
                  <ul className="h6 item1  mt-4 mb-1 ">
                    <li className="bt">
                      <i className="far fa-address-card mr-1 mb-2"></i> 我 的 帳
                      戶
                    </li>
                    <li className="txt-sub2 mt-2 ml-4 text3">
                      <Link to="" className="text-dark">
                        個人資料
                      </Link>
                    </li>
                    <li className="txt-sub2 ml-4 text3">
                      <Link to="" className="text-dark">
                        密碼變更
                      </Link>
                    </li>
                    <li className="txt-sub2 ml-4 text3">
                      <Link to="" className="text-dark">
                        信用卡
                      </Link>
                    </li>
                    <li className="txt-sub2 ml-4 text3">
                      <Link to="" className="text-dark">
                        地址
                      </Link>
                    </li>
                    <li className="txt-sub2 ml-4 text3">
                      <Link to="" className="text-dark">
                        分級資訊
                      </Link>
                    </li>
                  </ul>
                  <ul className="h6 ">
                    <li className="bt bob item1">
                      <i className="fas fa-heart mr-2 "></i>
                      <Link to="" className="text-dark">
                        我 的 專 屬 菜 單
                      </Link>
                    </li>
                    <li className="bt item1 ">
                      <i className="fas fa-carrot mr-2"></i>
                      <Link to="" className="text-dark">
                        我 的 共 享 食 譜
                      </Link>
                    </li>
                    <li className="bt item1">
                      <i className="fas fa-medal mr-2"></i>
                      <Link to="" className="text-dark">
                        我 的 成 就
                      </Link>
                    </li>
                    <li className="bt item1">
                      <i className="fas fa-ticket-alt mr-1"></i>
                      <Link to="" className="text-dark">
                        我 的 優 惠 卷
                      </Link>
                    </li>
                  </ul>
                  <ul className="h6">
                    <li className="bt item1">
                      <i className="far fa-calendar-plus mr-2"></i>
                      <Link to="" className="text-dark">
                        驚 喜 廚 房
                      </Link>
                    </li>
                    <li className="bt item1">
                      <i className="fas fa-utensils mr-2"></i>
                      <Link to="" className="text-dark">
                        我 的 餐 點
                      </Link>
                    </li>
                    <li className="bt item1">
                      <i className="fas fa-clipboard mr-2"></i>
                      <Link to="" className="text-dark">
                        我 的 餐 卷
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCenterIndex
