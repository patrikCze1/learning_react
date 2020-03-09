import React from "react";

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.jobs.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.deleteJob(index)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends React.Component {
  render() {
    const { jobs } = this.props;

    return (
      <div>
        <table className="table">
          <TableHeader />
          <TableBody jobs={jobs} deleteJob={this.props.deleteJob} />
        </table>
      </div>
    );
  }
}

export default Table;
