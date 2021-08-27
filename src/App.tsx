import React from "react";
import FormikChallenge from "./components/FormikChallenge/FormikChallenge";
import ReactQueryChallenge from "./components/ReactQueryChallenge/ReactQueryChallenge";
import CounterChallenge from "./components/CounterChallenge/CounterChallenge";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <h1>Nore Interview CodeSandbox</h1>
            <h4>Results</h4>
            
            <section className="section-task">
                <FormikChallenge />
            </section>

            <section className="section-task">
                <ReactQueryChallenge />
            </section>

            <section className="section-task">
                <CounterChallenge />
            </section>
        </div>
    );
};

export default App;
