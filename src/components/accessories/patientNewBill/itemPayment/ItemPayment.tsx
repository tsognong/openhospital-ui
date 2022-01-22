import React from "react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, IconButton, Tooltip } from "@material-ui/core";
import SmallButton from "../../smallButton/SmallButton";
import TextButton from "../../textButton/TextButton";
import "../styles.scss";
import { currencyFormat } from "../../../../libraries/formatUtils/currencyFormatting";
import { CheckCircleRounded } from "@material-ui/icons";

interface IOwnProps {
  handlePaymentDialog: () => void;
  saveBill: () => void;
  billTotal: number;
  paymentTotal: number;
}

const ItemPayment: FC<IOwnProps> = ({
  handlePaymentDialog,
  saveBill,
  billTotal,
  paymentTotal,
}) => {
  const { t } = useTranslation();
  return (
    <div className="payment">
      <h2>{t("bill.paymentrecap")}</h2>
      <div className="two-row">
        <span>{t("bill.total")}:</span>
        <span>{currencyFormat(billTotal)}</span>
      </div>
      <div className="two-row">
        <span>{t("bill.paid")}: </span>
        <span>{currencyFormat(paymentTotal)}</span>
      </div>
      <div className="xs-divider"></div>
      <div className="two-row">
        <span>{t("bill.balance")}:</span>
        <span>{currencyFormat(billTotal - paymentTotal)}</span>
      </div>
      <div className="payment__buttons">
        {(billTotal > 0 && billTotal - paymentTotal == 0 && (
          <div>
            <Button
              className={"paid"}
              variant="outlined"
              startIcon={<CheckCircleRounded />}
            >
              {t("bill.paid")}
            </Button>
          </div>
        )) || (
          <SmallButton
            onClick={() => {
              handlePaymentDialog();
            }}
          >
            {t("bill.pay")}
          </SmallButton>
        )}
        <div className="lg-divider"></div>
        <SmallButton onClick={saveBill}>{t("bill.savebill")}</SmallButton>
      </div>
    </div>
  );
};

export { ItemPayment };
