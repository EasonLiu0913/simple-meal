import { Link } from 'react-router-dom'
function MealMeun() {
  return (
    <>
      <div className="cha-meun">
        <ul className="txt-sub2 cha-meun-li text-center">
          <li className=" ">
            <Link to="" className="cha-meun-txt1 cha-gray">
              所有餐點
            </Link>
          </li>
          <li className=" ">
            <Link to="" className="cha-meun-txt1 cha-gray">
              中式料理
            </Link>
          </li>
          <li className="">
            <Link to="" className="cha-meun-txt1 cha-gray">
              美式料理
            </Link>
          </li>
          <li className=" ">
            <Link to="" className="cha-meun-txt1 cha-gray">
              法式料理
            </Link>
          </li>
          <li className=" ">
            <Link to="" className="cha-meun-txt1 cha-gray">
              義式料理
            </Link>
          </li>
          <li className="">
            <Link to="" className="cha-meun-txt1 cha-gray">
              素食專區
            </Link>
          </li>
        </ul>
        <div className="cha-meun-input">
          <input
            type="text"
            placeholder="搜尋餐點"
            className="input-pic-style cha-search-put txt-sub2"
          />
          <i className="fas fa-search cha-search-icon cha-gray"></i>
        </div>
      </div>
    </>
  )
}

export default MealMeun
