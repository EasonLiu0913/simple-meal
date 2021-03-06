import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import Swal from 'sweetalert2'

function SurpriseKitchenAll() {
  const [SurpriseKitchen, setSurpriseKitchen] = useState([])

  const [SurpriseKitchenSeach, setSurpriseKitchenSeach] = useState('null')
  const [SurpriseKitchenSeach1, setSurpriseKitchenSeach1] = useState('null')
  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(
      `http://localhost:4000/membercenter/surprisekitchen_order?start=${SurpriseKitchenSeach}&end=${SurpriseKitchenSeach1}`,
      {
        method: 'get',
        credentials: 'include',
      }
    )

    const data = await response.json()
    //最後設定要到狀態中
    setSurpriseKitchen(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  //Lydia加的
  const [dialogStyle, setDialogStyle] = useState({ visibility: 'hidden' })

  const handleWriteComment = () => {}

  const Seach = (
    <>
      <div className="d-flex ">
        <div className=" mt-md-2  mt-2 txt-sub2 col-12 col-sm-12 d-flex ">
          <div className=" mt-2 mr-2 txt-cap d-none d-sm-none d-md-block d-lg-block d-xl-block">
            輸入查詢區間
          </div>
          <div className=" txt-sub2 mt-3 d-block d-sm-block d-md-none d-lg-none d-xl-none col-10  offset-3  offset-sm-4">
            輸入查詢區間
          </div>
          <input
            type="date"
            id="SurpriseKitchenSeach"
            name="SurpriseKitchenSeach"
            value={SurpriseKitchenSeach}
            onChange={(e) => setSurpriseKitchenSeach(e.target.value)}
          ></input>
          <small className="txt-cap mx-2 d-none d-sm-none d-md-block d-lg-block d-xl-block">
            ～
          </small>
          <input
            type="date"
            id="SurpriseKitchenSeach1"
            name="SurpriseKitchenSeach1"
            value={SurpriseKitchenSeach1}
            onChange={(e) => setSurpriseKitchenSeach1(e.target.value)}
          ></input>
          <button
            className="btn-green3 ml-2"
            onClick={() => getDataFromServer()}
          >
            送出
          </button>
        </div>
        <div className="col-12 col-sm-10 mx-auto"></div>{' '}
      </div>{' '}
    </>
  )
  return (
    <>
      {/* Lydia加的 */}
      {/* 兌換視窗 */}
      <div className="fff-exchange" style={dialogStyle}>
        <div className="fff-exchange-content-box">
          <div className="row justify-content-end fff-no-mr-and-pad">
            {/* 圖片放置位置 先占高 mobo關閉 */}

            {/* 關閉頁面的Ｘ */}
            <div className="" style={{ marginBottom: '10px' }}>
              <h6 className="fff-no-mr-and-pad" style={{ color: '#627E2A' }}>
                <i
                  className="fas fa-times aboutCloseBtn"
                  onClick={() => {
                    setDialogStyle({ display: 'none' })
                  }}
                ></i>
              </h6>
            </div>
          </div>
          <div className="row fff-no-mr-and-pad">
            <form id="dialog-form">
              <div className="col fff-exchange-content txt-btn">
                <div
                  className="d-flex justify-content-between fff-txt-info
              "
                  style={{ lineHeight: '50px' }}
                >
                  <span style={{ color: '#707070' }}>你點選了</span>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{
                    lineHeight: '25px',
                    marginBottom: '7px',
                    marginTop: '7px',
                  }}
                >
                  <span style={{ color: '#627E2A' }}>選擇數量</span>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ lineHeight: '39px' }}
                >
                  <span>花費點數</span>
                  <span style={{ color: '#b9433b', fontSize: '21px' }}></span>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ lineHeight: '39px' }}
                >
                  <span style={{ color: '#627E2A' }}>剩餘點數</span>
                  <span style={{ color: '#627E2A', fontSize: '21px' }}></span>
                </div>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}></div>

                <div className="d-flex justify-content-center">
                  <span className="txt-btn" style={{ color: '#b9433b' }}>
                    已兌換便無法退還點數喔！
                  </span>
                </div>

                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: '25px' }}
                >
                  <button
                    type="button"
                    className="btn-green txt-btn aboutCloseBtn"
                    onClick={() => {}}
                    data-dismiss="modal"
                  >
                    確定兌換
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Lydia加的 */}
      {Seach}
      {/* <div className="tab-content" id="myTabContent">
        <div className=" txt-cap mt-2 ml-3 d-block d-sm-block d-md-block d-lg-none d-xl-none ">
          請點選項目以取得更詳細的訂單資訊
        </div>
        <div className=" mt-2 ml-3  txt-cap d-none d-sm-none d-md-none d-lg-block d-xl-block">
          請點選項目以取得更詳細的訂單資訊
        </div>
      </div> */}
      <div className="">
        <table className="txt-body  text-nowrap table col-10 mx-auto mx-xl-0">
          <thead>
            <tr className="text-center  ">
              <th>項次</th>
              <th className=" d-none d-md-block d-sm-none d-lg-block d-xl-block ">
                訂單編號
              </th>
              <th>預約日期</th>
              <th className="d-none d-md-none d-sm-none d-lg-block d-xl-block  ">
                預約時段
              </th>
              <th>付款方式</th>
              <th className=" d-none d-md-none d-sm-none d-lg-block d-xl-block   ">
                總金額
              </th>
            </tr>
          </thead>
          <tbody>
            {SurpriseKitchen.map((v, i) => {
              console.log(v)
              return (
                <tr key={i}>
                  <td>{v.sid}</td>
                  <td>{v.order_sid}</td>
                  <td className=" d-none d-sm-none d-xl-block ">
                    <Moment format="YYYY/MM/DD">{v.reservation_date}</Moment>
                  </td>
                  <td>{v.reservation_time}</td>
                  <td className="d-none d-sm-none  d-md-none d-lg-block ">
                    {v.payment_method}
                  </td>
                  <td>{v.reservation_price}</td>
                  <td>
                    {v.status ? (
                      <a
                        className="btn-yello txt-cap lll-cursor"
                        onClick={() => {
                          setDialogStyle({ visibility: 'visible' })
                        }}
                      >
                        給予評論
                      </a>
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default SurpriseKitchenAll
