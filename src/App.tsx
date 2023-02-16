import React from "react";

import "./App.css";
import BasicTable from "./Components/BasicTable";
import COLUMNS from "./Components/Columns";
import data from "./Components/data.json";
import MainPage from "./Components/MainPage";
import MainRoutes from "./Components/Routes/MainRoutes";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import rootStore from "./Components/store";
import { store } from "./Components/store/Store";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  console.log("COllll.", COLUMNS, data);
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <MainPage>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
            {/* <BasicTable columns={COLUMNS} data={data}></BasicTable> */}
          </MainPage>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
