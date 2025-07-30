import LeftComponent from "../components/LeftComponent";
import RightComponent from "../components/RightComponent";

function Home() {
  return (
    <div className="flex h-screen overflow-hidden ">
        <LeftComponent/>

        <RightComponent/>
    </div>
  );
}

export default Home;
