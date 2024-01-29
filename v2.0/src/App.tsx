// src/App.tsx
import Header from "./Components/Header/Header";
import Container from './Components/Container/Container';
import Footer from "./Components/Footer/Footer"
import Comments from "./Components/Comment/Comments";

const App: React.FC = () => {
  return (
    <div id="CRA">
      <Header />
      <Container />
      <Footer />
      <Comments />
    </div>
  );
}
  
export default App;
