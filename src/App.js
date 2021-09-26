import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header/header'
import Card from './components/card/card'
import Cart from './components/cart/cart'
function App() {
   const Array = [
      {
         name: 'Abdul Karim',
         institution: 'BUET',
         subject: 'CSE',
         batch: 23,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/1.png',
      },
      {
         name: 'Motaleb Ali',
         institution: 'DU',
         subject: 'EEE',
         batch: 10,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/2.png',
      },
      {
         name: 'Samser Salehin',
         institution: 'NSU',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/3.jpg',
      },
      {
         name: 'Karim Kuddus',
         institution: 'CU',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/5.png',
      },
      {
         name: 'Md. Enayet Chowdhury',
         institution: 'CUET',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/6.png',
      },
      {
         name: 'Nasreen Sultana',
         institution: 'CUET',
         subject: 'CSE',
         batch: 18,
         salary: 1600,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/7.png',
      },
      {
         name: 'Farjana Yeasmin',
         institution: 'CUET',
         subject: 'CSE',
         batch: 18,
         salary: 1800,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/8.png',
      },
      {
         name: 'Sadab Hossain',
         institution: 'CUET',
         subject: 'Botany',
         batch: 18,
         salary: 1500,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/9.png',
      },
      {
         name: 'Nishat Sultana',
         institution: 'CUET',
         subject: 'BBA',
         batch: 20,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/Zahin52/images-json/main/images/10.png',
      },
   ]
   return (
      <div className="App container">
         <Header />
         <div className="row ">
            <div className="col-10 row ">
               {Array.map((data) => (
                  <Card info={data} />
               ))}
            </div>
            <div div className="col-2">
               <Cart />
            </div>
         </div>
      </div>
   )
}

export default App
