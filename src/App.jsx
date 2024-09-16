
import Button from './component/Button';
import Card from './component/Card';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Button />
      <div className="flex justify-around">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-around">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-around">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer/>

    </>
  )
}

export default App