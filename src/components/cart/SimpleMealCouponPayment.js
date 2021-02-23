import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch } from 'react-router-dom'
import Swal from 'sweetalert2'

function SimpleMealCouponPayment(props) {
  // {流程, 流程轉換設定, 方案id, 方案物件, 預設方案內容, 預設付款內容, 付款物件, 付款value, 設定付款value, 優惠券物件, 設定優惠券}
  const {
    flowchart,
    setFlowchart,
    choice,
    choiceObj,
    choiceArray,
    paymentArray,
    paymentObj,
    setPaymentObj,
    paymentValue,
    setPaymentValue,
    coupon,
    setCoupon,
  } = props

  // 優惠券資料(非餐券)
  const [couponDatabase, setCouponDatabase] = useState([])

  // 切換隱藏視窗
  const [modalStyle, setModalStyle] = useState({ display: 'none' })

  // 改變付款方案
  const handleSetPaymentValue = (event) => {
    setPaymentValue(event.target.value)
    handleSetPaymentObj(event.target.value)
  }

  // 設定決定的付款選項物件
  const handleSetPaymentObj = (i) => {
    setPaymentObj(paymentArray[i])
  }

  // 手動輸入優惠碼
  const handleCoupon = (e) => {
    const couponText = e.target.value

    // 先歸零
    setCoupon({ string: couponText, cost: 0 })

    // 如果輸入的字串有屬於優惠碼, 提供相應的優惠
    couponDatabase.map((v, i) => {
      console.log(v.discount_code, couponText)
      v.discount_code === couponText &&
        setCoupon({ string: couponText, cost: v.discount })
    })
  }

  // 選用優惠券填入
  const handleSelectCoupon = (string, discount) => {
    setCoupon({
      string: string,
      cost: discount,
    })
    setModalStyle({ display: 'none' })
  }

  // 跟資料庫拿優惠券
  const handleGetCouponFromDatabase = () => {
    const url = 'http://localhost:4000/milestone/cartForDiscount'
    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((array) => {
        console.log(array)
        setCouponDatabase(array)
      })
  }

  // 掛載轉換階段2, 跟資料庫要優惠券
  useEffect(() => {
    setFlowchart(2)
    handleGetCouponFromDatabase()
  }, [])

  return (
    <>
      {/* 購物車頁籤(餐券-選購方案) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              選購方案
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <form className="poe-bookmark-content txt-btn">
            <table className="table table-borderless table-hover">
              <thead>
                <tr>
                  <th scope="col">組合明細</th>
                  <th
                    className="d-none d-sm-block text-right text-nowrap"
                    scope="col"
                  >
                    優惠價
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>{choiceArray[choice].combination}</span>
                    <br className="d-block d-sm-none" />
                    <span className="txt-cap poe-red">
                      {choiceArray[choice].discription}
                    </span>
                    <br className="d-block d-sm-none" />
                    <div className="d-block d-sm-none d-flex txt-cap">
                      <span className="poe-bookmark-content-m">優惠價</span>
                      <span className="poe-red">
                        {choiceArray[choice].price}
                      </span>
                    </div>
                    <div className="d-block d-sm-none d-flex txt-cap">
                      <span className="poe-bookmark-content-m">數量</span>
                      <span className="poe-red">{choiceObj.quantity}</span>
                    </div>
                  </td>
                  <td className="d-none d-sm-block poe-red text-right">
                    {Intl.NumberFormat().format(choiceArray[choice].price)}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="poe-bookmark-content-result text-right">
              <div>
                <span>共 </span>
                <span className="poe-red">{choiceObj.quantity}</span>
                <span> 組, 包含 </span>
                <span className="poe-red">{choiceObj.couponNum}</span>
                <span>
                  {' '}
                  張餐券, <br className="d-block d-sm-none" />
                  金額小計NT${' '}
                </span>
                <span className="poe-red">
                  {Intl.NumberFormat().format(choiceObj.price)}
                </span>
                <span> 元</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-使用優惠券) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              使用優惠券
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <div className="row d-flex justify-content-between align-items-center poe-bookmark-content-coupon">
              <div className="col-12 col-sm-3 poe-mb15">優惠碼</div>
              <div className="col-12 col-sm-5 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style poe-input-text"
                  value={coupon.string}
                  onChange={(event) => handleCoupon(event)}
                />
              </div>
              <div className="col-12 col-sm-4 poe-mb15">
                <button
                  className="w-100 select-btn-white txt-btn"
                  // onClick={() => handleSweetAlertCoupon()}
                  onClick={() => setModalStyle({ display: 'block' })}
                >
                  我的優惠
                </button>
              </div>
              {coupon.cost !== 0 && (
                <div className="col-12 text-right">
                  <span>折扣 </span>
                  <span className="poe-red">
                    - {Intl.NumberFormat().format(coupon.cost)}
                  </span>
                  <span> 元</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-選擇付款方式) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              選擇付款方式
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <table className="table table-borderless table-hover">
              <tbody>
                {paymentArray.map((v, i) => (
                  <tr key={i}>
                    <th>
                      <input
                        type="radio"
                        name="payment"
                        value={i}
                        checked={paymentValue === `${i}`}
                        onChange={(e) => handleSetPaymentValue(e)}
                      />
                    </th>
                    <td>
                      {v.proj}
                      <span className="txt-cap poe-red">{v.discript}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 上下一步 */}
      <div className="row justify-content-center text-center text-sm-right poe-bookmark-btn-group">
        <div className="col-12 col-md-8 col-xl-6">
          <Link
            to="/cart"
            onClick={() => setFlowchart(1)}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            <i className="fas fa-chevron-left"></i>　上一步
          </Link>
          {paymentValue !== null ? (
            <Link
              onClick={() => setFlowchart(3)}
              className="btn-green txt-btn mx-2 poe-mb20"
            >
              下一步　<i className="fas fa-chevron-right"></i>
            </Link>
          ) : (
            <span disabled className="btn-gray txt-btn mx-2 poe-mb20">
              下一步　<i className="fas fa-chevron-right"></i>
            </span>
          )}
        </div>
      </div>

      {/* 隱藏視窗 */}
      <div className="fff-mshowto" style={modalStyle}>
        <div className="fff-mshowto-content mt-5">
          {/* 關閉頁面的Ｘ */}
          <div className="fff-ms-mobo justify-content-end col-12">
            <h6>
              <i
                className="fas fa-times aboutCloseBtn"
                onClick={() => {
                  setModalStyle({ display: 'none' })
                }}
              ></i>
            </h6>
          </div>
          {/* 圖片放置位置*/}
          <div className="row justify-content-center">
            <h5>您的優惠券</h5>
            {/* 按鈕 */}
            <div className="w-100">
              {couponDatabase.map((v, i) => (
                <>
                  <div className="my-2 w-100">
                    <button
                      className="select-btn-green txt-btn w-100"
                      style={{ height: '50px' }}
                      onClick={() => {
                        handleSelectCoupon(v.discount_code, v.discount)
                      }}
                    >
                      優惠折扣 {v.discount} 元, 優惠碼 {v.discount_code}
                    </button>
                  </div>
                </>
              ))}
            </div>
            {/* 取消按鈕 */}
            <div className="col-12 d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn-white txt-btn aboutCloseBtn"
                onClick={() => {
                  setModalStyle({ display: 'none' })
                }}
                data-dismiss="modal"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleMealCouponPayment
