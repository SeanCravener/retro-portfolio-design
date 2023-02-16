import ContentBoxContainer from "./components/content-box/content-box-container";
import ContentBox from "./components/content-box/content-box";

function App() {
  const stringForTesting =
    "Productize. Optics accountable talk. Thought shower. Productize. Optics accountable talk. Thought shower. Productize. Optics accountable talk. Thought shower. Productize. Optics accountable talk. Thought shower. Productize. Optics accountable talk. Thought shower. Productize. Optics accountable talk. Thought shower. Productize. Optics accountable talk. Thought shower. Productize. Optics accountable talk. Thought shower. Productize. Optics accountable talk. Thought shower.";

  return (
    <div className="App">
      <ContentBoxContainer>
        <ContentBox>{stringForTesting}</ContentBox>
      </ContentBoxContainer>
    </div>
  );
}

export default App;
