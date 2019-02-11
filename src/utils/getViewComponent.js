import React, {Suspense} from "react";
import ProgressHeader from "../components/molecules/Header";

const StepA = React.lazy(() => import("../components/organisms/StepA"));
const StepB = React.lazy(() => import("../components/organisms/StepB"));
const StepC = React.lazy(() => import("../components/organisms/StepC"));
const StepD = React.lazy(() => import("../components/organisms/StepD"));
const StepE = React.lazy(() => import("../components/organisms/StepE"));

const MapChunk = {
  StepA,
  StepB,
  StepC,
  StepD,
  StepE
};

window.mapper = MapChunk;

window.MapChunk = {
  StepA: "",
  StepB: "",
  StepC: "",
  StepD: "",
  StepE: ""
};

const progress = {
  StepA: 5,
  StepB: 10,
  StepC: 15,
  StepD: 20,
  StepE: 25
}


export const getViewComponent = (view, controllerProps) => {
  /* eslint-disable import/namespace */
  const Element = MapChunk[view];
  if (Element !== undefined) {
    return <Suspense fallback={<ProgressHeader
      backAction={false}
      cancelAction={controllerProps.cancel}
      progressPercentage={progress[view]}>
      </ProgressHeader>}>
      <Element key={view} {...controllerProps} />
    </Suspense>;
  }
  return null;
};
