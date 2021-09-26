import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header/header'
import Card from './components/card/card'
import Cart from './components/cart/cart'
function App() {
   const Array = [
      {
         name: 'Abdul karim',
         institution: 'BUET',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/ProgrammingHeroWC4/the-superhero-direction-Zahin52/main/src/images/1.png?token=AKGB2XFVFMGYAICV6FF24D3BKB33I',
      },
      {
         name: 'Motaleb ali',
         institution: 'DU',
         subject: 'EEE',
         batch: 18,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/ProgrammingHeroWC4/the-superhero-direction-Zahin52/main/src/images/2.png?token=AKGB2XED2ERJUJWEZJZRY63BKB35Y',
      },
      {
         name: 'Samser molla',
         institution: 'NSU',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://raw.githubusercontent.com/ProgrammingHeroWC4/the-superhero-direction-Zahin52/main/src/images/3.jpg?token=AKGB2XCYMZWCR3FC5PJS75TBKB37A',
      },
      {
         name: 'karim kuddus',
         institution: 'CU',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      },
      {
         name: 'harila karim',
         institution: 'CUET',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      },
      {
         name: 'harila karim',
         institution: 'CUET',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      },
      {
         name: 'harila karim',
         institution: 'CUET',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      },
      {
         name: 'harila karim',
         institution: 'CUET',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      },
      {
         name: 'harila karim',
         institution: 'CUET',
         subject: 'CSE',
         batch: 18,
         salary: 1200,
         image: 'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg',
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
