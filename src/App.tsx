import photo from "./assets/ryan_dwitama.jpg";
import WeatherAppPhoto from "./assets/weather-app.png";
import ToDoListPhoto from "./assets/to-do-list.png";
import FlashCardPhoto from "./assets/flash-card.png";
import NetflixClonePhoto from "./assets/netflix-clone.png";
import github from "./assets/github.png"
import Modal from "./components/modal"
import ModalProfile from "./components/modal-profile";
import ColorPicker from "./assets/color-picker.png";

const App = () => {
  return (
    <div className="bg-black h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="w-[600px] h-[870px] bg-white flex flex-col justify-around">
          
          <div className="bg-white flex-1/3">

            <div className="flex flex-col">

              <div className="grid grid-cols-2 justify-between p-4 flex-4/5">

                <div className="grid grid-rows-2">
                  <p className="font-extrabold text-6xl my-4">Portfolio</p>
                  <small className="text-3xl">RYAN<br />DWITAMA</small>
                </div>

                <div className="flex justify-center">
                  <ModalProfile imgTitle={photo} imgAlt="Ryan Dwitama" />
                </div>
              </div>

              <div className="flex-1/5 flex flex-row justify-center items-center">
                <img src={github} alt="github" className="inline" /><a href="https://github.com/RyanDwitama" className="hover:text-blue-600">github.com/RyanDwitama&nbsp;</a> |&nbsp;
                <div className="relative w-0 h-0 border-l-[10px] border-r-[10px] border-b-[17.3px] border-l-transparent border-r-transparent border-b-black" />&nbsp;<a href="https://vercel.com/ryan-dwitamas-projects" className="hover:text-blue-600">vercel.com/ryan-dwitamas-projects</a>
              </div>
            </div>
          </div>

          <div className="bg-gray-300 flex-1/3 grid grid-rows-2 p-7">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="font-extrabold text-4xl">Profile</p>
              
              Fresh graduated of Computer Science in Bina Nusantara. A person who is interested in frontend developer.
            </div>

            <div className="flex flex-row justify-around items-center">
              <Modal imgTitle={WeatherAppPhoto} imgAlt="Weather App" />
              <Modal imgTitle={FlashCardPhoto} imgAlt="Flash Card" />
              <Modal imgTitle={ToDoListPhoto} imgAlt="To Do List" />
              <Modal imgTitle={NetflixClonePhoto} imgAlt="Netflix Clone" />
              <Modal imgTitle={ColorPicker} imgAlt="Weather App" />
            </div>
          </div>

          <div className="bg-white flex-1/3 text-center p-7">
            <p className="font-extrabold text-4xl mb-7">Experience</p>
            <h2>I do not have any work experience, but I did some small projects</h2>
            <a href="https://weather-app-two-gray-12.vercel.app/" target="_blank" className="block hover:bg-gray-700 hover:text-white">Weather App</a>
            <a href="https://flash-card-three.vercel.app/" target="_blank" className="block hover:bg-gray-700 hover:text-white">Flash Card</a>
            <a href="https://to-do-list-pearl-xi.vercel.app/" target="_blank" className="block hover:bg-gray-700 hover:text-white">To Do List</a>
            <a href="https://netflix-clone-alpha-sable.vercel.app/" target="_blank" className="block hover:bg-gray-700 hover:text-white">Netflix Clone</a>
            <a href="https://color-picker-two-psi.vercel.app/" target="_blank" className="block hover:bg-gray-700 hover:text-white">Color Picker</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;