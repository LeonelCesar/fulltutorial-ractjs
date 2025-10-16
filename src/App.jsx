import "./global.css";
import List from "./components/list/List";
import MethodMapList from "./components/methodMapList/MethodMapList";
import KeysReacrJS from "./components/keysReactJs/KeysReactJS";
import FormsComponents from "./components/formsComponents/FormsComponents";
import Form from "./components/form/Form";
import PropsStates from "./components/propsStates/PropsStates";
import UseStateHook from "./components/_useStateHook/UseStateHook";
import UseEffectHook from "./components/_useEffectHook/useEffectHook";
import SandBox from "./components/_temUmCodigoBomsandBox/SandBox";
import FeatchDataHook from "./components/-(FetchDataHook)/FeatchDataHook";
import UseReducerHook from "./components/_useReducerHook/UseReducerHook";
import UseRef from "./components/_useRef/useRef";
import CointainmentComponent from "./components/_cointainmentComponent/CointainmentComponent";
import ReactChildren from "./components/_reactCloneElementReactChildren/ReactChildren";
import SpreadOperater from "./components/spreadOperetor/SpreadOperetor";
import RenderProps from "./components/renderProps/RenderProps";
import ReactTesting from "./components/reactTesting/ReactTesting";
import FormulariSimples from "./components/_formularioZod-Typ-ReactHook/FormularioSimples";

function App() {
  return (
    <div className="app">
      <h1>React Avançado último Curso</h1>
      <List />
      <MethodMapList />
      <KeysReacrJS />
      <FormsComponents />
      <Form />
      <PropsStates />
      <UseStateHook />
      <UseEffectHook />
      <SandBox />
      <FeatchDataHook />
      <UseReducerHook />
      <UseRef />
      <CointainmentComponent />
      <ReactChildren />
      <SpreadOperater />
      <RenderProps />
      <ReactTesting />
      <FormulariSimples />
    </div>
  );
}

export default App;
