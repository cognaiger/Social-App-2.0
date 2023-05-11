import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://wallpapercave.com/wp/wp5260961.jpg"
                alt=""
              />
              <span>Ubbe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/media/FHRf1wwVQAAuXzL.jpg"
                alt=""
              />
              <span>Ivar</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://vn.jugomobile.com/wp-content/uploads/2022/08/Ngay-va-gio-phat-hanh-I-Am-Groot-cach.jpeg"
                alt=""
              />
              <p>
                <span>Groot</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://resources.stuff.co.nz/content/dam/images/4/z/1/u/c/m/image.related.StuffLandscapeSixteenByNine.710x400.4z1ucn.png/1668212532814.jpg?format=pjpg&optimize=medium"
                alt=""
              />
              <p>
                <span>Adesanya</span> liked a post
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.redd.it/uoxjp1niuxg61.jpg"
                alt=""
              />
              <p>
                <span>Harald Finehair</span> liked a comment
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <p>
                <span>Bjorn</span> posted a new photo
              </p>
            </div>
            <span>8 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/15529247/pexels-photo-15529247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Nosrati</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/6625962/pexels-photo-6625962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Alex</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1804821/pexels-photo-1804821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Andre</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2766224/pexels-photo-2766224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Sylvain</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2883778/pexels-photo-2883778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Brian</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3275945/pexels-photo-3275945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Engin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2616954/pexels-photo-2616954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Jorge</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2967325/pexels-photo-2967325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>MyRai</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2568397/pexels-photo-2568397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Mishchenko</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2618758/pexels-photo-2618758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Emina</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3754175/pexels-photo-3754175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Torvi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;