// library methods
import { useState } from "react";

// types
import { Option } from "../../../types";

// constants
import { DEFAULT_VALUE } from "../../../constants";

// styles
import "./index.css"

function ItemsHandler() {

   // states
  const [options, setOptions] = useState<Option[]>([{ value: DEFAULT_VALUE, text: 'Selecione uma opção' }, { value: 'TESTE', text: 'TESTE' }]);
  const [selectedOption, setSelectedOption] = useState<string>(DEFAULT_VALUE);
  const [newOption, setNewOption] = useState<string>('');


  // variables
  const alreadyExists: Option | undefined = options.find(({ value }: Option) => value === newOption);
  const selectedOptionText: string = options.find((option: Option) => option.value === selectedOption)?.text || '';
  const isValueEmpty = newOption.trim() === "";


  // methods
  const handleOnChange = (value: string) => {
    setSelectedOption(value);
  }

  const cleanBox = () => {
    setNewOption('');
  }

  const showAlert = (text: string) => {
    alert(text);
    cleanBox();
  }

  const addOption = () => {
    // adds only if item doesn't exist on the list
    if (isValueEmpty) return cleanBox();
    if (alreadyExists) return showAlert("Este item já existe na lista");

    const option: Option = { value: newOption, text: newOption };
    setOptions((prev) => [...prev, option]);
    
    showAlert("Item adicionado com sucesso");
  }

  const removeOption = () => {
    // removes only if item exists on the list
    if (isValueEmpty) return cleanBox();
    if (!alreadyExists || newOption === DEFAULT_VALUE) return showAlert("Este item já não existe na lista");
    
    setOptions((prev) =>  [...prev.filter(({ value }: Option) => value !== alreadyExists.value)]);

    if (alreadyExists.value === selectedOption) setSelectedOption(DEFAULT_VALUE);
    
    showAlert("Item removido com sucesso");
  }

  return (
    <div className="ItemsHandler" data-testid="itemsHandler">
      <div className="InnerSection">
        <select className="Select" value={selectedOption} onChange={(event) => handleOnChange(event.currentTarget.value)}>
          {options.map(({ value, text }: Option) => <option key={value} disabled={value === DEFAULT_VALUE} value={value}>{text}</option>)}
        </select>
        <div className="InputGroup">
          <input type="text" className="Input" placeholder="Insira um item" value={newOption} onChange={(event) => setNewOption(event.target.value)} /> 
          <button type="button" className="Button" onClick={cleanBox}>Limpar</button>
        </div>
        <div className="ButtonGroup">
          <button type="button" className="Button" onClick={addOption}>Adicionar</button>
          <button type="button" className="Button" onClick={removeOption}>Remover</button>
        </div>
        {selectedOptionText}
      </div>
    </div>

  );
}

export default ItemsHandler;
