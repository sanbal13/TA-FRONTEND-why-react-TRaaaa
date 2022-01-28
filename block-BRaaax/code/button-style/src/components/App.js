import Button from './Button';
function App() {
  return (
    <div className="App">
       <h1> Hello Buttons</h1>        
      <Button
  label="Button1"
  type="PRIMARY"
  onClickHandler={() => alert("You Clicked Button1!")}
/>
<Button
  size="SMALL"
  label="Button2"
  type="SECONDARY"
  onClickHandler={() => alert("You Clicked Button2!")}
/>
<Button
  size="LARGE"
  label="Button3"
  type="TERTIARY"
  onClickHandler={() => alert("You Clicked Button3!")}
/> 
<Button
  label="Button4"
  onClickHandler={() => alert("You Clicked Button4!")}
/> 
    </div>
  );
}

export default App;
