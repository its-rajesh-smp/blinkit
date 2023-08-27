import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 30,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  info: {
    fontSize: 12,
    marginBottom: 10,
  },
  tableHeader: {
    backgroundColor: "#ECECEC",
    padding: 10,
    fontWeight: "bold",
  },
  tableRow: {
    padding: 10,
  },
  tableCell: {
    padding: 5,
  },
  total: {
    textAlign: "right",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

const Invoice = ({ invoice }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Invoice</Text>
          <Text style={styles.info}>
            Invoice Date: {new Date(invoice.createdAt).toDateString()}
          </Text>
          <Text style={styles.info}>Order id: {invoice.id}</Text>
          <Text style={styles.info}>Address: {invoice.address}</Text>
          <Text style={styles.info}>Delivery Name: {invoice.deliveryName}</Text>
        </View>

        <View style={styles.tableHeader}>
          <Text style={styles.tableCell}>
            Item : {invoice.producttype.product.name}
          </Text>
          <Text style={styles.tableCell}>Type: {invoice.producttype.name}</Text>
          <Text style={styles.tableCell}>
            Price: {invoice.producttype.price}
          </Text>
        </View>

        <Text style={styles.total}>
          Total: {invoice.quantity} * {invoice.producttype.price} ={" "}
          {Number(invoice.quantity) * Number(invoice.producttype.price)}
        </Text>
      </Page>
    </Document>
  );
};

export default Invoice;
