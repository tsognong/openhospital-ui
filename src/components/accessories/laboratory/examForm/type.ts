import { LabWithRowsDTO } from "../../../../generated";
import { TFields } from "../../../../libraries/formDataHandling/types";

interface IExamProps {
  fields: TFields<ExamFormFieldName>;
  creationMode: boolean;
  labWithRowsToEdit: LabWithRowsDTO;
  handleReset: () => void;
}

export type ExamProps = IExamProps;

export type ExamFormFieldName =
  | "exam"
  | "patientCode"
  | "labDate"
  | "material"
  | "result"
  | "note";

export type ExamTransitionState = "IDLE" | "TO_RESET";
