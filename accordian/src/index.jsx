// import statements
import React, { useState } from "react";
import data from "./data";

// single selection
// multiple selections
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentID) {
    // receive the current id of the queswtion
    // if selected hook is dataItem.id, hide text by setting selected id to 0
    setSelected(selected === currentID ? "0" : currentID);
  }

  function handleMultiSelection(currentID) {
    let copyOfMultiple = [...multiple];
    const findIndexOfCurrentID = copyOfMultiple.indexOf(currentID);

    if (findIndexOfCurrentID === -1) copyOfMultiple.push(currentID);
    else copyOfMultiple.splice(findIndexOfCurrentID, 1);

    setMultiple(copyOfMultiple);
  }

  return (
    <div className="wrapper">
      <h2 className="title">Accordian FAQ!</h2>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className={"item"}
              key={dataItem.id}
            >
              <h2 className="question">{dataItem.question}</h2>

              {
                // if enableMultiSelection is true, check multiple
                enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div> :
                // if selected item is dataItem.id show data.answer below data question
                selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : (
                  null
                )
              }
            </div>
          ))
        ) : (
          <div>Data not found! </div>
        )}
      </div>
      <h2>
        <button 
            className="multiSelection" 
            onClick={() => enableMultiSelection ? setEnableMultiSelection(false) : setEnableMultiSelection(true)}
        >Enable Multiselection</button>
      </h2>
    </div>
  );
}

