import { useState } from "react";

import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import RemoveCar from "../buttons/RemoveCar";
import UpdateCar from "../forms/UpdateCar";

const getStyles = () => ({
  card: {
    width: "500px",
    margin: "10px",
  },
});
const Car = (props) => {
  const { id, year, model, make, price, personId } = props;
  const styles = getStyles();

  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => setEditMode(!editMode);

  return (
    <>
      {editMode ? (
        <UpdateCar
          id={id}
          year={year}
          make={make}
          model={model}
          price={price}
          personId={personId}
          onButtonClick={handleButtonClick}
        />
      ) : (
        <Card
          style={styles.card}
          type="inner"
          title={`${year} ${make} ${model} ${`--> $`} ${price}`}
          actions={[
            <EditOutlined key="edit" onClick={handleButtonClick} />,
            <RemoveCar id={id} />,
          ]}
        ></Card>
      )}
    </>
  );
};

export default Car;
