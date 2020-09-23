import React from "react";
import { FiEdit } from "react-icons/fi";

export default function CustomerDetailInfo({
  stateValue,
  setEdit,
  edit,
  keyName,
}) {
  return (
    <div>
      <p>{stateValue}</p>
      <FiEdit
        color="#E0A000"
        size="20"
        onClick={() => setEdit({ ...edit, [keyName]: true })}
      />
    </div>
  );
}
