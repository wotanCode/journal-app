
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from '../components/journal/JournalScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route
            path="auth/*"
            element= {<AuthRouter />}
          /> */}

          <Route
            path="auth/*"
            element= {<LoginScreen />}
          />

          <Route
            path="/auth/login"
            element= {<LoginScreen /> }
          />

          <Route
            path="/auth/register"
            element= {<RegisterScreen /> } //Investigar redirect para poner en register igua
          />

          <Route
            path="/"
            element= { <JournalScreen /> }
          />
        </Routes>
    </BrowserRouter>
  );
}