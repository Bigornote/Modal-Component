import Modal from "./lib";
import approval from "./assets/approval.png";

function closeModal() {
  alert("Close button clicked");
  // ici vous pouvez ajouter votre action personnalisée
}

function App() {
  return (
    <Modal
      title="Successfull"
      message="A new employee has been created to the list."
      image={approval}
      imageContent="Woman with a valid element"
      closeModal={closeModal}
    />
  );
}

export default App;
