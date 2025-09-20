import { useParams } from "react-router-dom";

const CompanyDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Company Details</h2>
      <p>Company ID: {id}</p>
      {/* Here you can display more information based on the ID */}
    </div>
  );
};

export default CompanyDetails;
