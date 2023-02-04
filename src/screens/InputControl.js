import React from "react";


function InputControl(props) {
  return (
    <div class="flex flex-col gap-6">
      {props.label && <label class="font-bold text-gray-700 text-sm">{props.label}</label>}
      <input class="rounded border border-gray-300 outline-none p-4 text-black hover:border-gray-400 focus:border-purple-900 w-96" type="text" {...props} />
    </div>
  );
}

export default InputControl;


