import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ADD_PERSON } from "../../queries";

const AddPerson = () => {
  const [uuid] = useState(uuidv4());
  const [addPerson] = useMutation(ADD_PERSON);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    const { firstName, lastName } = values;

    // console.log("firstName: ", firstName);
    // console.log("lastName: ", lastName);
  };

  return (
    <Form
      form={form}
      name="add-person-form"
      layout="inline"
      size="large"
      onFinish={onFinish}
      style={{ marginBottom: "40px" }}
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input placeholder="i.e. Indiana" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input placeholder="i.e. Jones" />
      </Form.Item>

      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Person
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default AddPerson;
