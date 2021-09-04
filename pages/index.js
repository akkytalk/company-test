import axios from "axios";
import { Field, FieldArray, Formik } from "formik";
import Head from "next/head";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Row,
} from "reactstrap";
import data from "../components/Data/Data.json";
import options from "../components/Data/options.json";

var result = new Array();
export default function Home(props) {
  const [value, setValue] = useState({});

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };

  console.log("value", value);
  const handleSubmit = (values, setSubmitting) => {
    let data = {
      result: result,
    };
    console.log(data);

    axios
      .post("/test", data)
      .then((res) => {
        console.log(res);
        console.log("intial value is submited to results");
        result = [];
        history.push("/thankyou");
      })
      .catch((err) => {
        console.log(err.response.data);
        // history.push("/exam-appeared");
        // result = [];
      });
  };
  console.log("array", result);
  const dataLength = data.length;

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card className="p-5 border-2 shadow-md rounded-md">
        <CardBody>
          <Formik
            initialValues={{
              result: [],
              answer: "",
            }}
            onSubmit={handleSubmit}
          >
            {(formProps) => {
              return (
                <Form>
                  {data?.map((d, id) => {
                    return (
                      <div key={d.id} className="mt-3">
                        <CardTitle>
                          {" "}
                          {d.id}/{dataLength}
                        </CardTitle>
                        <CardSubtitle>{d.Schlagwort}</CardSubtitle>
                        <CardText>{d.question_text}</CardText>
                        <FieldArray
                          name="result"
                          render={(arrayHelpers) => {
                            return (
                              <div>
                                <Row>
                                  <Col>
                                    <FormGroup>
                                      <InputGroup className="flex flex-col mt-2">
                                        {options?.map((opt) => {
                                          return (
                                            <label
                                              key={opt.id}
                                              className="p-2 bg-gray-600 text-white rounded-md text-center hover:bg-yellow-300 hover:text-black mb-1"
                                            >
                                              <Field
                                                type="radio"
                                                // name="answer"
                                                value={opt.option_Value}
                                                className="hidden"
                                                onChange={() => {
                                                  setValue({
                                                    question_id: d.id,
                                                    answer: opt.option_Value,
                                                  });

                                                  result.map((s) => {
                                                    if (
                                                      s.question_id ==
                                                      value.question_id
                                                    ) {
                                                      result.pop();
                                                      result.push({
                                                        question_id: d.id,
                                                        answer:
                                                          opt.option_Value,
                                                      });
                                                      return;
                                                    } else {
                                                      result.push({
                                                        question_id: d.id,
                                                        answer:
                                                          opt.option_Value,
                                                      });
                                                    }
                                                  });

                                                  // result.push({
                                                  //   question_id: d.id,
                                                  //   answer: opt.option_Value,
                                                  // });
                                                }}
                                              />
                                              {opt.option_text}
                                            </label>
                                          );
                                        })}

                                        {/* <div>
                                        answer: {formProps.values.answer}
                                      </div> */}
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </div>
                            );
                          }}
                        />
                      </div>
                    );
                  })}
                  <div className="flex justify-center">
                    <Button
                      block
                      className="border-2 p-2 border-black mt-7"
                      type="submit"
                      // disabled={formProps.isSubmitting}
                    >
                      Eegebnis zeigen
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
}
