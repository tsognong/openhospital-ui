import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpdDTO } from "../../../../generated";
import { getOpds } from "../../../../state/opds/actions";
import { IState } from "../../../../types";
import Table from "../../table/Table";
import { CircularProgress } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { dateComparator } from "../../../../libraries/sortUtils/sortUtils";
import moment from "moment";
interface IOwnProps {
  shouldUpdateTable: boolean;
}

const PatientOPDTable: FunctionComponent<IOwnProps> = ({
  shouldUpdateTable,
}) => {
  const { t } = useTranslation();
  const header = ["date"];
  const label = {
    date: t("opd.dateopd"),
    disease: t("opd.disease1"),
    disease2: t("opd.disease2"),
    disease3: t("opd.disease3"),
    note: t("opd.note"),
  };
  const order = ["date"];

  const dispatch = useDispatch();
  const data = useSelector<IState, OpdDTO[]>((state) =>
    state.opds.getOpds.data ? state.opds.getOpds.data : []
  );
  const isLoading = useSelector<IState, boolean>(
    (state) => state.opds.createOpd.status === "LOADING"
  );
  const patientCode = useSelector<IState, number | undefined>(
    (state) => state.patients.selectedPatient.data?.code
  );

  useEffect(() => {
    if (shouldUpdateTable) dispatch(getOpds(patientCode));
  }, [dispatch, patientCode, shouldUpdateTable]);

  const formatDataToDisplay = (data: OpdDTO[] | undefined) => {
    let results: any = [];
    if (data)
      results = data.map((item) => {
        return {
          date: item.date ? moment(item.date).format("DD/MM/YYYY") : "",
          disease: item.disease ? item.disease.description : "",
          disease2: item.disease2 ? item.disease2.description : "",
          disease3: item.disease3 ? item.disease3.description : "",
          note: item.note + "",
        };
      });
    return results;
  };

  const onDelete = () => {
    console.log("delete");
  };

  const onEdit = () => {
    console.log("update");
  };

  const onEView = () => {};

  return (
    <>
      <div className="patientOPDTable">
        {!isLoading ? (
          <Table
            rowData={formatDataToDisplay(data)}
            tableHeader={header}
            labelData={label}
            columnsOrder={order}
            rowsPerPage={5}
            rowComparator={dateComparator}
            onDelete={onDelete}
            isCollapsabile={true}
            onEdit={onEdit}
            onView={onEView}
          />
        ) : (
          <CircularProgress
            style={{ marginLeft: "50%", position: "relative" }}
          />
        )}
      </div>
    </>
  );
};

export default PatientOPDTable;
