const sql = require("../config/db");

const getAllRecords = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  console.log("DATA", data);
  res.status(200).json({ message: "Бүх рекордс амжилттай", user: data });
};

const getTransaction = async (req, res) => {
  try {
    const [incomes, expenses] = await sql`SELECT transaction_type, SUM(amount) 
                FROM records 
                GROUP BY transaction_type;`;
    res.status(200).json({ message: "Transaction Data", incomes, expenses });
  } catch (error) {
    res.status(400).json({ message: "Алдаа гарлаа", error });
  }
};
const getRecords = async (req, res) => {
  try {
    const [incomes, expenses] = await sql`SELECT transaction_type, SUM(amount) 
                FROM records 
                GROUP BY transaction_type;`;
    res.status(200).json({ message: "Income & Expense", incomes, expenses });
  } catch (error) {
    res.status(400).json({ message: "Алдаа гарлаа", error });
  }
};

const getRecordsDefault = async (req, res) => {
  try {
    const [recordsData] =
      await sql`SELECT name , transaction_type, description FROM records`;
    res.status(200).json({ message: "Record Data", recordsData });
  } catch (error) {
    res.status(400).json({ message: "Алдаа гарлаа", error });
  }
};

const getAllChart = async (req, res) => {
  try {
    const donutChartData =
      await sql`SELECT SUM(r.amount), c.name cat_name FROM records r 
                INNER JOIN categories c ON r.cid=c.id 
                WHERE r.transaction_type='EXP'
                GROUP BY cat_name;`;
    res.status(200).json({ message: "Success", donut: donutChartData });
  } catch (error) {
    res.status(400).json({ message: "Алдаа гарлаа", error });
  }
};
const getBarChart = async (req, res) => {
  try {
    const barAllChart = await sql`  
         SELECT TO_CHAR(DATE_TRUNC('month', r.createdAt), 'Mon') as month,
          SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 END) AS total_income,
          SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 END) AS total_expense
          FROM records r
          GROUP BY DATE_TRUNC('month',r.createdAt)
          ORDER BY DATE_TRUNC('month', r.createdAt);`;
    res.status(200).json({ bar: barAllChart });
  } catch (error) {
    res.status(400).json({ message: "Алдаа гарлаа", error });
  }
};

const createRecords = async (req, res) => {
  const { name, amount, transaction_type, description } = req.body;

  try {
    const data = await sql`
    INSERT INTO records (name, amount, transaction_type, description)
    VALUES ( ${name}, ${amount},${transaction_type} ,${description})
      RETURNING *;
    `;
    res.status(201).json({ message: "Create success", user: data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Create failed", error });
  }
};

const updateRecords = async (req, res) => {
  const { id } = req.params;
  const { email, name, password } = req.body;
  const data = await sql`
    UPDATE records
    SET email = ${email}, name = ${name}, password = ${password}
    WHERE id = ${id}
    RETURNING *;
  `;
  console.log("DATA", data);
  res.status(200).json({ message: "Update success", user: data[0] });
};
const deleteRecords = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete success", user: data });
};
// const getCurrentRecord = async (req, res) => {
//   const { id } = req.record;
//   const [data] = await sql`SELECT * FROM users WHERE id=${id}`;

//   res.status(200).json({ message: "success", record: data });
// };

module.exports = {
  getAllRecords,
  createRecords,
  updateRecords,
  deleteRecords,
  getTransaction,
  getAllChart,
  getBarChart,
  getRecords,
  getRecordsDefault,
};
