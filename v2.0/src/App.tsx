// src/App.tsx
import Header from "./Pages/Header/HeaderPage";
import Container from "./Pages/Container/ContainerPage";
import Footer from "./Pages/Footer/FooterPage";
import Comments from "./Comment/Comments";

function App() {
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
