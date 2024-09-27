import logo from './logo.svg';
import './App.css';
import Nabar from './component/Navbar'
import Header from './component/Header';
import Price from './component/price';
import Main_text_component from './component/Main_text_component';
import Heading_component from './component/Heading_component';
import Description from './component/Description';
import Rating from './component/Rating';
import Trucker from './component/Trucker';
import Form_Text_component from './component/Form_Text_component';
import Pre_Header from './component/Pre_Header';
import Footer from './component/Footer';



function App() {
  return (
    <div >
      <Nabar />
      <Header />
      <Price />
      <Main_text_component />
      <Heading_component />
      <Description />
      <Rating />
      <Trucker />
      <Form_Text_component />
      <Pre_Header />
      <Footer />
    </div>  
  );
}

export default App;
