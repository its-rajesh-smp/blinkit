import React from "react";
import InputButton from "../Input/InputButton";
import Invoice from "./Invoice";
import { PDFDownloadLink } from "@react-pdf/renderer";

// Download Invoice Btn
export default function DownloadInvoiceBtn({ data }) {
  return (
    <InputButton
      className="  w-fit flex items-center gap-2 h-10 rounded-sm  bg-zinc-400 px-2"
      icon={
        <PDFDownloadLink
          document={<Invoice invoice={data} />}
          fileName="invoice.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      }
    />
  );
}
