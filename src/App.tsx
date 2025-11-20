import { LikeButton } from "./pages/home/components/like-button/like-button";

function App() {
  return (
    <div>
      <LikeButton type="bottom-sheets" liked={true} count={999} />
      <LikeButton type="maker" liked={false} count={999} />
    </div>
  );
}

export default App;
