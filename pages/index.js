import axios from "axios";
import { Field, FieldArray, Formik } from "formik";
import Head from "next/head";
import { useEffect, useState } from "react";
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
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { useHistory } from "react-router";

var result = new Array();
var MainResult = new Array();
function Home(props) {
  const [value, setValue] = useState({});
  const history = useHistory();

  const [company, setCompany] = useState({
    CDU: 0,
    SPD: 0,
    AfD: 0,
    FDP: 0,
    Grüne: 0,
    Linke: 0,
  });

  const [CDU, setCDU] = useState(0);
  const [SPD, setSPD] = useState(0);
  const [AfD, setAfD] = useState(0);
  const [FDP, setFDP] = useState(0);
  const [Grüne, setGrüne] = useState(0);
  const [Linke, setLinke] = useState(0);

  console.log("props.result", props.result);

  console.log("value", value);
  let graphData = [CDU, SPD, AfD, FDP, Grüne, Linke];

  props.resultEditSetData(graphData);
  console.log("array", result);
  console.log("CDU", CDU);
  console.log("SPD", SPD);
  console.log("AfD", AfD);
  console.log("FDP", FDP);
  console.log("Grüne", Grüne);
  console.log("Linke", Linke);

  const dataLength = data?.length;
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
            onSubmit={(values, setSubmitting) => {
              // setSPD(SPD + 1);
              // if (props.result?.length > 0) {
              //   console.log("result length", props.result?.length);
              //   const resultLength = props.result?.length;

              //   for (const r of props.result) {
              //     console.log("result map");
              //     for (const d of data) {
              //       console.log("data map");
              //       if (r.question_id == d.id) {
              //         console.log("r.question_id", r.question_id, "d.id", d.id);
              //         if (d.SPD == r.answer) {
              //           console.log("SPD before", SPD);
              //           setSPD((prev) => prev + 1);
              //           console.log("SPD", SPD);
              //         }
              //         if (d.CDU == r.answer) {
              //           console.log("CDU", CDU);
              //           setCDU((CDU = CDU + 1));
              //         }
              //         if (d.AfD == r.answer) {
              //           console.log("AfD", AFD);
              //           setAfD((AFD = AfD + 1));
              //           console.log("AfD after", AFD);
              //         }
              //         if (d.FDP == r.answer) {
              //           console.log("FDP");
              //           setFDP((FDP = FDP + 1));
              //         }
              //         if (d.Grüne == r.answer) {
              //           console.log("Grüne");
              //           setGrüne((Grüne = Grüne + 1));
              //         }
              //         if (d.Linke == r.answer) {
              //           console.log("Linke");
              //           setLinke((Linke = Linke + 1));
              //         } else {
              //           console.log("else from last if");
              //         }
              //       }
              //     }
              //   }

              // props.result?.map((r) => {
              //   console.log("result map");
              //   data?.map((d) => {
              //     console.log("data map");
              //     if (r.question_id == d.id) {
              //       console.log("r.question_id", r.question_id, "d.id", d.id);
              //       if (d.SPD == r.answer) {
              //         console.log("SPD");
              //         setSPD(...SPD, SPD + 1);
              //       }
              //       if (d.CDU == r.answer) {
              //         console.log("CDU");
              //         setCDU(...CDU, CDU + 1);
              //       }
              //       if (d.AfD == r.answer) {
              //         console.log("AfD");
              //         setAfD(...AfD, AfD + 1);
              //       }
              //       if (d.FDP == r.answer) {
              //         console.log("FDP");
              //         setFDP(...FDP, FDP + 1);
              //       }
              //       if (d.Grüne == r.answer) {
              //         console.log("Grüne");
              //         setGrüne(...Grüne, Grüne + 1);
              //       }
              //       if (d.Linke == r.answer) {
              //         console.log("Linke");
              //         setLinke(...Linke, Linke + 1);
              //       } else {
              //         console.log("else from last if");
              //       }
              //     }
              //   });
              // });
              // }

              // let graphData = {
              //   CDU: CDU,
              //   SPD: SPD,
              //   AfD: AfD,
              //   FDP: FDP,
              //   Grüne: Grüne,
              //   Linke: Linke,
              // };

              console.log("submit click");
              // axios
              //   .post("https://uditsolutions.in/yarn/public/api/scores", data)
              //   .then((res) => {
              //     console.log(res);
              //     console.log("intial value is submited to results");
              //     result = [];
              //     history.push("/thankyou");
              //   })
              //   .catch((err) => {
              //     console.log(err.response.data);
              //     // history.push("/exam-appeared");

              //   });
            }}
          >
            {({ handleSubmit }) => {
              return (
                <Form onSubmit={handleSubmit}>
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

                                                  if (result.length > 0) {
                                                    for (
                                                      let i = 0;
                                                      i < result.length;
                                                      i++
                                                    ) {
                                                      if (
                                                        result[i]
                                                          ?.question_id == d.id
                                                      ) {
                                                        console.log("splice");
                                                        result.splice(i, 1, {
                                                          question_id: d.id,
                                                          answer:
                                                            opt.option_Value,
                                                        });

                                                        props.resultSetData(
                                                          result
                                                        );

                                                        return;
                                                      } else if (
                                                        result[i]
                                                          .question_id !== d.id
                                                      ) {
                                                        console.log(
                                                          "else_if question of data",
                                                          d.id,
                                                          "result q-id",
                                                          result[i].question_id
                                                        );

                                                        result.push({
                                                          question_id: d.id,
                                                          answer:
                                                            opt.option_Value,
                                                        });

                                                        props.resultSetData(
                                                          result
                                                        );
                                                        return;
                                                      }
                                                    }
                                                    props.resultSetData(result);
                                                  } else {
                                                    console.log("else");
                                                    result.push({
                                                      question_id: d.id,
                                                      answer: opt.option_Value,
                                                    });
                                                    props.resultSetData(result);
                                                  }
                                                }}
                                              />
                                              {opt.option_text}
                                            </label>
                                          );
                                        })}

                                        {/* <div>
                                          answer:{" "}
                                          {result?.map((r) => {
                                            if (r.question_id == d.id) {
                                              return r.answer;
                                            }
                                          })}
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
                      // onClick={handleSubmit}
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

const mapStateToProps = (state) => {
  return {
    result: state.result.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resultSetData: (data) => dispatch(actions.resultSetData(data)),
    onDeleteResult: (data, id) => dispatch(actions.deleteResult(data, id)),
    onPostResultData: (data, user, toggle) =>
      dispatch(actions.postResultData(data, user, toggle)),
    onUpdateResultData: (data, user, toggle) =>
      dispatch(actions.updateResultData(data, user, toggle)),
    resultEditSetData: (data) => dispatch(actions.resultEditSetData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
