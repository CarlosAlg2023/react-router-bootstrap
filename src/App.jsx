import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom"
import NotFound from "./Components/Others/NotFound.jsx";
import Index from "./Views/Index/Index.jsx"

const App = () => {
	return(
		<BrowserRouter>
		 <Routes>
		  <Route path="/" exact element={<Index />} />
		  <Route path="/*" element={<NotFound />} />
		  {/*Configura correctamente tus rutas y tus componentes,te recomendamos mantener el orden de los directorios como estan establecidos para mantener el orden */}
		 </Routes>
		</BrowserRouter>
	)
}

export default App;