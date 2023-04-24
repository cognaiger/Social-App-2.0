import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Shares from "../../components/share/Share";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Stories/>
            <Shares/>
            <Posts/>
        </div>
    )
}

export default Home