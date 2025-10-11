import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="p-8 flex flex-col gap-8 items-center">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
