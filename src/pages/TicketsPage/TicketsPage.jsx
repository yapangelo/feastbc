import "./TicketsPage.scss";
import Form from "../../components/Form/Form";

const TicketsPage = () => {
  return (
    <section className="ticketspage">
      <Form
        title="RESERVE YOUR TICKETS!"
        inputs={[
          {
            type: "text",
            name: "user_name",
            placeholder: "Name",
            required: true,
          },
          {
            type: "email",
            name: "user_email",
            placeholder: "Email",
            required: true,
          },
          {
            type: "tel",
            name: "user_phone",
            placeholder: "Phone",
            required: true,
          },
          {
            type: "number",
            name: "user_numberoftickets",
            placeholder: "Number of Tickets",
            min: 1,
            required: true,
          },
        ]}
      />
    </section>
  );
};
export default TicketsPage;
