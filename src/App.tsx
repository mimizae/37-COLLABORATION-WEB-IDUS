import * as styles from "./test.css";
import {
  ArrowLeft,
  ArrowRight,
  Banner,
  Benefit,
  BottomSheetHeart,
  BottomSheetHeartFill,
  ChatFloating,
  Check,
  ChevronDown,
  ChevronRightRounded,
  ChevronRightSharp,
  ChevronUp,
  Delete,
  Home,
  Logo,
  MakerHeart,
  MakerHeartFill,
  Search,
  Share,
  ShoppingCart,
  Star,
} from "./assets/svg";

function App() {
  return (
    <div className={styles.test}>
      <MakerHeart width={24} height={24} />
      <MakerHeartFill width={24} height={24} />
      <BottomSheetHeart width={24} height={24} />
      <BottomSheetHeartFill width={50} height={50} />
      <ArrowLeft width={24} height={24} />
      <ArrowRight width={24} height={24} />
      <ChevronDown width={24} height={24} />
      <ChevronRightRounded width={24} height={24} />
      <ChevronRightSharp width={24} height={24} />
      <ChevronUp width={24} height={24} />
      <Banner width={200} height={200} />
      <Benefit width={24} height={24} />
      <ChatFloating width={24} height={24} />
      <Check width={24} height={24} />
      <Delete width={24} height={24} />
      <Home width={24} height={24} />
      <Logo width={24} height={24} />
      <Search width={24} height={24} />
      <Share width={24} height={24} />
      <ShoppingCart width={24} height={24} />
      <Star width={24} height={24} />
    </div>
  );
}

export default App;
