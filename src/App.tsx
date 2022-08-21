import AuthProvider from "./contexts/AuthContext";

import Routes from "./Routes";

import Global from "./styles/global";

const App = () => {
  return (
    <AuthProvider>
      <Global />
      <Routes />
    </AuthProvider>
  );
};

export default App;
