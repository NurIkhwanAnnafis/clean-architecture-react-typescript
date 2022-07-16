import { useNavigate } from "react-router-dom"

const MainViewModel = () => {
  const navigate = useNavigate();

  const handleNavigate = (pathname: string) => navigate(pathname);

  return {
    handleNavigate,
  }
}

export default MainViewModel;