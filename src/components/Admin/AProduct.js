import React from "react";
import AHeader from "./AProduct/AHeader";
import ACategory from "./AProduct/ACategory";
import ACreate from "./AProduct/ACreate";
import ATicket from "./AProduct/ATicket";

export default function AProduct() {
  return (
    <React.Fragment>
      <AHeader />
      <main style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <ACategory
          activeClass="category__items_type_main"
        />
        <ACreate />
        <ATicket />
      </main>
    </React.Fragment>
  )
}