import HomeScreen from "./screens/Restaurant/HomeScreen";
import RecipeDetailScreen from "./screens/Restaurant/RecipeDetailScreen";
import WelcomeScreen from "./screens/Restaurant/WelcomeScreen";
import DATA from "./config/Restaurant/DATA"

export default function App() {
  // return <WelcomeScreen />
  // return <HomeScreen />
  return <RecipeDetailScreen recipe={ DATA[0].recipes[1] } />
}
